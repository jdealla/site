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

    const query = session.query({ indexName: "Players/Info" })
    .orderByDescending("overall")
    .selectFields([
        "name", "collection", "team", "overall", "off_overall", "def_overall", "position", "secondary_position", "height", "weight",
        "shot_close", "shot_mid", "shot_3pt", "free_throw", "offensive_consistency", "driving_layup", "standing_dunk", "driving_dunk", "draw_foul",
        "post_moves", "post_hook", "post_fade", "hands", "speed", "acceleration", "vertical", "strength", "stamina", "hustle", "speed_with_ball", "ball_handle",
        "passing_accuracy", "passing_vision", "interior_defense", "perimeter_defense", "help_defense_iq", "lateral_quickness", "pass_perception", "steal",
        "block", "defensive_consistency", "offensive_rebound", "defensive_rebound", "backdown_punisher", "consistent_finisher", "contact_finisher",
        "cross_key_scorer", "deep_hooks", "dropstepper", "pick_and_roller", "pro_touch", "putback_boss", "relentless_finisher", "acrobat", "lob_city_finisher", "fancy_footwork",
        "fastbreak_finisher", "giant_slayer", "showtime", "slithery_finisher", "tear_dropper", "catch_and_shoot", "corner_specialist", "deep_fades", "flexible_release",
        "green_machine", "hot_start", "hot_zone_hunter", "pick_and_popper", "quick_draw", "range_extender", "tireless_shooter", "volume_shooter", "clutch_shooter", "deadeye",
        "difficult_shots", "ice_in_veins", "pump_fake_maestro", "slippery_off_ball", "steady_shooter", "downhill", "dream_shake", "post_spin_technician", "quick_first_step",
        "bail_out", "break_starter", "dimer", "flashy_passer", "needle_threader", "pass_fake_maestro", "tight_handles", "ankle_breaker", "floor_general", "handles_for_days",
        "lob_city_passer", "space_craetor", "stop_and_go", "unpluckable", "box", "brick_wall", "chase_down_artist", "clamps", "defensive_leader", "heart_crusher", "interceptor",
        "intimidator", "moving_truck", "pick_dodger", "pick_pocket", "pogo_stick", "post_move_lockdown", "rebound_chaser", "rim_protector", "tireless_defender", "trapper", "worm",
        "lightning_reflexes", "off_ball_pest", "standing_dunk_t", "driving_dunk_t", "flashy_dunk_t", "alley_oop_t", "putback_dunk_t", "crash_t", "driving_layup_t",
        "shot_3pt_t", "spot_up_shot_3pt_t", "transition_pull_up_3pt_t", "roll_vs_pop_t", "transition_spot_up_t", "flashy_pass_t", "alley_oop_pass_t", "pass_interception_t", 
        "take_charge_t", "on_ball_steal_t", "contest_shot_t", "block_shot_t", "foul_t", "hard_foul_t", "lower_base_a", "upper_release_a", "contested_a", "free_throw_a", 
        "leaner_a", "spin_jumper_a", "hop_jumper_a", "dribble_style_a", "size-up_packages_a", "moving_crossover_a", "moving_behind_the_back_a", "moving_spin_a", 
        "moving_hesitation_a", "triple_threat_style_a", "post_fade_a", "post_hook_a", "post_hop_shot_a", "post_shimmy_fade_a", "layup_package_a", "date", "is_evo", "is_duo"
    ]);

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
        layup_package_a.push(allPlayers[i].layup_package_a);
    }

    return { 
        lower_base_a: Array.from(new Set(lower_base_a)), upper_release_a: Array.from(new Set(upper_release_a)), contested_a: Array.from(new Set(contested_a)),
        free_throw_a: Array.from(new Set(free_throw_a)), leaner_a: Array.from(new Set(leaner_a)), spin_jumper_a: Array.from(new Set(spin_jumper_a)),
        hop_jumper_a: Array.from(new Set(hop_jumper_a)), dribble_style_a: Array.from(new Set(dribble_style_a)), size_up_packages: Array.from(new Set(size_up_packages)),
        moving_crossover_a: Array.from(new Set(moving_crossover_a)), moving_behind_the_back_a: Array.from(new Set(moving_behind_the_back_a)), 
        moving_spin_a: Array.from(new Set(moving_spin_a)), moving_hesitation_a: Array.from(new Set(moving_hesitation_a)), 
        triple_threat_style_a: Array.from(new Set(triple_threat_style_a)), post_fade_a: Array.from(new Set(post_fade_a)), post_hook_a: Array.from(new Set(post_hook_a)), 
        post_hop_shot_a: Array.from(new Set(post_hop_shot_a)), post_shimmy_fade_a: Array.from(new Set(post_shimmy_fade_a)), 
        layup_package_a: Array.from(new Set(layup_package_a)),
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