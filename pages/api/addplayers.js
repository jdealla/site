import { store } from "../../lib/db";

function getFormattedDate() {
    let date = new Date();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");
    let year = date.getFullYear().toString();

    return month + "-" + day + "-" + year;
}

export async function getNewPlayers() {
    const session = store.openSession();

    let date = getFormattedDate();
    console.log(date);
    const query = await session.query({ collection: "Players" }).whereEquals("date", "06-25-2020").all();
    
    await session.saveChanges();

    return query;
}

export default async (req, res) => {
    const data = await getNewPlayers();
    res.json(data)
}