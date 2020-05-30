import { store } from "./db";
import { levelToNum } from "./helpers";

export async function getPlayersByPage(page, size=15) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).skip(page * size).take(size).all();

    await session.saveChanges();
    return res;
}

export async function findPlayer(id) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).whereEquals("id", id).all();

    await session.saveChanges();

    delete res[0]["@metadata"];

    return res;
}

export async function searchPlayer(value) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).search("name", value).all();

    await session.saveChanges();
    return res;
}

export async function getPropNames(type) {
    const allKeys = Object.keys(await findPlayer("8246"));

    // switch(type) {
    //     case "stats": 
    //         return allKeys.slice(playerEnum.STATS.START, playerEnum.STATS.END)
    //     case "tendencies":
    //         return allKeys.slice(playerEnum.TENDENCIES.START, playerEnum.TENDENCIES.END)
    //     case "badges":
    //         return allKeys.slice(playerEnum.BADGES.START, playerEnum.BADGES.END)
    //     case "sigs":
    //         return allKeys.slice(playerEnum.SIGS.START, playerEnum.SIGS.END)
    // }
}

export function getPlayerBySuggestion(value) {
    // let res = await fetch(process.env.DATABASE_URL, { method: "POST" })
    // return await searchPlayer(value);
}

export function sortPlayersByProp(prop) {
}

export async function getPlayersByDates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).selectFields(["id", "name", "date"]).all();

    await session.saveChanges();

    let groupedBy = res.reduce((h, obj) => Object.assign(h, { [obj["date"]]: ( h[obj["date"]] || [] ).concat(obj) }), {});

    let sorted = {};
    Object.keys(groupedBy).sort((a, b) => {
        return a > b ? -1 : 1;
    }).forEach(key => {
        sorted[key] = groupedBy[key];
    })

    return sorted;
}

export async function getPlayersByDate(date) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).whereEquals("date", date).selectFields(["id", "name", "date"]).all();

    await session.saveChanges();
    return res;
}

export async function getPlayersByTheme(theme, collection) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                    .whereEquals("theme", theme)
                    .whereEquals("collection", collection)
                    .selectFields(["id", "name", "overall"])
                    .all();

    await session.saveChanges();
    return res;
}

export async function getValuesFromProp(prop) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                    .selectFields(prop)
                    .distinct()
                    .all();
       
    await session.saveChanges();
    return res;
}

export async function getPlayersIds() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                    .selectFields("id")
                    .distinct()
                    .take(4)
                    .all()
    
    await session.saveChanges();

    const paths = res.map(id => {
        return {
            params: {
                id: id.toString()
            }
        }
    })

    return paths;
}

export async function getDates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                        .selectFields("date")
                        .distinct()
                        .all();
    
    await session.saveChanges();

    const paths = res.map(date => {
        return {
            params: {
                date: date
            }
        }
    })

    return paths;
}

export async function getCollections() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                    .selectFields(["collection", "theme"])
                    .distinct()
                    .all();
    
    await session.saveChanges();

    let groupedBy = res.reduce((h, obj) => Object.assign(h, { [obj["collection"]]: ( h[obj["collection"]] || [] ).concat(obj) }), {});

    return groupedBy;
}

export async function getThemes() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                        .selectFields(["collection", "theme"])
                        .distinct()
                        .take(10)
                        .all();
                    
    await session.saveChanges();

    const paths = res.map(obj => {
        return {
            params: {
                name: obj.collection.toLowerCase().replace(/ /g, "-"),
                themeName: obj.theme.toLowerCase().replace(/ /g, "-")
            }
        }
    })

    return paths;
}
