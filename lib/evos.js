import { store } from "./db";
import { formatEvoObject } from "./format-helpers/evos";
import { findPlayer } from "../lib/players";

export async function getAllEvos() {
    const session = store.openSession();
    const res = await session.query({ collection: "Evos" }).selectFields(["pid"]).distinct().all();
    
    await session.saveChanges();

    let players = [];
    for(let i = 0; i < res.length; i++) {
        const player = await findPlayer(res[i]);
        players.push(player);
    }
    return players;
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

export async function getEvoUpdates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Evos" }).selectFields(["pid", "name", "date"]).distinct().all();

    await session.saveChanges();

    let groupedBy = res.reduce((h, obj) => Object.assign(h, { [obj["date"]]: ( h[obj["date"]] || [] ).concat(obj) }), {});

    let sorted = {};
    Object.keys(groupedBy).sort((a, b) => {
        return a > b ? -1 : 1;
    }).forEach(key => {
        sorted[key] = groupedBy[key];
    })

    return sorted;
}

export async function getEvosByDate(date) {
    const session = store.openSession();
    const res = await session.query({ collection: "Evos" }).whereEquals("date", date).selectFields(["pid", "name", "date"]).distinct().all();

    await session.saveChanges();

    return res;
}

export async function getDates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Evos" })
                        .selectFields("date")
                        .distinct()
                        .all();
    
    await session.saveChanges();

    const paths = res.map(date => {
        return {
            params: {
                date: date
            }
        }
    })

    return paths;
}