import React from "react";
import { formatName, levelToNum } from "../lib/helpers";

export default function CompareTable(props) {
    const { tableName, firstName, firstStats, secondName, secondStats, diff } = props;

    const difference = (value, value2) => {
        let diff = levelToNum(value) - levelToNum(value2)
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
        for(let key in firstStats) {
            let newRow = (
                <tr key={i++}>
                    <td className="has-text-weight-semibold">{formatName(key)}</td>
                    <td className="has-text-centered">{firstStats[key]}</td>
                    {diff === false ? "" : difference(firstStats[key], secondStats[key])}
                    <td className="has-text-centered">{secondStats[key]}</td>
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
                    <td className="has-text-weight-semibold">{tableName}</td>
                    <td className="has-text-weight-semibold has-text-centered">{firstName}</td>
                    {diff === false ? "" : <td className="has-text-weight-semibold has-text-centered">Difference</td>}
                    <td className="has-text-weight-semibold has-text-centered">{secondName}</td>
                </tr>
            </thead>
            <tbody>
                {getTableValues()}
            </tbody>
        </table>
    )
}