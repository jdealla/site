import { store } from "./db";
import { formatDuoObject } from "./format-helpers";

export async function getAllDuos() {
    const session = store.openSession();

    const res = await session.query({ collection: "Duos" }).selectFields(["id1", "id2"]).all();

    //remove duplicate ids from id1 or id2

    await session.saveChanges();

    return res;
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