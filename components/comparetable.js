import React from "react";
import { formatName, levelToNum } from "../lib/helpers";
import { ratingColor } from "../lib/helpers";

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
            <span style={{position: "absolute", marginLeft: 10 }} className={`has-text-${diffColor} has-text-weight-semibold`}>{diff}</span>
        )
    }
	
    const getTableValues = () => {
        let table = [], i = 0;
        for(let key in firstStats) {
            let newRow = (
                <tr key={i++}>
                    <td className="has-text-weight-semibold">{formatName(key)}</td>
                    <td className="has-text-centered">{ratingColor(firstStats[key])} {diff === false ? "" : difference(firstStats[key], secondStats[key])}</td> 
                    <td className="has-text-centered">{ratingColor(secondStats[key])} {diff === false ? "" : difference(secondStats[key], firstStats[key])}</td>
                </tr>
            )
            table.push(newRow)
        }
        return table;
    }

    return ( 
	    <tbody>
            <tr>
                <td className="compare-thead has-text-weight-semibold">{tableName}</td>
                <td className="compare-thead has-text-weight-semibold has-text-centered">{firstName}</td>
                <td className="compare-thead has-text-weight-semibold has-text-centered">{secondName}</td>
            </tr>
		    {getTableValues()}
			<td style={{ border:0 }}></td> 
		</tbody>
    )
}