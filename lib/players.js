import { store } from "./db";
import * as StreamUtil from "ravendb/dist/Utility/StreamUtil";

export async function getAllPlayers() {
    const session = store.openSession();
    
    const query = session.query({ indexName: "Players/Info" }).selectFields(["name", "overall", "position", "secondary_position"]);
    
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

    const query = session.query({ indexName: "Players/Info" }).orderByDescending("overall")

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

export async function findPlayer(id) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).whereEquals("id", id).all();

    await session.saveChanges();

    delete res[0]["@metadata"];
    
    return res[0];
}

export function getAllAnimations(allPlayers) {
    let lower_base_a = [], upper_release_a = [], contested_a = [], free_throw_a = [], leaner_a = [], spin_jumper_a = [], hop_jumper_a = [],
    dribble_style_a = [], size_up_packages = [], moving_crossover_a = [], moving_behind_the_back_a = [], moving_spin_a = [], moving_hesitation_a = [],
    triple_threat_style_a = [], post_fade_a = [], post_hook_a = [], post_hop_shot_a = [], post_shimmy_fade_a = [], post_spin_shot_a = [],
    layup_package_a = [], go_to_dunk_a = []

    for (let i = 0; i < allPlayers.length; i++) {
        lower_base_a.push(allPlayers[i].lower_base_a);
        upper_release_a.push(allPlayers[i].upper_release_a);
        contested_a.push(allPlayers[i].contested_a);
        free_throw_a.push(allPlayers[i].free_throw_a);
        leaner_a.push(allPlayers[i].leaner_a);
        spin_jumper_a.push(allPlayers[i].spin_jumper_a);
        hop_jumper_a.push(allPlayers[i].hop_jumper_a);
        dribble_style_a.push(allPlayers[i].dribble_style_a);
        size_up_packages.push(allPlayers[i]["size-up_packages_a"]);
        moving_crossover_a.push(allPlayers[i].moving_crossover_a);
        moving_behind_the_back_a.push(allPlayers[i].moving_behind_the_back_a);
        moving_hesitation_a.push(allPlayers[i].moving_hesitation_a);
        moving_spin_a.push(allPlayers[i].moving_spin_a);
        triple_threat_style_a.push(allPlayers[i].triple_threat_style_a);
        post_fade_a.push(allPlayers[i].post_fade_a);
        post_hook_a.push(allPlayers[i].post_hook_a);
        post_hop_shot_a.push(allPlayers[i].post_hop_shot_a);
        post_shimmy_fade_a.push(allPlayers[i].post_shimmy_fade_a);
        post_spin_shot_a.push(allPlayers[i].post_spin_shot_a);
        layup_package_a.push(allPlayers[i].layup_package_a);
        go_to_dunk_a.push(allPlayers[i].go_to_dunk_a);
    }

    return { 
        lower_base_a: Array.from(new Set(lower_base_a)), upper_release_a: Array.from(new Set(upper_release_a)), contested_a: Array.from(new Set(contested_a)),
        free_throw_a: Array.from(new Set(free_throw_a)), leaner_a: Array.from(new Set(leaner_a)), spin_jumper_a: Array.from(new Set(spin_jumper_a)),
        hop_jumper_a: Array.from(new Set(hop_jumper_a)), dribble_style_a: Array.from(new Set(dribble_style_a)), size_up_packages: Array.from(new Set(size_up_packages)),
        moving_crossover_a: Array.from(new Set(moving_crossover_a)), moving_behind_the_back_a: Array.from(new Set(moving_behind_the_back_a)), 
        moving_spin_a: Array.from(new Set(moving_spin_a)), moving_hesitation_a: Array.from(new Set(moving_hesitation_a)), 
        triple_threat_style_a: Array.from(new Set(triple_threat_style_a)), post_fade_a: Array.from(new Set(post_fade_a)), post_hook_a: Array.from(new Set(post_hook_a)), 
        post_hop_shot_a: Array.from(new Set(post_hop_shot_a)), post_shimmy_fade_a: Array.from(new Set(post_shimmy_fade_a)), 
        post_spin_shot_a: Array.from(new Set(post_spin_shot_a)), layup_package_a: Array.from(new Set(layup_package_a)), go_to_dunk_a: Array.from(new Set(go_to_dunk_a)),
    }
}

export async function getTotalPlayerCount(prop) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" }).count();

    await session.saveChanges();
    return res;
}

export async function getPlayersByDates() {
    const session = store.openSession();
    const query = session.query({ collection: "Players" }).selectFields(["name", "date", "overall"]);

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

    let groupedBy = players.reduce((h, obj) => Object.assign(h, { [obj["date"]]: ( h[obj["date"]] || [] ).concat(obj) }), {});

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
                    .take(1400)
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