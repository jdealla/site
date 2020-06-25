import { sortBadges, getTotalBadges } from "../helpers";

export function formatPlayerObject(player) {
    const playerInfo = {
        id: player.id, name: player.name, college: player.college, nickname: player.nickname, collection: player.collection, theme: player.theme, 
        team: player.team, overall: player.overall, off_overall: player.off_overall, def_overall: player.def_overall, position: player.position, 
        secondary_position: player.secondary_position, height: player.height, weight: player.weight
    }
    
    const plays = [player.play1, player.play2, player.play3, player.play4];

    const playerHotZones = {
        hz_under_basket: player.hz_under_basket, hz_close_left: player.hz_close_left, hz_close_middle: player.hz_close_middle, hz_close_right: player.hz_close_right, 
        hz_mid_left: player.hz_mid_left, hz_mid_left_center: player.hz_mid_left_center, hz_mid_center: player.hz_mid_center, hz_mid_right_center: player.hz_mid_right_center, 
        hz_mid_right: player.hz_mid_right, hz_3pt_left: player.hz_3pt_left, hz_3pt_left_center: player.hz_3pt_left_center, hz_3pt_center: player.hz_3pt_center, 
        hz_3pt_right_center: player.hz_3pt_right_center, hz_3pt_right: player.hz_3pt_right
    }

    const shootingStats = {
        shot_close: player.shot_close, shot_mid: player.shot_mid, shot_3pt: player.shot_3pt, shot_iq: player.shot_iq, 
        free_throw: player.free_throw, offensive_consistency: player.offensive_consistency
    }

    const insideScoringStats = {
        driving_layup: player.driving_layup, standing_dunk: player.standing_dunk, driving_dunk: player.driving_dunk, draw_foul: player.draw_foul,
        post_moves: player.post_moves, post_hook: player.post_hook, post_fade: player.post_fade, hands: player.hands
    }

    const athleticismStats = {
        speed: player.speed, acceleration: player.acceleration, vertical: player.vertical, strength: player.strength, stamina: player.stamina, 
        hustle: player.hustle
    }

    const playmakingStats = {
        speed_with_ball: player.speed_with_ball, ball_handle: player.ball_handle, passing_accuracy: player.passing_accuracy, 
        passing_vision: player.passing_vision, passing_iq: player.passing_iq
    }
    
    const defenseStats = {
        interior_defense: player.interior_defense, perimeter_defense: player.perimeter_defense, help_defense_iq: player.help_defense_iq,
        lateral_quickness: player.lateral_quickness, pass_perception: player.pass_perception, steal: player.steal, block: player.block,
        defensive_consistency: player.defensive_consistency
    }

    const reboundStats = {
        offensive_rebound: player.offensive_rebound, defensive_rebound: player.defensive_rebound
    }

    const potentialStats = {
        intangibles: player.intangibles, potential: player.potential
    }

    const finishingBadges = sortBadges({
        backdown_punisher: player.backdown_punisher, consistent_finisher: player.consistent_finisher, contact_finisher: player.contact_finisher,
        cross_key_scorer: player.cross_key_scorer, deep_hooks: player.deep_hooks, dropstepper: player.dropstepper, pick_and_roller: player.pick_and_roller,
        pro_touch: player.pro_touch, putback_boss: player.putback_boss, relentless_finisher: player.relentless_finisher, acrobat: player.acrobat,
        lob_city_finisher: player.lob_city_finisher, fancy_footwork: player.fancy_footwork, fastbreak_finisher: player.fastbreak_finisher, giant_slayer: player.giant_slayer,
        showtime: player.showtime, slithery_finisher: player.slithery_finisher, tear_dropper: player.tear_dropper
    })
    
    const shootingBadges = sortBadges({
        catch_and_shoot: player.catch_and_shoot, corner_specialist: player.corner_specialist, deep_fades: player.deep_fades, flexible_release: player.flexible_release,
        green_machine: player.green_machine, hot_start: player.hot_start, hot_zone_hunter: player.hot_zone_hunter, pick_and_popper: player.pick_and_popper, 
        quick_draw: player.quick_draw, range_extender: player.range_extender, tireless_shooter: player.tireless_shooter, volume_shooter: player.volume_shooter,
        clutch_shooter: player.clutch_shooter, deadeye: player.deadeye, difficult_shots: player.difficult_shots, ice_in_veins: player.ice_in_veins, 
        pump_fake_maestro: player.pump_fake_maestro, slippery_off_ball: player.slippery_off_ball, steady_shooter: player.steady_shooter
    })
    
    const playmakingBadges = sortBadges({
        downhill: player.downhill, dream_shake: player.dream_shake, post_spin_technician: player.post_spin_technician, quick_first_step: player.quick_first_step,
        bail_out: player.bail_out, break_starter: player.break_starter, dimer: player.dimer, flashy_passer: player.flashy_passer, needle_threader: player.needle_threader,
        pass_fake_maestro: player.pass_fake_maestro, tight_handles: player.tight_handles, ankle_breaker: player.ankle_breaker, floor_general: player.floor_general,
        handles_for_days: player.handles_for_days, lob_city_passer: player.lob_city_passer, space_creator: player.space_creator, stop_and_go: player.stop_and_go,
        unpluckable: player.unpluckable
    })

    const defensiveBadges = sortBadges({
        box: player.box, brick_wall: player.brick_wall, chase_down_artist: player.chase_down_artist, clamps: player.clamps, defensive_leader: player.defensive_leader,
        heart_crusher: player.heart_crusher, interceptor: player.interceptor, intimidator: player.intimidator, moving_truck: player.moving_truck, pick_dodger: player.pick_dodger,
        pick_pocket: player.pick_pocket, pogo_stick: player.pogo_stick, post_move_lockdown: player.post_move_lockdown, rebound_chaser: player.rebound_chaser,
        rim_protector: player.rim_protector, tireless_defender: player.tireless_defender, trapper: player.trapper, worm: player.worm, lightning_reflexes: player.lightning_reflexes,
        off_ball_pest: player.off_ball_pest
    })

    const personalityBadges = sortBadges({
        alpha_dog: player.alpha_dog, enforcer: player.enforcer, expressive: player.expressive, extremely_confident: player.extremely_confident, friendly: player.friendly,
        high_work_ethic: player.high_work_ethic, keep_it_real: player.keep_it_real, laid_back: player.laid_back, legendary_work_ethic: player.legendary_work_ethic,
        pat_my_back: player.pat_my_back, reserved: player.reserved, team_player: player.team_player, unpredictable: player.unpredictable
    })

    const totalBadges = getTotalBadges(finishingBadges, shootingBadges, playmakingBadges, defensiveBadges)

    const insideT = {
        standing_dunk_t: player.standing_dunk_t, driving_dunk_t: player.driving_dunk_t, flashy_dunk_t: player.flashy_dunk_t, alley_oop_t: player.alley_oop_t,
        putback_dunk_t: player.putback_dunk_t, crash_t: player.crash_t, driving_layup_t: player.driving_layup_t, spin_layup_t: player.spin_layup_t, 
        hop_step_layup_t: player.hop_step_layup_t, euro_step_layup_t: player.euro_step_layup_t, floater_t: player.floater_t
    }

    const shootingT = {
        step_through_shot_t: player.step_through_shot_t, shot_under_basket_t: player.shot_under_basket_t, shot_close_t: player.shot_close_t, 
        shot_close_left_t: player.shot_close_left_t, shot_close_middle_t: player.shot_close_middle_t, shot_close_right_t: player.shot_close_right_t,
        shot_mid_t: player.shot_mid_t, spot_up_shot_mid_t: player.spot_up_shot_mid_t, off_screen_shot_mid_t: player.off_screen_shot_mid_t, 
        shot_3pt_t: player.shot_3pt_t, spot_up_shot_3pt_t: player.spot_up_shot_3pt_t, off_screen_shot_3pt_t: player.off_screen_shot_3pt_t,
        contested_jumper_mid_t: player.contested_jumper_mid_t, contested_jumper_3pt_t: player.contested_jumper_3pt_t, stepback_jumper_mid_t: player.stepback_jumper_mid_t,
        stepback_jumper_3pt_t: player.stepback_jumper_3pt_t, spin_jumper_t: player.spin_jumper_t, transition_pull_up_3pt_t: player.transition_pull_up_3pt_t, 
        drive_pull_up_3pt_t: player.drive_pull_up_3pt_t, drive_pull_up_mid_t: player.drive_pull_up_mid_t, use_glass_t: player.use_glass_t
    }   

    const isoT = {
        triple_threat_pump_fake_t: player.triple_threat_pump_fake_t, triple_threat_jab_step_t: player.triple_threat_jab_step_t, 
        triple_threat_idle_t: player.triple_threat_idle_t, triple_threat_shoot_t: player.triple_threat_shoot_t, setup_with_sizeup_t: player.setup_with_sizeup_t,
        setup_with_hesitation_t: player.setup_with_hesitation_t, no_setup_dribble_t: player.no_setup_dribble_t
    }

    const driveT = {
        drive_t: player.drive_t, spot_up_drive_t: player.spot_up_drive_t, off_screen_drive_t: player.off_screen_drive_t, drive_right_t: player.drive_right_t,
        driving_crossover_t: player.driving_crossover_t, driving_spin_t: player.driving_spin_t, driving_step_back_t: player.driving_step_back_t, 
        driving_half_spin_t: player.driving_half_spin_t, driving_double_crossover_t: player.driving_double_crossover_t, 
        driving_behind_the_back_t: player.driving_behind_the_back_t, driving_dribble_hesitation_t: player.driving_dribble_hesitation_t,
        driving_in_and_out_t: player.driving_in_and_out_t, no_driving_dribble_move_t: player.no_driving_dribble_move_t, attack_strong_on_drive_t: player.attack_strong_on_drive_t
    }

    const freelanceT = {
        shoot_t: player.shoot_t, touches_t: player.touches_t, roll_vs_pop_t: player.roll_vs_pop_t, transition_spot_up_t: player.transition_spot_up_t, 
        iso_vs_elite_defender_t: player.iso_vs_elite_defender_t, iso_vs_good_defender_t: player.iso_vs_good_defender_t, iso_vs_average_defender_t: player.iso_vs_average_defender_t,
        iso_vs_poor_defender_t: player.iso_vs_poor_defender_t, play_discipline_t: player.play_discipline_t
    }

    const postT = {
        post_up_t: player.post_up_t, post_shimmy_shot_t: player.post_shimmy_shot_t, post_face_up_t: player.post_face_up_t, post_back_down_t: player.post_back_down_t,
        post_aggressive_backdown_t: player.post_aggressive_backdown_t, shoot_from_post_t: player.shoot_from_post_t, post_hook_left_t: player.post_hook_left_t,
        post_hook_right_t: player.post_hook_right_t, post_fade_left_t: player.post_fade_left_t, post_fade_right_t: player.post_fade_right_t, 
        post_up_and_under_t: player.post_up_and_under_t, post_hop_shot_t: player.post_hop_shot_t, post_step_back_shot_t: player.post_step_back_shot_t,
        post_drive_t: player.post_drive_t, post_spin_t: player.post_spin_t, post_drop_step_t: player.post_drop_step_t, post_hop_step_t: player.post_hop_step_t
    }

    const passingT = {
        dish_to_open_man_t: player.dish_to_open_man_t, flashy_pass_t: player.flashy_pass_t, alley_oop_pass_t: player.alley_oop_pass_t
    }

    const defenseT = {
        pass_interception_t: player.pass_interception_t, take_charge_t: player.take_charge_t, on_ball_steal_t: player.on_ball_steal_t, 
        contest_shot_t: player.contest_shot_t, block_shot_t: player.block_shot_t, foul_t: player.foul_t, hard_foul_t: player.hard_foul_t
    }

    const shootingA = {
        lower_base_a: player.lower_base_a, upper_release_a: player.upper_release_a, contested_a: player.contested_a, free_throw_a: player.free_throw_a,
        leaner_a: player.leaner_a, spin_jumper_a: player.spin_jumper_a, hop_jumper_a: player.hop_jumper_a
    }

    const ballHandleA = {
        dribble_style_a: player.dribble_style_a, size_up_packages_a: player["size-up_packages_a"], moving_crossover_a: player.moving_crossover_a, 
        moving_behind_the_back_a: player.moving_behind_the_back_a, moving_spin_a: player.moving_spin_a, moving_hesitation_a: player.moving_hesitation_a,
        triple_threat_style_a: player.triple_threat_style_a
    }

    const postA = {
        post_fade_a: player.post_fade_a, post_hook_a: player.post_hook_a, post_hop_shot_a: player.post_hop_shot_a, 
        post_shimmy_fade_a: player.post_shimmy_fade_a, post_spin_shot_a: player.post_spin_shot_a
    }

    const layupA = {
        layup_package_a: player.layup_package_a, go_to_dunk_a: player.go_to_dunk_a, dunk_pack_1: player.dunk_pack_1, dunk_pack_2: player.dunk_pack_2,
        dunk_pack_3: player.dunk_pack_3, dunk_pack_4: player.dunk_pack_4, dunk_pack_5: player.dunk_pack_5, dunk_pack_6: player.dunk_pack_6,
        dunk_pack_7: player.dunk_pack_7, dunk_pack_8: player.dunk_pack_8, dunk_pack_9: player.dunk_pack_9, dunk_pack_10: player.dunk_pack_10,
        dunk_pack_11: player.dunk_pack_11, dunk_pack_12: player.dunk_pack_12, dunk_pack_13: player.dunk_pack_13, dunk_pack_14: player.dunk_pack_14
    }

    const handsA = {
        dominant_hand: player.dominant_hand, dominant_dunk_hand: player.dominant_dunk_hand
    }

    const dateAdded = player.date

    return {
        info: playerInfo,
        plays,
        hotzones: playerHotZones,
        stats: {
             shooting: shootingStats, inside: insideScoringStats, athleticism: athleticismStats,
             playmaking: playmakingStats, defense: defenseStats, rebound: reboundStats, potential: potentialStats
        },
        badges: {
            finishing: finishingBadges, shooting: shootingBadges, playmaking: playmakingBadges,
            defensive: defensiveBadges, personality: personalityBadges, totalBadges: totalBadges
        },
        tendencies: {
            inside: insideT, shooting: shootingT, iso: isoT, drive: driveT,
            freelance: freelanceT, post: postT, passing: passingT, defense: defenseT
        },
        animations: {
            shooting: shootingA, ballhandle: ballHandleA, post: postA,
            layup: layupA, hands: handsA
        },
        dateAdded
    }
}