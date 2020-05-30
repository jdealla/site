import { store } from "../../../../lib/db";

export async function getPlayerBySuggestion(value) {
    const session = store.openSession();
    const players = await session.query({ collection: "Players" })
                                .search("name", value)
                                .all();

    await session.saveChanges();

    return players;
}

export default async (req, res) => {
    const { query: { searchTerm } } = req;

    const data = await getPlayerBySuggestion(searchTerm);

    res.status(200).json(data)
}