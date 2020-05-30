import { store } from "../../../../lib/db";

async function getPlayersByPage(page) {
    const session = store.openSession();
    const players = await session.query({ collection: "Players" })
                                .orderByDescending("overall")
                                .skip(page * 15)
                                .take(15)
                                .all();

    await session.saveChanges();

    return players;
}

export default async (req, res) => {
    const { query: { page } } = req;

    const data = await getPlayersByPage(page);

    res.status(200).json(data)
}