import { store } from "./db";
import { formatEvoObject, formatPlayerObject } from "./format-helpers";

export async function getAllPlayers() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                                .orderBy("name")
                                .selectFields(["name", "overall", "position", "secondary_position"])
                                .all();

    await session.saveChanges();
    return res;
}

export async function getAllPlayersWithAllStats() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                                .orderByDescending("overall")
                                .all();

    await session.saveChanges();

    return res.map(player => formatPlayerObject(player))
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

export async function findEvos(id) {
    let evos = [];
    const session = store.openSession();
    const res = await session.query({ collection: "Evos" }).whereEquals("pid", id).all();
    
    await session.saveChanges();

    for(let i = 0; i < res.length; i++) {
        delete res[i]["@metadata"];
    }

    switch(res.length) {
        case 5: evos.push(merge(res[0], res[1], res[2], res[3], res[4]));
        case 4: evos.push(merge(res[0], res[1], res[2], res[3]));
        case 3: evos.push(merge(res[0], res[1], res[2]));
        case 2: evos.push(merge(res[0], res[1]));
        case 1: evos.push(res[0]); break;
    }
    
    function merge(...objects) {
        return objects.reduce((a, obj) => {
            Object.entries(obj).forEach(([key, val]) => {
                if (key != "pid" || key != "id" || key != "evo_num")
                    a[key] = (a[key] || 0) + val;
                else
                    a[key] = a[key]
            });
            return a;
        }, {});
    }
    
    if (evos.length > 1)
        evos.sort((a, b) => a.evo_num > b.evo_num ? 1 : -1)

    for(let i = 0; i < evos.length; i++) {
        evos[i] = formatEvoObject(evos[i]);
    }

    return evos;
}

export async function findDuos(id) {
    // const session = store.openSession();
    // const res = await session.query({ collection: "Players" }).whereEquals("name", name).all();

    // for(let i = 0; i < res.length; i++) {
    //     delete res[i]["@metadata"];
    // }

    // await session.saveChanges();
}

export async function findPlayer(id) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).whereEquals("id", id).all();

    delete res[0]["@metadata"];

    await session.saveChanges();
    return res;
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
    let animations = allPlayers.map(player => player.animations);
    let allAnimations = {};

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
                            .selectFields(["name", "overall", "date"])
                            .all();

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