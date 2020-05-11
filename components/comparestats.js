import { Fragment } from "react";
import { formatName } from "../lib/players";

export default function CompareStats(props) {
    const { players } = props;
    const player1 = players.player1;
    const player2 = players.player2;

    const renderTable = (name, first, second) => {
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

        const getTableValues = () => {
            let table = [], i = 0;
            for(let key in first) {
                let newRow = (
                    <tr key={i++}>
                        <td className="has-text-weight-semibold">{formatName(key)}</td>
                        <td className="has-text-centered">{first[key]}</td>
                        {difference(first[key], second[key])}
                        <td className="has-text-centered">{second[key]}</td>
                    </tr>
                )
                table.push(newRow)
            }
            return table;
        }

        return (
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <td className="has-text-weight-semibold">{name}</td>
                        <td className="has-text-weight-semibold has-text-centered">{player1.info.name}</td>
                        <td className="has-text-weight-semibold has-text-centered">Difference</td>
                        <td className="has-text-weight-semibold has-text-centered">{player2.info.name}</td>
                    </tr>
                </thead>
                <tbody>
                    {getTableValues()}
                </tbody>
            </table>
        )
    }

    return (
        <Fragment>
            <div className="column">
                {renderTable("Shooting", player1.stats.shooting, player2.stats.shooting)}
                {renderTable("Inside Scoring", player1.stats.inside, player2.stats.inside)}
                {renderTable("Playmaking", player1.stats.playmaking, player2.stats.playmaking)}
            </div>
            <div className="column">
                {renderTable("Defense", player1.stats.defense, player2.stats.defense)}
                {renderTable("Rebound", player1.stats.rebound, player2.stats.rebound)}
                {renderTable("Potential", player1.stats.potential, player2.stats.potential)}
            </div>
        </Fragment>
    )
}