import { store } from "../../lib/db";

export async function getPlayersByName(name) {
    const session = store.openSession();

    const res = await session.query({ collection: "Players" })
                            .search("name", name)
                            .all();

    await session.saveChanges();

    for(let i = 0; i < res.length; i++) {
        delete res[i]["@metadata"];
    }
    return res;
}

async function getSuggestion(word) {
    const session = store.openSession();

    const res = await session.query({ collection: "Players" })
                            .suggestUsing(x => x.byField("name", word))
                            .execute();

    await session.saveChanges();

    return res;
}

export default async (req, res) => {
    let result;

    console.log(req.query);

    if (req.query.name != undefined) {
        result = await getSuggestion(req.query.name);
    } else {
        result = await getAllPlayers();
    }

    res.status(200).json(result);
}