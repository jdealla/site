import { Fragment } from "react";
import { formatName } from "../lib/players";

export default function PlayerBadges(props) {
    const { players } = props;
    const player1 = players.player1;
    const player2 = players.player2;

    const renderTable = (name, first, second) => {
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
                {renderTable("Finishing Badges", player1.badges.finishing, player2.badges.finishing)}
                {renderTable("Playmaking Bdages", player1.badges.playmaking, player2.badges.playmaking)}
            </div>
            <div className="column">
                {renderTable("Shooting Badges", player1.badges.shooting, player2.badges.shooting)}
                {renderTable("Defensive Badges", player1.badges.defensive, player2.badges.defensive)}
            </div>
        </Fragment>
    )
}