import { store } from "../../../lib/db";
import { formatPlayerObject } from "../../../lib/players";

export async function getPlayerData(id) {
    const session = store.openSession();
    const player = await session.query({ collection: "Players" }).whereEquals("id", id).first();
    
    await session.saveChanges();

    return formatPlayerObject(player);
}

export default async (req, res) => {
    const { query: { id } } = req;

    const data = await getPlayerData(id)
    res.status(200).json(data)
}