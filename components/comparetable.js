import { Fragment } from "react";

export default function CompareTable(props) {
    const { players, type } = props;
    const player1 = players.player1;
    const player2 = players.player2;

    const comparePlayers = () => {
        
    }

    const renderTable = (name, stats) => {
        const difference = (rating1, rating2) => {
            let diff = rating1 - rating2
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
                        <td className="has-text-weight-semibold has-text-centered">{player1.name}</td>
                        <td className="has-text-weight-semibold has-text-centered">Difference</td>
                        <td className="has-text-weight-semibold has-text-centered">{player2.name}</td>
                    </tr>
                </thead>
                <tbody>
                    {stats.map((rating, i) => {
                        return (
                            <tr key={i}>
                                <td className="has-text-weight-semibold">{rating.name}</td>
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

    return (
        <Fragment>
            <div className="column">
                {comparePlayers()}
            </div>
            <div className="column">

            </div>
        </Fragment>
    )
}