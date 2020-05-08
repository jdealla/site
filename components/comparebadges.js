import { Fragment } from "react";

export default function PlayerBadges(props) {
    const { players } = props;

    const compareBadges = () => {
        let player1 = players.player1;
        let player2 = players.player2;

        return (
            <Fragment>
                <div className="column">
                    {compareFinishing(player1, player2)}
                    {comparePlaymaking(player1, player2)}
                </div>
                <div className="column">
                    {compareShooting(player1, player2)}
                    {compareDefensive(player1, player2)}
                </div>
            </Fragment>
        )
    }

    const renderTable = (name, stats) => {
        const levelToNum = (level) => {
            switch(level) {
                case 'HOF': return 4;
                case 'Gold': return 3;
                case 'Silver': return 2;
                case 'Bronze': return 1;
                case 'Yes': return 1;
                default: return 0;
            }
        }

        //sort and change difference color
        const difference = (badge1, badge2) => {
            let diff = levelToNum(badge1) - levelToNum(badge2)
            let diffColor;

            if (diff > 0) {
                diffColor = "success";
                diff = "+" + diff.toString();
            } else if (diff === 0) {
                diffColor = "";
                diff = "-";
            } else {
                diffColor = "danger"
            }

            return (
                <td className={`has-text-${diffColor} has-text-centered`}>{diff}</td>
            )
        }

        return (
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <td className="has-text-weight-semibold">{name}</td>
                        <td className="has-text-weight-semibold has-text-centered">{players.player1.name}</td>
                        <td className="has-text-weight-semibold has-text-centered">Difference</td>
                        <td className="has-text-weight-semibold has-text-centered">{players.player2.name}</td>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((badge, i) => {
                        return (
                            <tr key={i}>
                                <td className="has-text-weight-semibold">{badge.name}</td>
                                <td className={`${badge.player1} has-text-centered`}>{badge.player1}</td>
                                {difference(badge.player1, badge.player2)}
                                <td className={`${badge.player2} has-text-centered`}>{badge.player2}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    const compareFinishing = (player1, player2) => {
        const badges = [
            { name: 'Acrobat', player1: player1.acrobat, player2: player2.acrobat },
            { name: 'Backdown Punisher', player1: player1.backdown_punisher, player2: player2.backdown_punisher },
            { name: 'Consistent Finisher', player1: player1.consistent_finisher, player2: player2.consistent_finisher },
            { name: 'Contact Finisher', player1: player1.contact_finisher, player2: player2.contact_finisher },
            { name: 'Cross-Key Scorer', player1: player1.cross_key_scorer, player2: player2.cross_key_scorer },
            { name: 'Deep Hooks', player1: player1.deep_hooks, player2: player2.deep_hooks },
            { name: 'Drop-Stepper', player1: player1.dropstepper, player2: player2.dropstepper },
            { name: 'Fancy Footwork', player1: player1.fancy_footwork, player2: player2.fancy_footwork },
            { name: 'Fastbreak Finisher', player1: player1.fastbreak_finisher, player2: player2.fastbreak_finisher },
            { name: 'Giant Slayer', player1: player1.giant_slayer, player2: player2.giant_slayer },
            { name: 'Lob City Finisher', player1: player1.lob_city_finisher, player2: player2.lob_city_finisher },
            { name: 'Pick & Roller', player1: player1.pick_and_roller, player2: player2.pick_and_roller },
            { name: 'Pro Touch', player1: player1.pro_touch, player2: player2.pro_touch },
            { name: 'Putback Boss', player1: player1.putback_boss, player2: player2.putback_boss },
            { name: 'Relentless Finisher', player1: player1.relentless_finisher, player2: player2.relentless_finisher },
            { name: 'Showtime', player1: player1.showtime, player2: player2.showtime },
            { name: 'Slithery Finisher', player1: player1.slithery_finisher, player2: player2.slithery_finisher },
            { name: 'Tear Dropper', player1: player1.tear_dropper, player2: player2.tear_dropper },
        ];
        return renderTable("Finishing Badges", badges);
    }

    const compareShooting = (player1, player2) => {
        const badges = [
            { name: 'Catch & Shoot', player1: player1.catch_and_shoot, player2: player2.catch_and_shoot },
            { name: 'Corner Specialist', player1: player1.corner_specialist, player2: player2.corner_specialist },
            { name: 'Clutch Shooter', player1: player1.clutch_shooter, player2: player2.clutch_shooter },
            { name: 'Deadeye', player1: player1.deadeye, player2: player2.deadeye },
            { name: 'Deep Fades', player1: player1.deep_fades, player2: player2.deep_fades },
            { name: 'Difficult Shots', player1: player1.difficult_shots, player2: player2.difficult_shots },
            { name: 'Flexible Release', player1: player1.flexible_release, player2: player2.flexible_release },
            { name: 'Green Machine', player1: player1.green_machine, player2: player2.green_machine },
            { name: 'Hot Start', player1: player1.hot_start, player2: player2.hot_start },
            { name: 'Hot Zone Hunter', player1: player1.hot_zone_hunter, player2: player2.hot_zone_hunter },
            { name: 'Ice In Veins', player1: player1.ice_in_veins, player2: player2.ice_in_veins },
            { name: 'Pick & Popper', player1: player1.pick_and_popper, player2: player2.pick_and_popper },
            { name: 'Pump Fake Maestro', player1: player1.pump_fake_maestro, player2: player2.pump_fake_maestro },
            { name: 'Quick Draw', player1: player1.quick_draw, player2: player2.quick_draw },
            { name: 'Range Extender', player1: player1.range_extender, player2: player2.range_extender },
            { name: 'Slippery Off Ball', player1: player1.slippery_off_ball, player2: player2.slippery_off_ball },
            { name: 'Steady Shooter', player1: player1.corner_specialist, player2: player2.corner_specialist },
            { name: 'Tireless Shooter', player1: player1.tireless_shooter, player2: player2.tireless_shooter },
            { name: 'Volume Shooter', player1: player1.volume_shooter, player2: player2.volume_shooter },
        ];
        return renderTable("Shooting Badges", badges);
    }

    const comparePlaymaking = (player1, player2) => {
        const badges = [
            { name: 'Ankle Breaker', player1: player1.ankle_breaker, player2: player2.ankle_breaker },
            { name: 'Bail Out', player1: player1.bail_out, player2: player2.bail_out },
            { name: 'Break Starter', player1: player1.break_starter, player2: player2.break_starter },
            { name: 'Dimer', player1: player1.dimer, player2: player2.dimer },
            { name: 'Downhill', player1: player1.downhill, player2: player2.downhill },
            { name: 'Dream Shake', player1: player1.dream_shake, player2: player2.dream_shake },
            { name: 'Flashy Passer', player1: player1.flashy_passer, player2: player2.flashy_passer },
            { name: 'Floor General', player1: player1.floor_general, player2: player2.floor_general },
            { name: 'Handles For Days', player1: player1.handles_for_days, player2: player2.handles_for_days },
            { name: 'Lob City Passer', player1: player1.lob_city_passer, player2: player2.lob_city_passer },
            { name: 'Needle Threader', player1: player1.needle_threader, player2: player2.needle_threader },
            { name: 'Pass Fake Maestro', player1: player1.pass_fake_maestro, player2: player2.pass_fake_maestro },
            { name: 'Post Spin Technician', player1: player1.post_spin_technician, player2: player2.post_spin_technician },
            { name: 'Quick First Step', player1: player1.quick_first_step, player2: player2.quick_first_step },
            { name: 'Space Creator', player1: player1.space_creator, player2: player2.space_creator },
            { name: 'Stop & Go', player1: player1.stop_and_go, player2: player2.stop_and_go },
            { name: 'Tight Handles', player1: player1.tight_handles, player2: player2.tight_handles },
            { name: 'Unpluckable', player1: player1.unpluckable, player2: player2.unpluckable },
        ];
        return renderTable("Playmaking Badges", badges);
    }

    const compareDefensive = (player1, player2) => {
        const badges = [
            { name: 'Box', player1: player1.box, player2: player2.box },
            { name: 'Brick Wall', player1: player1.brick_wall, player2: player2.brick_wall },
            { name: 'Chase Down Artist', player1: player1.chase_down_artist, player2: player2.chase_down_artist },
            { name: 'Clamps', player1: player1.clamps, player2: player2.clamps },
            { name: 'Defensive Leader', player1: player1.defensive_leader, player2: player2.defensive_leader },
            { name: 'Heart Crusher', player1: player1.heart_crusher, player2: player2.heart_crusher },
            { name: 'Interceptor', player1: player1.interceptor, player2: player2.interceptor },
            { name: 'Intimidator', player1: player1.intimidator, player2: player2.intimidator },
            { name: 'Lightning Reflexes', player1: player1.lightning_reflexes, player2: player2.lightning_reflexes },
            { name: 'Moving Truck', player1: player1.moving_truck, player2: player2.moving_truck },
            { name: 'Off Ball Pest', player1: player1.off_ball_pest, player2: player2.off_ball_pest },
            { name: 'Pick Dodger', player1: player1.pick_dodger, player2: player2.pick_dodger },
            { name: 'Pick Pocket', player1: player1.pick_pocket, player2: player2.pick_pocket },
            { name: 'Pogo Stick', player1: player1.pogo_stick, player2: player2.pogo_stick },
            { name: 'Post Move Lockdown', player1: player1.post_move_lockdown, player2: player2.post_move_lockdown },
            { name: 'Rebound Chaser', player1: player1.rebound_chaser, player2: player2.rebound_chaser },
            { name: 'Rim Protector', player1: player1.rim_protector, player2: player2.rim_protector },
            { name: 'Tireless Defender', player1: player1.tireless_defender, player2: player2.tireless_defender },
            { name: 'Trapper', player1: player1.trapper, player2: player2.trapper },
            { name: 'Worm', player1: player1.worm, player2: player2.worm },
        ];
        return renderTable("Defensive Badges", badges);
    }

    return compareBadges()
}