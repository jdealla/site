import { store } from "./db";
import { formatEvoObject } from "./format-helpers";
import { getPlayerName } from "../lib/players";
import * as StreamUtil from "ravendb/dist/Utility/StreamUtil";

export async function getAllEvos() {
    const session = store.openSession();
    const query = session.query({ collection: "Evos" }).selectFields(["pid", "evo_num"]);

    const queryStream = await session.advanced.stream(query);
    
    const players = [];
    queryStream.on("data", async (data) => {
        players.push(data.document);
    });
    
    queryStream.on("error", err => {
        console.log(JSON.stringify(err));
    });

    await StreamUtil.finishedAsync(queryStream);
    await session.saveChanges();

    let promises = players.map(async player => {
        let name = await getPlayerName(player.pid);
        return { ...player, name }
    })

    let resolved = await Promise.all(promises);
  
    let reduced = resolved.reduce((h, obj) => Object.assign(h, { [obj["name"]]: ( h[obj["pid"]] || [] ).concat({ pid: obj["pid"], evo_num: obj["evo_num"] }) }), {})

    return reduced;
}

export async function findEvos(id) {
    let evos = [];
    const session = store.openSession();
    const res = await session.query({ collection: "Evos" }).whereEquals("pid", id).all();
    
    await session.saveChanges();

    for(let i = 0; i < res.length; i++) {
        delete res[i]["@metadata"];
    }

    switch(res.length) {
        case 5: evos.push(merge(res[0], res[1], res[2], res[3], res[4]));
        case 4: evos.push(merge(res[0], res[1], res[2], res[3]));
        case 3: evos.push(merge(res[0], res[1], res[2]));
        case 2: evos.push(merge(res[0], res[1]));
        case 1: evos.push(res[0]); break;
    }
    
    function merge(...objects) {
        return objects.reduce((a, obj) => {
            Object.entries(obj).forEach(([key, val]) => {
                if (key != "pid" || key != "id" || key != "evo_num")
                    a[key] = (a[key] || 0) + val;
                else
                    a[key] = a[key]
            });
            return a;
        }, {});
    }
    
    if (evos.length > 1)
        evos.sort((a, b) => a.evo_num > b.evo_num ? 1 : -1)

    for(let i = 0; i < evos.length; i++) {
        evos[i] = formatEvoObject(evos[i]);
    }

    return evos;
}