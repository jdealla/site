import { store } from "./db";
import { formatDuoObject } from "./format-helpers";
import { getPlayerName } from "../lib/players";

export async function getAllDuos() {
    const session = store.openSession();

    const res = await session.query({ collection: "Duos" }).selectFields(["id1", "id2"]).all();

    await session.saveChanges();

    //change it's too inefficient prob
    for(let i = 0; i < res.length - 1; i++) {
        for(let j = i + 1; j < res.length; j++) {
            if (res[i]["id1"] === res[j]["id2"]) {
                res.splice(j, 1);
            }
        }
    }

    let promises = res.map(async player => {
        let name1 = await getPlayerName(player.id1);
        let name2 = await getPlayerName(player.id2);
        return { ...player, name1, name2 }
    })

    let players = await Promise.all(promises);

    return players;
}

export async function findDuos(id) {
    const session = store.openSession();
    const res = await session.query({ collection: "Duos" })
                            .whereEquals("id1", id)
                            .all();
              
    await session.saveChanges();

    if (res.length === 0)
        return null;
    else
        return formatDuoObject(res[0]);
}

export async function findDuoPartner(id) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                            .whereEquals("id", id)
                            .selectFields(["name", "overall"])
                            .all();
              
    await session.saveChanges();

    return res[0];
}