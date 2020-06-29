import { store } from "./db";
import { formatDuoObject } from "./format-helpers/duos";
import { findPlayer } from "../lib/players";

export async function getAllDuos() {
    const session = store.openSession();

    const res = await session.query({ collection: "Duos" }).selectFields(["id1", "id2"]).all();

    await session.saveChanges();

    let players = [];
    for(let i = 0; i < res.length; i++) {
        const player = await findPlayer(res[i].id1);
        players.push(player);
    }

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

// export async function getDuoUpdates() {
//     const res = await session.query({ collection: "Duos" }).selectFields(["id1", "id2"]).all();

//     await session.saveChanges();
// }