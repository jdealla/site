// import allPlayers from "../data/players.csv";
import { store } from "./db.js"
import { levelToNum } from "./helpers";

export async function getPlayersByPage(page, size=15) {
    const session = store.openSession();
    const res =  await session.query({ collection: "Players" })
                        .skip(page * size)
                        .take(size)
                        .all();

    session.clear();
    return res;
}

export async function findPlayer(id) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                        .whereEquals("pid", id)
                        .all();

    delete res[0]["@metadata"];

    session.clear();
    return res;
}

export async function searchPlayer(value) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                        .search("name", value)
                        .all();

    session.clear();
    return res;
}

export async function getPlayerData(id) {
    const session = store.openSession();

    const playerInfo = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["pid", "name", "college", "nickname", "collection", "theme", "team", 
                                            "overall", "off_overall", "def_overall", "position", "secondary_position", 
                                            "height", "weight", "play1", "play2", "play3", "play4"
                                        ])
                            .first()

    const playerHotZones = await session.query({ collection: "Players" })
                                .whereEquals("pid", id)
                                .selectFields(["hz_under_basket", "hz_close_left", "hz_close_middle", "hz_close_right", "hz_mid_left",
                                                "hz_mid_left_center", "hz_mid_center", "hz_mid_right_center", "hz_mid_right", "hz_3pt_left",
                                                "hz_3pt_left_center", "hz_3pt_center", "hz_3pt_right_center", "hz_3pt_right", 
                                            ])
                                .first();

    const shootingStats = await session.query({ collection: "Players" })
                                .whereEquals("pid", id)
                                .selectFields(["shot_close", "shot_mid", "shot_3pt", "shot_iq", "free_throw", "offensive_consistency"])
                                .first();
    
    const insideScoringStats = await session.query({ collection: "Players" })
                                    .whereEquals("pid", id)
                                    .selectFields(["driving_layup", "standing_dunk", "driving_dunk", "draw_foul", "post_moves", "post_hook", 
                                                    "post_fade", "hands"
                                                ])
                                    .first();

    const atheleticismStats = await session.query({ collection: "Players" })
                                    .whereEquals("pid", id)
                                    .selectFields(["speed", "acceleration", "vertical", "strength", "stamina", "hustle", "overall_durability"])
                                    .first();

    const playmakingStats = await session.query({ collection: "Players" })
                                    .whereEquals("pid", id)
                                    .selectFields(["speed_with_ball", "ball_handle", "passing_accuracy", "passing_vision", "passing_iq"])
                                    .first();
    
    const defenseStats = await session.query({ collection: "Players" })
                                .whereEquals("pid", id)
                                .selectFields(["interior_defense", "perimeter_defense", "help_defense_iq", "lateral_quickness", "pass_perception", 
                                                    "steal", "block", "defensive_consistency"
                                                ])
                                .first();

    const reboundStats = await session.query({ collection: "Players" })
                                .whereEquals("pid", id)
                                .selectFields(["offensive_rebound", "defensive_rebound"])
                                .first();

    const potentialStats = await session.query({ collection: "Players" })
                                .whereEquals("pid", id)
                                .selectFields(["intangibles", "potential"])
                                .first();

    const resFinishingBadges = await session.query({ collection: "Players" })
                                    .whereEquals("pid", id)
                                    .selectFields(["backdown_punisher", "consistent_finisher", "contact_finisher", "cross_key_scorer", "deep_hooks", 
                                                    "dropstepper", "pick_and_roller", "pro_touch", "putback_boss", "relentless_finisher", "acrobat", 
                                                    "lob_city_finisher", "fancy_footwork","fastbreak_finisher", "giant_slayer", "showtime", "slithery_finisher", 
                                                    "tear_dropper"
                                                ])
                                    .first();
    
    const resShootingBadges = await session.query({ collection: "Players" })
                                .whereEquals("pid", id)
                                .selectFields(["catch_and_shoot", "corner_specialist", "deep_fades", "flexible_release", "green_machine",
                                                "hot_start", "hot_zone_hunter", "pick_and_popper", "quick_draw", "range_extender", "tireless_shooter",
                                                "volume_shooter", "clutch_shooter", "deadeye", "difficult_shots", "ice_in_veins", "pump_fake_maestro", 
                                                "slippery_off_ball", "steady_shooter"
                                             ])
                                .first();
    
    const resPlaymakingBadges = await session.query({ collection: "Players" })
                                    .whereEquals("pid", id)
                                    .selectFields(["downhill", "dream_shake", "post_spin_technician", "quick_first_step", "bail_out", "break_starter",
                                                    "dimer", "flashy_passer", "needle_threader", "pass_fake_maestro", "tight_handles", "ankle_breaker",
                                                    "floor_general", "handles_for_days", "lob_city_passer", "space_creator", "stop_and_go", "unpluckable"
                                                ])
                                    .first();

    const resDefensiveBadges = await session.query({ collection: "Players" })
                                    .whereEquals("pid", id)
                                    .selectFields(["box", "brick_wall", "chase_down_artist", "clamps", "defensive_leader", "heart_crusher", "interceptor",
                                                    "intimidator", "moving_truck", "pick_dodger", "pick_pocket", "pogo_stick", "post_move_lockdown",
                                                    "rebound_chaser", "rim_protector", "tireless_defender", "trapper", "worm", "lightning_reflexes", "off_ball_pest"
                                                ])
                                    .first();

    const resPersonalityBadges = await session.query({ collection: "Players" })
                                    .whereEquals("pid", id)
                                    .selectFields(["alpha_dog", "enforcer", "expressive", "extremely_confident", "friendly", "high_work_ethic", "keep_it_real", 
                                                    "laid_back", "legendary_work_ethic", "pat_my_back", "reserved", "team_player", "unpredictable"
                                                ])
                                    .first();

    delete resFinishingBadges.id, delete resShootingBadges.id, delete resPlaymakingBadges.id, delete resDefensiveBadges.id, delete resPersonalityBadges.id
    const shootingBadges = sortBadges(resShootingBadges);
    const finishingBadges = sortBadges(resFinishingBadges);
    const playmakingBadges = sortBadges(resPlaymakingBadges);
    const defensiveBadges = sortBadges(resDefensiveBadges);
    const personalityBadges = sortBadges(resPersonalityBadges);
    const totalBadges = getTotalBadges(finishingBadges, shootingBadges, playmakingBadges, defensiveBadges)

    const insideT = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["standing_dunk_t", "driving_dunk_t", "flashy_dunk_t", "alley_oop_t", "putback_dunk_t", "crash_t", "driving_layup_t",
                                            "spin_layup_t", "hop_step_layup_t", "euro_step_layup_t", "floater_t"
                                        ])
                            .first();

    const shootingT = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["step_through_shot_t", "shot_under_basket_t", "shot_close_t", "shot_close_left_t", "shot_close_middle_t", "shot_close_right_t",
                                            "shot_mid_t", "spot_up_shot_mid_t", "off_screen_shot_mid_t", "shot_3pt_t", "spot_up_shot_3pt_t", "off_screen_shot_3pt_t", 
                                            "contested_jumper_mid_t", "contested_jumper_3pt_t", "stepback_jumper_mid_t", "stepback_jumper_3pt_t", "spin_jumper_t", 
                                            "transition_pull_up_3pt_t", "drive_pull_up_3pt_t", "drive_pull_up_mid_t", "use_glass_t"
                                        ])
                            .first();

    const isoT = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["triple_threat_pump_fake_t", "triple_threat_jab_step_t", "triepl_threat_idle_t", "triple_threat_shoot_t", "setup_with_sizeup",
                                            "setup_with_hesitation", "no_setup_dribble"
                                        ])
                            .first();

    const driveT = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["drive_t", "spot_up_drive_t", "off_screen_drive_t", "drive_right_t", "driving_crossover_t", "driving_spin_t", 
                                            "driving_step_back_t", "driving_half_spin_t", "driving_double_crossover_t", "driving_behind_the_back_t",
                                            "driving_dribble_hesitation_t", "driving_in_and_out_t", "no_driving_dribble_move_t", "attack_strong_on_drive_t"
                                        ])
                            .first();

    const freelanceT = await session.query({ collection: "Players" })
                        .whereEquals("pid", id)
                        .selectFields(["shoot_t", "touches_t", "roll_vs_pop_t", "transition_spot_up_t", "iso_vs_elite_defender_t", "iso_vs_good_defender_t", 
                                        "iso_vs_average_defender_t", "iso_vs_poor_defender_t", "play_discipline_t"
                                    ])
                        .first();

    const postT = await session.query({ collection: "Players" })
                        .whereEquals("pid", id)
                        .selectFields(["post_up_t", "post_shimmy_shot_t", "post_face_up_t", "post_back_down_t", "post_aggressive_backdown_t", "shoot_from_post_t",
                                        "post_hook_left_t", "post_hook_right_t", "post_fade_left_t", "post_fade_right_t", "post_up_and_under_t", "post_hop_shot_t", 
                                        "post_step_back_shot_t", "post_drive_t", "post_spin_t", "post_drop_step_t", "post_hop_step_t"
                                    ])
                        .first();

    const passingT = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["dish_to_open_man_t", "flashy_pass_t", "alley_oop_pass_t"])
                            .first();

    const defenseT = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["pass_interception_t", "take_charge_t", "on_ball_steal_t", "contest_shot_t", "block_shot_t", "foul_t", "hard_foul_t"])
                            .first();

    const shootingA = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields(["lower_base_a", "upper_release_a", "contested_a", "free_throw_a", "leaner_a", "spin_jumper_a", "hop_jumper_a"])
                            .first();

    const ballHandleA = await session.query({ collection: "Players" })
                                .whereEquals("pid", id)
                                .selectFields(["dribble_style_a", "size-up_packages_a", "moving_crossover_a", "moving_behind_the_back_a", "moving_spin_a", 
                                                "moving_hesitation_a", "triple_threat_style_a"
                                            ])
                                .first();

    const postA = await session.query({ collection: "Players" })
                        .whereEquals("pid", id)
                        .selectFields(["post_fade_a", "post_hook_a", "post_hop_shot_a", "post_shimmy_fade_a", "post_shimmy_hook_a", "post_spin_shot_a"])
                        .first();

    const layupA = await session.query({ collection: "Players" })
                        .whereEquals("pid", id)
                        .selectFields(["layup_package_a", "go_to_dunk_a", "dunk_pack_1", "dunk_pack_2", "dunk_pack_3", "dunk_pack_4", "dunk_pack_5", "dunk_pack_6", 
                                        "dunk_pack_7", "dunk_pack_8", "dunk_pack_9", "dunk_pack_10", "dunk_pack_11", "dunk_pack_12", "dunk_pack_13", "dunk_pack_14"
                                    ])
                        .first();

    const handsA = await session.query({ collection: "Players" })
                        .whereEquals("pid", id)
                        .selectFields(["dominant_hand", "dominant_dunk_hand"])
                        .first();

    const dateAdded = await session.query({ collection: "Players" })
                            .whereEquals("pid", id)
                            .selectFields("date")
                            .first();
    
    delete playerInfo.id, delete playerHotZones.id, delete shootingStats.id, delete insideScoringStats.id, delete atheleticismStats.id, delete playmakingStats.id
    delete defenseStats.id, delete reboundStats.id, delete potentialStats.id, delete insideT.id, delete shootingT.id, delete isoT.id, delete driveT.id, delete freelanceT.id
    delete postT.id, delete passingT.id, delete defenseT.id, delete shootingA.id, delete ballHandleA.id, delete postA.id, delete layupA.id, delete handsA.id;

    session.clear();
    return {
        info: playerInfo,
        hotzones: playerHotZones,
        stats: {
             shooting: shootingStats,
             inside: insideScoringStats,
             atheleticism: atheleticismStats,
             playmaking: playmakingStats,
             defense: defenseStats,
             rebound: reboundStats,
             potential: potentialStats
        },
        badges: {
            finishing: finishingBadges,
            shooting: shootingBadges,
            playmaking: playmakingBadges,
            defensive: defensiveBadges,
            personality: personalityBadges,
            totalBadges: totalBadges
        },
        tendencies: {
            inside: insideT,
            shooting: shootingT,
            iso: isoT,
            drive: driveT,
            freelance: freelanceT,
            post: postT,
            passing: passingT,
            defense: defenseT
        },
        animations: {
            shooting: shootingA,
            ballhandle: ballHandleA,
            post: postA,
            layup: layupA,
            hands: handsA
        },
        dateAdded: dateAdded
    }
}

