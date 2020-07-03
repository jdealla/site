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
    .selectFields([
        "name", "collection", "theme", "team", "overall", "off_overall",	"def_overall", "position", "secondary_position", "height", "weight",
        "shot_close", "shot_mid", "shot_3pt", "shot_iq", "free_throw", "offensive_consistency", "driving_layup", "standing_dunk", "driving_dunk", "draw_foul",
        "post_moves", "post_hook", "post_fade", "hands", "speed", "acceleration", "vertical", "strength", "stamina", "hustle", "overall_durability", "speed_with_ball",
        "ball_handle", "passing_accuracy", "passing_vision", "passing_iq", "interior_defense", "perimeter_defense", "help_defense_iq", "lateral_quickness",
        "pass_perception", "steal", "block", "defensive_consistency", "offensive_rebound", "defensive_rebound", "standing_dunk_t", "driving_dunk_t", "flashy_dunk_t",
        "alley_oop_t", "putback_dunk_t", "crash_t", "driving_layup_t", "shot_3pt_t", "spot_up_shot_3pt_t", "off_screen_shot_3pt_t", "transition_pull_up_3pt_t",
        "roll_vs_pop_t", "transition_spot_up_t", "flashy_pass_t", "alley_oop_pass_t", "pass_interception_t", "take_charge_t", "on_ball_steal_t", "contest_shot_t",
        "block_shot_t", "foul_t", "hard_foul_t", "acrobat", "backdown_punisher", "consistent_finisher", "contact_finisher", "cross_key_scorer", "deep_hooks", "dropstepper", 
        "fancy_footwork", "fastbreak_finisher", "giant_slayer", "lob_city_finisher", "pick_and_roller", "pro_touch", "putback_boss", "relentless_finisher", "showtime",
        "slithery_finisher", "tear_dropper", "catch_and_shoot",	"clutch_shooter", "corner_specialist", "deadeye", "deep_fades",	"difficult_shots", "flexible_release",
        "green_machine", "hot_start", "hot_zone_hunter", "ice_in_veins", "pick_and_popper",	"pump_fake_maestro", "quick_draw", "range_extender", "slippery_off_ball", 
        "steady_shooter", "tireless_shooter", "volume_shooter",	"ankle_breaker", "bail_out", "break_starter", "dimer", "downhill", "dream_shake", "flashy_passer",	
        "floor_general", "handles_for_days", "lob_city_passer",	"needle_threader", "pass_fake_maestro",	"post_spin_technician",	"quick_first_step",	"space_creator",
        "stop_and_go", "tight_handles",	"unpluckable", "box", "brick_wall",	"chase_down_artist", "clamps", "defensive_leader", "heart_crusher",	"interceptor",
        "intimidator", "lightning_reflexes", "moving_truck", "off_ball_pest", "pick_dodger", "pick_pocket",	"pogo_stick", "post_move_lockdown","rebound_chaser",
        "rim_protector", "tireless_defender", "trapper", "worm", "lower_base_a", "upper_release_a",	"contested_a", "free_throw_a", "leaner_a", "spin_jumper_a",	"hop_jumper_a",
        "dribble_style_a", "size_up_packages_a", "moving_crossover_a", "moving_behind_the_back_a", "moving_spin_a", "moving_hesitation_a", "triple_threat_style_a",
        "post_fade_a", "post_hook_a", "post_hop_shot_a", "post_shimmy_fade_a", "layup_package_a", "date", "is_evo", "is_duo", "wingspan"
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