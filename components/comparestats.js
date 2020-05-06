import { Fragment } from "react";

export default function CompareStats(props) {
    const { players } = props;

    const comparePlayers = () => {
        let player1 = players.player1;
        let player2 = players.player2;

        return (
            <Fragment>
                <div className="column">
                    {compareShooting(player1, player2)}
                    {comparePassing(player1, player2)}
                    {compareDefense(player1, player2)}
                </div>
                <div className="column">
                    {compareRebound(player1, player2)}
                    {compareAthleticism(player1, player2)}
                    {compareMental(player1, player2)}
                    {comparePotential(player1, player2)}
                </div>
            </Fragment>
        )
    }

    const renderTable = (name, stats) => {
        const difference = (rating1, rating2) => {
            let diff = rating1 - rating2
            let diffColor;

            if (diff > 0)
                diffColor = "success";
            else if (diff === 0)
                diffColor = ""
            else 
                diffColor = "danger"

            return (
                <td className={`has-text-${diffColor} has-text-centered`}>{diff}</td>
            )
        }

        return (
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <td className="has-text-weight-semibold">{name}</td>
                        <td className="has-text-weight-semibold">{players.player1.name}</td>
                        <td className="has-text-weight-semibold">Difference</td>
                        <td className="has-text-weight-semibold">{players.player2.name}</td>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((rating, i) => {
                        return (
                            <tr key={i}>
                                <td>{rating.name}</td>
                                <td className="has-text-centered">{rating.player1}</td>
                                {difference(rating.player1, rating.player2)}
                                <td className="has-text-centered">{rating.player2}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }

    const compareShooting = (player1, player2) => {
        const shooting = [
            { name: 'Driving Layup', player1: player1.driving_layup, player2: player2.driving_layup },
            { name: 'Post Fade', player1: player1.post_fade, player2: player2.post_fade },
            { name: 'Post Hook', player1: player1.post_hook, player2: player2.post_hook },
            { name: 'Post Moves', player1: player1.post_moves, player2: player2.post_moves },
            { name: 'Draw Foul', player1: player1.draw_foul, player2: player2.draw_foul },
            { name: 'Shot Close', player1: player1.shot_close, player2: player2.shot_close },
            { name: 'Shot Mid', player1: player1.shot_mid, player2: player2.shot_mid },
            { name: 'Shot Three', player1: player1.shot_3pt, player2: player2.shot_3pt },
            { name: 'Free Throw', player1: player1.free_throw, player2: player2.free_throw },
            { name: 'Standing Dunk', player1: player1.standing_dunk, player2: player2.standing_dunk },
            { name: 'Driving Dunk', player1: player1.driving_dunk, player2: player2.driving_dunk },
        ];

        return renderTable("Shooting", shooting);
    }

    const comparePassing = (player1, player2) => {
        const passing = [
            { name: 'Ball Handle', player1: player1.ball_handle, player2: player2.ball_handle },
            { name: 'Pass IQ', player1: player1.passing_iq, player2: player2.passing_iq },
            { name: 'Pass Accuracy', player1: player1.passing_accuracy, player2: player2.passing_accuracy },
        ];

        return renderTable("Passing", passing);
    }

    const compareDefense = (player1, player2) => {
        const defense = [
            { name: 'Block', player1: player1.block, player2: player2.block },
            { name: 'Steal', player1: player1.steal, player2: player2.steal },
            { name: 'Perimeter Defense', player1: player1.perimeter_defense, player2: player2.perimeter_defense },
            { name: 'Interior Defense', player1: player1.interior_defense, player2: player2.interior_defense },
        ];
        return renderTable("Defense", defense);
    }

    const compareRebound = (player1, player2) => {
        const rebound = [
            { name: 'Off Rebound', player1: player1.offensive_rebound, player2: player2.offensive_rebound },
            { name: 'Def Rebound', player1: player1.defensive_rebound, player2: player2.defensive_rebound },
        ];
        return renderTable("Rebound", rebound);
    }

    const compareAthleticism = (player1, player2) => {
        const athleticism = [
            { name: 'Speed', player1: player1.speed, player2: player2.speed },
            { name: 'Speed with Ball', player1: player1.speed_with_ball, player2: player2.speed_with_ball },
            { name: 'Acceleration', player1: player1.acceleration, player2: player2.acceleration },
            { name: 'Vertical', player1: player1.vertical, player2: player2.vertical },
            { name: 'Strength', player1: player1.strength, player2: player2.strength },
            { name: 'Stamina', player1: player1.stamina, player2: player2.stamina },
            { name: 'Hustle', player1: player1.hustle, player2: player2.hustle },
            { name: 'Lat Quickness', player1: player1.lateral_quickness, player2: player2.lateral_quickness },
        ];
        return renderTable("Athleticism", athleticism);
    }

    const compareMental = (player1, player2) => {
        const mental = [
            { name: 'Pass Perception', player1: player1.pass_perception, player2: player2.pass_perception },
            { name: 'Def Consistency', player1: player1.defensive_consistency, player2: player2.defensive_consistency },
            { name: 'Off Consistency', player1: player1.offensive_consistency, player2: player2.offensive_consistency },
            { name: 'Help Defense IQ', player1: player1.help_defense_iq, player2: player2.help_defense_iq },
            { name: 'Shot IQ', player1: player1.shot_iq, player2: player2.shot_iq },
        ];
        return renderTable("Mental", mental);
    }

    const comparePotential = (player1, player2) => {
        const potential = [
            { name: 'Intangibles', player1: player1.intangibles, player2: player2.intangibles },
            { name: 'Potential', player1: player1.potential, player2: player2.potential }
        ];
        return renderTable("Potential", potential);
    }

    return comparePlayers();
}