import { store } from "../../lib/db";
import * as StreamUtil from "ravendb/dist/Utility/StreamUtil";

export async function getTotalPlayers() {
    const session = store.openSession();

    const query = session.query({ indexName: "Players/Info" }).selectFields("name");
    
    let streamStats;
    const queryStream = await session.advanced.stream(query, stats => streamStats = stats);
    
    queryStream.on("data", data => {});

    queryStream.on("error", err => {
        console.log(JSON.stringify(err));
    });
    
    queryStream.on("end", () => {
        // stream ended
    });

    await StreamUtil.finishedAsync(queryStream);
    await session.saveChanges();

    return streamStats;
}

export default async (req, res) => {
    const data = await getTotalPlayers();
    res.json(data);
}