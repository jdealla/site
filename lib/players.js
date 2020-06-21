import { store } from "./db";
import { formatPlayerObject } from "./format-helpers";
import * as StreamUtil from "ravendb/dist/Utility/StreamUtil";

export async function getAllPlayers() {
    const session = store.openSession();
    
    const query = session.query({ collection: "Players" }).selectFields(["name", "overall", "position", "secondary_position"]);
    
    const queryStream = await session.advanced.stream(query);
    
    const players = [];
    queryStream.on("data", async (data) => {
        players.push(data.document);
    });
    
    queryStream.on("error", err => {
        console.log(JSON.stringify(err))
    });
    
    await StreamUtil.finishedAsync(queryStream)
    await session.saveChanges();

    return players;
}

export async function getAllPlayersWithAllStats() {
    const session = store.openSession();

    const query = session.query({ collection: "Players" }).orderByDescending("overall");

    const queryStream = await session.advanced.stream(query);
    
    const players = [];
    queryStream.on("data", async (data) => {
        players.push(data.document);
    });
    
    queryStream.on("error", err => {
        console.log(JSON.stringify(err))
    });
    
    await StreamUtil.finishedAsync(queryStream)
    await session.saveChanges();

    for(let i = 0; i < players.length; i++) {
        delete players[i]["@metadata"];
        players[i] = formatPlayerObject(players[i])
    }

    return players;
}

export async function findAltPlayers(name) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).whereEquals("name", name).selectFields(["overall", "name"]).all();

    for(let i = 0; i < res.length; i++) {
        delete res[i]["@metadata"];
    }

    await session.saveChanges();

    return res;
}

export async function getPlayerName(id) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).whereEquals("id", id).selectFields(["name"]).all();

    await session.saveChanges();

    return res[0];
}

export async function searchPlayer(value) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).search("name", value).all();

    await session.saveChanges();
    return res;
}

export function getAllProps(player) {
    let allProps = {}
    for(const [cat, props] of Object.entries(player)) {
        if (cat === "info") {
            allProps[cat] = [];

            for(const name of Object.keys(props)) {
                allProps[cat].push(name);
            }
        } else if (cat === "stats" || cat === "tendencies" || cat === "badges") {
            for(const [innerCat, prop] of Object.entries(props)) {
                allProps[cat] = { ...allProps[cat], [innerCat]: [] };

                for(const propName of Object.keys(prop)) {
                    allProps[cat][innerCat].push(propName);
                }
            }
        }
    }
    return allProps;
}

export function getAllAnimations(allPlayers) {
    let allAnimations = {};
    let animations = [];
    for(let i = 0; i < allPlayers.length; i++) {
        animations.push(allPlayers[i].animations)
    }

    for(let i = 0; i < animations.length; i++) {
        for (const [cat, innerCat] of Object.entries(animations[i])) {
            if (allAnimations[cat] == undefined || allAnimations[cat] == null)
                allAnimations[cat] = {};

            for(const [propName, value] of Object.entries(innerCat)) {
                if (allAnimations[cat][propName] == undefined || allAnimations[cat][propName] == null) {
                    allAnimations[cat][propName] = [];
                } else {
                    if (!allAnimations[cat][propName].includes(value))
                        allAnimations[cat][propName].push(value);
                }
            }
        }
    }
    return allAnimations;
}

export async function getTotalPlayerCount(prop) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).count();

    await session.saveChanges();
    return res;
}

export async function getPlayersByDates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).selectFields(["name", "date", "overall"]).all();

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
    const res = await session.query({ collection: "Players" })
                            .whereEquals("date", date)
                            .orderByDescending("overall")
                            .selectFields(["name", "overall", "date", "theme"])
                            .all();

    await session.saveChanges();
    return res;
}

export async function getUpdatesNames() {
    const session = store.openSession();
    const res = await session.query({ collection: "Updates" }).selectFields(["date", "update_name"]).all();

    await session.saveChanges();
    return res;
}

export async function getPlayersByTheme(theme) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                    .whereEquals("theme", theme.replace(/-/g, " "))
                    .orderByDescending("overall")
                    .selectFields(["name", "overall"])
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
                    .take(100)
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