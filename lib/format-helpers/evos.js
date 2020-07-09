import { getTotalStats } from "../helpers";

export function formatEvoObject(player) {
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

    const totalStats = getTotalStats(player);

    const finishingBadges = {
        backdown_punisher: player.backdown_punisher, consistent_finisher: player.consistent_finisher, contact_finisher: player.contact_finisher,
        cross_key_scorer: player.cross_key_scorer, deep_hooks: player.deep_hooks, dropstepper: player.dropstepper, pick_and_roller: player.pick_and_roller,
        pro_touch: player.pro_touch, putback_boss: player.putback_boss, relentless_finisher: player.relentless_finisher, acrobat: player.acrobat,
        lob_city_finisher: player.lob_city_finisher, fancy_footwork: player.fancy_footwork, fastbreak_finisher: player.fastbreak_finisher, giant_slayer: player.giant_slayer,
        showtime: player.showtime, slithery_finisher: player.slithery_finisher, tear_dropper: player.tear_dropper
    }
    
    const shootingBadges = {
        catch_and_shoot: player.catch_and_shoot, corner_specialist: player.corner_specialist, deep_fades: player.deep_fades, flexible_release: player.flexible_release,
        green_machine: player.green_machine, hot_start: player.hot_start, hot_zone_hunter: player.hot_zone_hunter, pick_and_popper: player.pick_and_popper, 
        quick_draw: player.quick_draw, range_extender: player.range_extender, tireless_shooter: player.tireless_shooter, volume_shooter: player.volume_shooter,
        clutch_shooter: player.clutch_shooter, deadeye: player.deadeye, difficult_shots: player.difficult_shots, ice_in_veins: player.ice_in_veins, 
        pump_fake_maestro: player.pump_fake_maestro, slippery_off_ball: player.slippery_off_ball, steady_shooter: player.steady_shooter
    }
    
    const playmakingBadges = {
        downhill: player.downhill, dream_shake: player.dream_shake, post_spin_technician: player.post_spin_technician, quick_first_step: player.quick_first_step,
        bail_out: player.bail_out, break_starter: player.break_starter, dimer: player.dimer, flashy_passer: player.flashy_passer, needle_threader: player.needle_threader,
        pass_fake_maestro: player.pass_fake_maestro, tight_handles: player.tight_handles, ankle_breaker: player.ankle_breaker, floor_general: player.floor_general,
        handles_for_days: player.handles_for_days, lob_city_passer: player.lob_city_passer, space_creator: player.space_creator, stop_and_go: player.stop_and_go,
        unpluckable: player.unpluckable
    }

    const defensiveBadges = {
        box: player.box, brick_wall: player.brick_wall, chase_down_artist: player.chase_down_artist, clamps: player.clamps, defensive_leader: player.defensive_leader,
        heart_crusher: player.heart_crusher, interceptor: player.interceptor, intimidator: player.intimidator, moving_truck: player.moving_truck, pick_dodger: player.pick_dodger,
        pick_pocket: player.pick_pocket, pogo_stick: player.pogo_stick, post_move_lockdown: player.post_move_lockdown, rebound_chaser: player.rebound_chaser,
        rim_protector: player.rim_protector, tireless_defender: player.tireless_defender, trapper: player.trapper, worm: player.worm, lightning_reflexes: player.lightning_reflexes,
        off_ball_pest: player.off_ball_pest
    }

    return {
        stats: {
            shooting: shootingStats, inside: insideScoringStats, athleticism: athleticismStats,
            playmaking: playmakingStats, defense: defenseStats, rebound: reboundStats, potential: potentialStats, totalStats
        },
        badges: {
            finishing: finishingBadges, shooting: shootingBadges, playmaking: playmakingBadges, defensive: defensiveBadges
        },
    }
}