export async function getPropNames(type) {
    const allKeys = Object.keys(await findPlayer("8246"));

    switch(type) {
        case "stats": 
            return allKeys.slice(playerEnum.STATS.START, playerEnum.STATS.END)
        case "tendencies":
            return allKeys.slice(playerEnum.TENDENCIES.START, playerEnum.TENDENCIES.END)
        case "badges":
            return allKeys.slice(playerEnum.BADGES.START, playerEnum.BADGES.END)
        case "sigs":
            return allKeys.slice(playerEnum.SIGS.START, playerEnum.SIGS.END)
    }
}

export function getPlayerBySuggestion(value) {
    // let res = await fetch(process.env.DATABASE_URL, { method: "POST" })
    // return await searchPlayer(value);
}

export function sortPlayersByProp(prop) {
}

export async function getPlayersByPropValue(prop, value) {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                    .whereEquals(`${prop}`, `${value}`)
                    .all();
    
    session.clear();
    return res;
}

export function getTotalBadges(finishingBadges, shootingBadges, playmakingBadges, defensiveBadges) {
    let totalFinishing = Object.keys(finishingBadges).length;
    let totalShooting = Object.keys(shootingBadges).length;
    let totalplayMaking = Object.keys(playmakingBadges).length;
    let totalDefensive = Object.keys(defensiveBadges).length;
    let hof = 0;
    let gold = 0
    let silver = 0
    let bronze = 0;

    [finishingBadges, shootingBadges, playmakingBadges, defensiveBadges].forEach((obj) => {
        Object.values(obj).forEach((level) => {
            switch(level) {
                case "HOF": hof++; break;
                case "Gold": gold++; break;
                case "Silver": silver++; break;
                case "Bronze": bronze++; break;
            }
        })
    })

    return {
        finishing: totalFinishing,
        shooting: totalShooting,
        playmaking: totalplayMaking,
        defensive: totalDefensive,
        hofBadges: hof,
        goldBadges: gold,
        silverBadges: silver,
        bronzeBadges: bronze
    }
}

