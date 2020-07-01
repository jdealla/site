import { store } from "./db";
import { formatDuoObject } from "./format-helpers/duos";
import { findPlayer, getPlayerName } from "../lib/players";

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

export async function getDuoUpdates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Duos" }).selectFields(["id1", "id2", "name1", "name2", "date"]).all();

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

export async function getDuosByDate(date) {
    const session = store.openSession();
    const res = await session.query({ collection: "Duos" }).whereEquals("date", date).selectFields(["id1", "id2", "name1", "name2", "date"]).all();

    await session.saveChanges();

    return res;
}

export async function getDates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Duos" })
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