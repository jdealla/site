export function getTotalNumOfBadges(player) {
    let totalCount = { bronze: 0, silver: 0, gold: 0, hof: 0 }
    let badges = [
        player.acrobat, player.backdown_punisher, player.consistent_finisher, player.contact_finisher, player.cross_key_scorer, player.deep_hooks, player.dropstepper, 
        player.fancy_footwork, player.fastbreak_finisher, player.giant_slayer, player.lob_city_finisher, player.pick_and_roller, player.pro_touch, player.putback_boss, 
        player.relentless_finisher, player.showtime, player.slithery_finisher, player.tear_dropper, player.catch_and_shoot, player.clutch_shooter, player.corner_specialist, 
        player.deadeye, player.deep_fades, player.difficult_shots,player.flexible_release, player.green_machine, player.hot_start, player.hot_zone_hunter, player.ice_in_veins, 
        player.pick_and_popper, player.pump_fake_maestro, player.quick_draw, player.range_extender, player.slippery_off_ball, player.steady_shooter, player.tireless_shooter, 
        player.volume_shooter, player.ankle_breaker, player.bail_out, player.break_starter, player.dimer, player.downhill, player.dream_shake, player.flashy_passer,
        player.floor_general, player.handles_for_days, player.lob_city_passer, player.needle_threader, player.pass_fake_maestro, player.post_spin_technician, 
        player.quick_first_step, player.space_creator, player.stop_and_go, player.tight_handles, player.unpluckable,
        player.box, player.brick_wall, player.chase_down_artist, player.clamps, player.defensive_leader, player.heart_crusher, player.interceptor, player.intimidator, 
        player.lightning_reflexes, player.moving_truck, player.off_ball_pest, player.pick_dodger, player.pick_pocket, player.pogo_stick, player.post_move_lockdown,
        player.rebound_chaser, player.rim_protector, player.tireless_defender, player.trapper, player.worm, 
    ]

    badges.forEach(badge => {
        switch(badge) {
            case "HOF": totalCount.hof++; break;
            case "Gold": totalCount.gold++; break;
            case "Silver": totalCount.silver++; break;
            case "Bronze": totalCount.bronze++; break;
        }
    })

    return totalCount;
}