import { store } from "../../../lib/db";
import { findEvos } from "../../../lib/evos";
import { findDuos } from "../../../lib/duos";
import { formatPlayerObject } from "../../../lib/format-helpers/player";

export async function getPlayerData(id) {
    const session = store.openSession();
    const player = await session.query({ collection: "Players" }).whereEquals("id", id).first();
    
    await session.saveChanges();

    return formatPlayerObject(player);
}

export default async (req, res) => {
    const { query: { id } } = req;

    const data = await getPlayerData(id).catch(console.error);

    const evos = await findEvos(id).catch(console.error);

    const duo = await findDuos(id).catch(console.error);

    res.status(200).json([data, evos, duo])
}