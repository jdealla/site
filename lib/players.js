import { store } from "./db";
import * as StreamUtil from "ravendb/dist/Utility/StreamUtil";

export async function getAllPlayers() {
    const session = store.openSession();
    
    const query = session.query({ indexName: "Players/Info" })
                        .orderByDescending("overall")
                        .selectFields(["name", "overall", "position", "secondary_position", "collection", "theme"]);
    
    const queryStream = await session.advanced.stream(query);
    
    const players = [];
    queryStream.on("data", async (data) => {
        players.push(data.document);
    });
    
    queryStream.on("error", err => {
        console.log(JSON.stringify(err));
    });
    
    await StreamUtil.finishedAsync(queryStream);
    await session.saveChanges();

    return players;
}

export async function getAllPlayersWithAllStats() {
    const session = store.openSession();

    const query = session.query({ indexName: "Players/Info" })

    const queryStream = await session.advanced.stream(query);
    
    const players = [];
    queryStream.on("data", async (data) => {
        players.push(data.document);
    });
    
    queryStream.on("error", err => {
        console.log(JSON.stringify(err));
    });
    
    await StreamUtil.finishedAsync(queryStream);
    await session.saveChanges();

    return players;
}