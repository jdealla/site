import { store } from "./db";

export async function getAllShoes() {
    const session = store.openSession();
    const res = await session.query({ collection: "Shoes" }).all();
    
    await session.saveChanges();

    return res;
}