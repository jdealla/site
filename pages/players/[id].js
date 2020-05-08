import { useState, Fragment } from "react";
import Head from 'next/head'
import Layout from "../../components/layout";
import Attributes from "../../components/attributes";
import { getPlayersIds, getPlayerData } from "../../lib/players";
import { getPlayerHeight } from "../../lib/players";

export default function Player({ playerData }) {
    const [view, setView] = useState("stats");

    const renderRatings = () => {
        const shooting = [
            { name: 'Driving Layup', rating: playerData.driving_layup },
            { name: 'Post Fade', rating: playerData.post_fade },
            { name: 'Post Hook', rating: playerData.post_hook },
            { name: 'Post Moves', rating: playerData.post_moves },
            { name: 'Draw Foul', rating: playerData.draw_foul },
            { name: 'Shot Close', rating: playerData.shot_close },
            { name: 'Shot Mid', rating: playerData.shot_mid },
            { name: 'Shot Three', rating: playerData.shot_3pt },
            { name: 'Free Throw', rating: playerData.free_throw },
            { name: 'Standing Dunk', rating: playerData.standing_dunk },
            { name: 'Driving Dunk', rating: playerData.driving_dunk },
        ];
        const passing = [
            { name: 'Ball Handle', rating: playerData.ball_handle },
            { name: 'Pass IQ', rating: playerData.passing_iq },
            { name: 'Pass Accuracy', rating: playerData.passing_accuracy },
        ];
        const defense = [
            { name: 'Block', rating: playerData.block },
            { name: 'Steal', rating: playerData.steal },
            { name: 'Perimeter Defense', rating: playerData.perimeter_defense },
            { name: 'Interior Defense', rating: playerData.interior_defense },
        ];
        const rebound = [
            { name: 'Off Rebound', rating: playerData.offensive_rebound },
            { name: 'Def Rebound', rating: playerData.defensive_rebound },
        ];
        const athleticism = [
            { name: 'Speed', rating: playerData.speed },
            { name: 'Speed with Ball', rating: playerData.speed_with_ball },
            { name: 'Acceleration', rating: playerData.acceleration },
            { name: 'Vertical', rating: playerData.vertical },
            { name: 'Strength', rating: playerData.strength },
            { name: 'Stamina', rating: playerData.stamina },
            { name: 'Hustle', rating: playerData.hustle },
            { name: 'Lat Quickness', rating: playerData.lateral_quickness },
        ];
        const mental = [
            { name: 'Pass Perception', rating: playerData.pass_perception },
            { name: 'Def Consistency', rating: playerData.defensive_consistency },
            { name: 'Off Consistency', rating: playerData.offensive_consistency },
            { name: 'Help Defense IQ', rating: playerData.help_defense_iq },
            { name: 'Shot IQ', rating: playerData.shot_iq },
        ];
        const potential = [
            { name: 'Intangibles', rating: playerData.intangibles },
            { name: 'Potential', rating: playerData.potential }
        ];

        return (
            <Fragment>
                <div className="column is-one-fifth-tablet is-half-mobile">
                    <Attributes attributes={shooting} attrName="Shooting" />
                    <Attributes attributes={passing} attrName="Passing" />
                    <Attributes attributes={defense} attrName="Defense" />
                </div>
                <div className="column is-one-fifth-tablet is-half-mobile">
                    <Attributes attributes={rebound} attrName="Rebound" />
                    <Attributes attributes={athleticism} attrName="Athleticism" />
                    <Attributes attributes={mental} attrName="Mental" />
                    <Attributes attributes={potential} attrName="Potential" />
                </div>
            </Fragment>
        )
    }

    const finishingBadges = () => {
        const badges = [
            { name: 'Acrobat', level: playerData.acrobat },
            { name: 'Backdown Punisher', level: playerData.backdown_punisher },
            { name: 'Consistent Finisher', level: playerData.consistent_finisher },
            { name: 'Contact Finisher', level: playerData.contact_finisher },
            { name: 'Cross-Key Scorer', level: playerData.cross_key_scorer },
            { name: 'Deep Hooks', level: playerData.deep_hooks },
            { name: 'Drop-Stepper', level: playerData.dropstepper },
            { name: 'Fancy Footwork', level: playerData.fancy_footwork },
            { name: 'Fastbreak Finisher', level: playerData.fastbreak_finisher },
            { name: 'Giant Slayer', level: playerData.giant_slayer },
            { name: 'Lob City Finisher', level: playerData.lob_city_finisher },
            { name: 'Pick & Roller', level: playerData.pick_and_roller },
            { name: 'Pro Touch', level: playerData.pro_touch },
            { name: 'Putback Boss', level: playerData.putback_boss },
            { name: 'Relentless Finisher', level: playerData.relentless_finisher },
            { name: 'Showtime', level: playerData.showtime},
            { name: 'Slithery Finisher', level: playerData.slithery_finisher },
            { name: 'Tear Dropper', level: playerData.tear_dropper },
        ];
        return renderTag(badges);
    }

    const shootingBadges = () => {
        const badges = [
            { name: 'Catch & Shoot', level: playerData.catch_and_shoot },
            { name: 'Corner Specialist', level: playerData.corner_specialist },
            { name: 'Clutch Shooter', level: playerData.clutch_shooter },
            { name: 'Deadeye', level: playerData.deadeye },
            { name: 'Deep Fades', level: playerData.deep_fades },
            { name: 'Difficult Shots', level: playerData.difficult_shots },
            { name: 'Flexible Release', level: playerData.flexible_release },
            { name: 'Green Machine', level: playerData.green_machine },
            { name: 'Hot Start', level: playerData.hot_start },
            { name: 'Hot Zone Hunter', level: playerData.hot_zone_hunter },
            { name: 'Ice In Veins', level: playerData.ice_in_veins },
            { name: 'Pick & Popper', level: playerData.pick_and_popper },
            { name: 'Pump Fake Maestro', level: playerData.pump_fake_maestro },
            { name: 'Quick Draw', level: playerData.quick_draw },
            { name: 'Range Extender', level: playerData.range_extender },
            { name: 'Slippery Off Ball', level: playerData.slippery_off_ball },
            { name: 'Steady Shooter', level: playerData.steady_shooter },
            { name: 'Tireless Shooter', level: playerData.tireless_shooter },
            { name: 'Volume Shooter', level: playerData.volume_shooter },
        ];
        return renderTag(badges);
    }

    const playmakingBadges = () => {
        const badges = [
            { name: 'Ankle Breaker', level: playerData.ankle_breaker },
            { name: 'Bail Out', level: playerData.bail_out },
            { name: 'Break Starter', level: playerData.break_starter },
            { name: 'Dimer', level: playerData.dimer },
            { name: 'Downhill', level: playerData.downhill },
            { name: 'Dream Shake', level: playerData.dream_shake },
            { name: 'Flashy Passer', level: playerData.flashy_passer },
            { name: 'Floor General', level: playerData.floor_general },
            { name: 'Handles For Days', level: playerData.handles_for_days },
            { name: 'Lob City Passer', level: playerData.lob_city_passer },
            { name: 'Needle Threader', level: playerData.needle_threader },
            { name: 'Pass Fake Maestro', level: playerData.pass_fake_maestro },
            { name: 'Post Spin Technician', level: playerData.post_spin_technician },
            { name: 'Quick First Step', level: playerData.quick_first_step },
            { name: 'Space Creator', level: playerData.space_creator },
            { name: 'Stop & Go', level: playerData.stop_and_go },
            { name: 'Tight Handles', level: playerData.tight_handles },
            { name: 'Unpluckable', level: playerData.unpluckable },
        ];
        return renderTag(badges);
    }

    const defensiveBadges = () => {
        const badges = [
            { name: 'Box', level: playerData.box },
            { name: 'Brick Wall', level: playerData.brick_wall },
            { name: 'Chase Down Artist', level: playerData.chase_down_artist },
            { name: 'Clamps', level: playerData.clamps },
            { name: 'Defensive Leader', level: playerData.defensive_leader },
            { name: 'Heart Crusher', level: playerData.heart_crusher },
            { name: 'Interceptor', level: playerData.interceptor },
            { name: 'Intimidator', level: playerData.intimidator },
            { name: 'Lightning Reflexes', level: playerData.lightning_reflexes },
            { name: 'Moving Truck', level: playerData.moving_truck },
            { name: 'Off Ball Pest', level: playerData.off_ball_pest },
            { name: 'Pick Dodger', level: playerData.pick_dodger },
            { name: 'Pick Pocket', level: playerData.pick_pocket },
            { name: 'Pogo Stick', level: playerData.pogo_stick },
            { name: 'Post Move Lockdown', level: playerData.post_move_lockdown },
            { name: 'Rebound Chaser', level: playerData.rebound_chaser },
            { name: 'Rim Protector', level: playerData.rim_protector },
            { name: 'Tireless Defender', level: playerData.tireless_defender },
            { name: 'Trapper', level: playerData.trapper },
            { name: 'Worm', level: playerData.worm },
        ];
        return renderTag(badges);
    }

    const personalityBadges = () => {
        const badges = [
            { name: 'Alpha Dog', level: playerData.alpha_dog },
            { name: 'Enforcer', level: playerData.enforcer },
            { name: 'Extremely Confident', level: playerData.extremely_confident },
            { name: 'Expressive', level: playerData.expressive },
            { name: 'High Work Ethic', level: playerData.high_work_ethic },
            { name: 'Legendary Work Ethic', level: playerData.legendary_work_ethic },
            { name: 'Pat My Back', level: playerData.pat_my_back },
            { name: 'Unpredictable', level: playerData.unpredictable },
            { name: 'Reserved', level: playerData.reserved },
            { name: 'Friendly', level: playerData.friendly },
            { name: 'Team Player', level: playerData.team_player },
            { name: 'Keep It Real', level: playerData.keep_it_real },
            { name: 'Laid Back', level: playerData.laid_back },
        ];
        return renderTag(badges);
    }

    const renderTag = (data) => {
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

        data.sort((a, b) => {
            let aLevel = levelToNum(a.level);
            let bLevel = levelToNum(b.level);
            
            return (aLevel > bLevel) ? -1 : 1
        })

        return (
            <div className="tags">
                {data.map((badge, i) => <span key={i} className={`tag ${badge.level}`}> {badge.name} </span>)}
            </div>
        )
    }

    const shootingTendencies = () => {
        const tendencies = [
            { name: 'Shot', rating: playerData.shoot_t },
            { name: 'Driving Layup', rating: playerData.driving_layup_t },
            { name: 'Standing Dunk', rating: playerData.standing_dunk_t },
            { name: 'Driving Dunk', rating: playerData.driving_dunk_t },
            { name: 'Flashy Dunk', rating: playerData.flashy_dunk_t },
            { name: 'Alley Oop', rating: playerData.alley_oop_t },
            { name: 'Putback', rating: playerData.putback_dunk_t },
            { name: 'Spin Layup', rating: playerData.spin_layup_t },
            { name: 'Hop Step', rating: playerData.hop_step_layup_t },
            { name: 'Euro Step', rating: playerData.euro_step_layup_t },
            { name: 'Floater', rating: playerData.floater_t },
            { name: 'Shot Close', rating: playerData.shot_close_t },
            { name: 'Shot Mid', rating: playerData.shot_mid_t },
            { name: 'Spot Up Mid', rating: playerData.spot_up_shot_mid_t },
            { name: 'Off Screen Mid', rating: playerData.off_screen_shot_mid_t },
            { name: 'Shot Three', rating: playerData.shot_3pt_t },
            { name: 'Spot Up Three', rating: playerData.spot_up_shot_3pt_t },
            { name: 'Off Screen Three', rating: playerData.off_screen_shot_3pt_t },
            { name: 'Contested Three', rating: playerData.contested_jumper_3pt_t },
            { name: 'Contested Mid', rating: playerData.contested_jumper_mid_t },
            { name: 'Stepback Three', rating: playerData.stepback_jumper_3pt_t },
            { name: 'Stepback Mid', rating: playerData.stepback_jumper_mid_t },
            { name: 'Spin Jumper', rating: playerData.spin_jumper_t },
            { name: 'T. Pull Up Three', rating: playerData.transition_pull_up_3pt_t },
            { name: 'Drive Pull Up Three', rating: playerData.drive_pull_up_3pt_t },
            { name: 'Drive Pull Up Mid', rating: playerData.drive_pull_up_mid_t },
            { name: 'Use Glass', rating: playerData.use_glass_t },
        ]
        return <Attributes attributes={tendencies} attrName="Shooting" />
    }

    const isoTendencies = () => {
        const tendencies = [
            { name: 'Pump Fake', rating: playerData.triple_threat_pump_fake_t },
            { name: 'TThreat Jab Step', rating: playerData.triple_threat_jab_step_t },
            { name: 'TThreat Idle', rating: playerData.triple_threat_idle_t },
            { name: 'TThreat Shoot', rating: playerData.triple_threat_shoot_t },
            { name: 'Setup With Sizeup', rating: playerData.setup_with_sizeup_t },
            { name: 'Setup With Hesi', rating: playerData.setup_with_hesitation_t },
            { name: 'No Setup Dribble', rating: playerData.no_setup_dribble_t },
            { name: 'Drive', rating: playerData.drive_t },
            { name: 'Attack Strong', rating: playerData.attack_strong_on_drive_t },
            { name: 'Drive Right', rating: playerData.drive_right_t },
            { name: 'Dish To Open Man', rating: playerData.dish_to_open_man_t },
        ];
        return <Attributes attributes={tendencies} attrName="Isolation" />
    }

    const postTendencies = () => {
        const tendencies = [
            { name: 'Post Shimmy Shot', rating: playerData.post_shimmy_shot_t },
            { name: 'Post Face Up', rating: playerData.post_face_up_t },
            { name: 'Post Back Down', rating: playerData.post_back_down_t },
            { name: 'P. Agr. Back Down', rating: playerData.post_aggressive_backdown_t },
            { name: 'Shoot From Post', rating: playerData.shoot_from_post_t },
            { name: 'Post Hook Left', rating: playerData.post_hook_left_t },
            { name: 'Post Hook Right', rating: playerData.post_hook_right_t },
            { name: 'Post Fade Left', rating: playerData.post_fade_left_t },
            { name: 'Post Fade Right', rating: playerData.post_fade_right_t },
            { name: 'Post Up & Under', rating: playerData.post_up_and_under_t },
            { name: 'Post Hop Shot', rating: playerData.post_hop_shot_t },
            { name: 'Post Step Back', rating: playerData.post_step_back_shot_t },
            { name: 'Post Drive', rating: playerData.post_drive_t },
            { name: 'Post Spin', rating: playerData.post_spin_t },
            { name: 'Post Drop Step', rating: playerData.post_drop_step_t },
            { name: 'Post Hop Step', rating: playerData.post_hop_step_t },
            { name: 'Step Through Shot', rating: playerData.step_through_shot_t },
        ];
        return <Attributes attributes={tendencies} attrName="Post" />
    }

    const dribbleTendencies = () => {
        const tendencies = [
            { name: 'Crossover', rating: playerData.driving_crossover_t },
            { name: 'Spin', rating: playerData.driving_spin_t },
            { name: 'Step Back', rating: playerData.driving_step_back_t },
            { name: 'Half Spin', rating: playerData.driving_half_spin_t },
            { name: 'Double Cross', rating: playerData.driving_double_crossover_t },
            { name: 'Behind The Back', rating: playerData.driving_behind_the_back_t },
            { name: 'Hesi', rating: playerData.driving_dribble_hesitation_t },
            { name: 'In & Out', rating: playerData.driving_in_and_out_t },
            { name: 'No Dribble Drive', rating: playerData.no_driving_dribble_move_t },
        ];
        return <Attributes attributes={tendencies} attrName="Dribble Moves" />
    }

    const passTendencies = () => {
        const tendencies = [
            { name: 'Flashy Pass', rating: playerData.flashy_pass_t },
            { name: 'Alley Oop Pass', rating: playerData.alley_oop_pass_t },
        ];
        return <Attributes attributes={tendencies} attrName="Passing" />
    }

    const playbookTendencies = () => {
        const tendencies = [
            { name: 'Spot Up Drive', rating: playerData.spot_up_drive_t },
            { name: 'Off Screen Drive', rating: playerData.off_screen_drive_t },
            { name: 'Touches', rating: playerData.touches_t },
            { name: 'Post Up', rating: playerData.post_up_t },
            { name: 'Roll Vs. Pop', rating: playerData.roll_vs_pop_t },
            { name: 'T. Spot Up', rating: playerData.transition_spot_up_t },
            { name: 'Iso Vs. Elite D', rating: playerData.iso_vs_elite_defender_t },
            { name: 'Iso Vs. Good D', rating: playerData.iso_vs_good_defender_t },
            { name: 'Iso Vs. Average D', rating: playerData.iso_vs_average_defender_t },
            { name: 'Iso Vs. Poor D', rating: playerData.iso_vs_poor_defender_t },
            { name: 'Play Discipline', rating: playerData.play_discipline_t },
        ];
        return <Attributes attributes={tendencies} attrName="Playbook" />
    }

    const defensiveTendencies = () => {
        const tendencies = [
            { name: 'Crash', rating: playerData.crash_t },
            { name: 'Pass Interception', rating: playerData.pass_interception_t },
            { name: 'On-Ball Steal', rating: playerData.on_ball_steal_t },
            { name: 'Contest Shot', rating: playerData.contest_shot_t },
            { name: 'Block Shot', rating: playerData.block_shot_t },
            { name: 'Foul', rating: playerData.foul_t },
            { name: 'Hard Foul', rating: playerData.hard_foul_t },
            { name: 'Take Charge', rating: playerData.take_charge_t },
        ];
        return <Attributes attributes={tendencies} attrName="Defensive" />
    }

    const renderView = () => {
        switch(view) {
            case "stats": return (
                <Fragment>
                    {renderRatings()}
                    <div className="column ">
                        <div className="container">
                            <p className="has-text-weight-semibold"> Finishing Badges </p>
                            {finishingBadges()}
                            <p className="has-text-weight-semibold "> Shooting Badges </p>
                            {shootingBadges()}
                            <p className="has-text-weight-semibold "> Playmaking Badges </p>
                            {playmakingBadges()}
                            <p className="has-text-weight-semibold "> Defensive Badges </p>
                            {defensiveBadges()}
                            <p className="has-text-weight-semibold "> Personality Badges </p>
                            {personalityBadges()}
                        </div>
                    </div>
                </Fragment>
            )
            case "tendencies": return (
                <Fragment>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        {shootingTendencies()}
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        {isoTendencies()}
                        {dribbleTendencies()}
                        {passTendencies()}
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        {postTendencies()}
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        {playbookTendencies()}
                        {defensiveTendencies()}
                    </div>
                </Fragment>
            )
            case "animations": return;
            case "diamond-shoe": return;
            default: return;
        }
    }

    return (
        <Layout>
            <Head>
                <title>{playerData.name} | 2KDB</title>
            </Head>
            <div className="container is-fluid ">
                <div className="container ">
                    <div className="columns ">
                        <div className="column is-three-fifths">
                            <p className="title">{playerData.name}</p>
							<p className="subtitle">
							{playerData.collection} / {playerData.theme}
							<br />
							    Height: {getPlayerHeight(playerData.height)}
								<br />
								Weight: {playerData.weight}lbs
								<br />
							</p>
                            <p className="subtitle">
							    Nickname: {playerData.nickname}
								<br />
								Team: {playerData.team}
								<br />
                                Overall: {playerData.overall}
								<br />
								Offensive Overall: {playerData.off_overall}
								<br />
								Defensive Overall: {playerData.def_overall}
                                <br />
                                Position: {playerData.position}{playerData.secondary_position != null ? `/${playerData.secondary_position}` : ""}
                            </p>
                        </div>
                    </div>
                    <div className="columns ">
                        <div className="column is-full">
                            <div className="tabs is-boxed">
                                <ul>
                                    <li className={view === "stats" ? "is-active" : ""} onClick={() => setView("stats")}><a>Stats</a></li>
                                    <li className={view === "tendencies" ? "is-active" : ""} onClick={() => setView("tendencies")}><a>Tendencies</a></li>
                                    <li className={view === "animations" ? "is-active" : ""} onClick={() => setView("animations")}><a>Signature/Animations</a></li>
                                    <li className={view === "diamond-shoe" ? "is-active" : ""} onClick={() => setView("diamond-shoe")}><a>Diamond Shoe Fit</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-multiline is-mobile is-gapless">
                        {renderView()}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getPlayersIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const playerData = getPlayerData(params.id)
    return {
        props: {
            playerData
        }
    }
}