export function sortBadges(badges) {
    let sorted = Object.entries(badges).sort((a, b) => {
        const [aBadge, aLevel] = a;
        const [bBadge, bLevel] = b;

        const numA = levelToNum(aLevel);
        const numB = levelToNum(bLevel);

        if (numA > numB)
            return -1;
        else if (numA == numB)
            return (aBadge > bBadge) ? 1 : -1
        else if (numA < numB)
            return 1;
    }).reduce((sortedObj, key) => {
        let [name, value] = key;
            
        return { ...sortedObj, [name]: value }
    }, {})
    return sorted;
}

export async function getValuesFromProp(prop) {
    const session = store.openSession();
    const res = await session.query({ collection: "Player" })
                    .selectFields(prop)
                    .distinct()
                    .all();

    session.clear();
    return res;
}

export async function getPlayersIds() {
    const session = store.openSession();
    const res = await session.query({ collection: "Players" })
                    .selectFields("pid")
                    .distinct()
                    .take(2)
                    .all()
    
    session.clear();

    const paths = res.map(id => {
        return {
            params: {
                id: id.toString()
            }
        }
    })

    return paths;
}

export async function getUpdateDates() {
    const session = store.openSession();
    const res = await session.query({ collection: "Player" })
                        .selectFields("date")
                        .distinct()
                        .all();
    
    session.clear();

    const paths = res.map(obj => {
        return {
            params: {
                date: obj.date
            }
        }
    })

    return paths;
}

export async function getCollections() {
    const res = await getValuesFromProp("collection");
    
    console.log(res);
    const paths = res.map(obj => {
        return {
            params: {
                name: obj.collection.toLowerCase().replace(/ /g, "-")
            }
        }
    })

    return paths;
}

export async function getThemes() {
    const session = store.openSession();

    const res = await session.query({ collection: "Player" })
                        .selectFields(["collection", "theme"])
                        .distinct()
                        .all();
                    
    session.clear();

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
