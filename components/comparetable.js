import React, { Fragment } from "react";
import { formatName, levelToNum, numToLevel } from "../lib/helpers";
import { ratingColor } from "../lib/helpers";

export default function CompareTable(props) {
    const { tableName, firstName, firstStats, firstEvoStats, firstDuoStats, secondName, secondStats, secondEvoStats, secondDuoStats, diff, isBadges, thirdStats, thirdName } = props;
    
    const renderNotification = (upgraded) => {
        if (upgraded)
            return <span className="badge is-success" style={{ display: "inline-block", position: "initial", marginBottom: "30px" }}></span>
        else
            return "";
    }

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
            <span style={{  position: "absolute", marginLeft: 10 }} className={`has-text-${diffColor} has-text-weight-semibold`}>{diff}</span>
        )
    }
	
	const renderBadgeCompare = (cbadge, name) => {	
	    let badgeLevel = cbadge.toLowerCase();
		let badgeImg = `${name}_${badgeLevel}.png`;
        
		if (badgeLevel === "none")
            badgeImg = "badge_none.png";
			
        return (
            <img src={`https://2kdbimg.com/40x40/${badgeImg}`}></img>
		)
	}
	
    const getTableValues = () => {
        let table = [], i = 0;
        for(let key in firstStats) {
            let name = key.replace(/_/g, "");
            let first = firstStats[key];
            let second = secondStats[key];
            let third = false;
            if (thirdStats){
                third = thirdStats[key];
            }
            let upgraded = { player1: false, player2: false };

            if (firstEvoStats != null || firstEvoStats != undefined || firstDuoStats != undefined || firstDuoStats != null) {
                if (firstEvoStats != "" && firstDuoStats === "") {
                    first = isBadges ? numToLevel(levelToNum(first) + firstEvoStats[key]) : (first + firstEvoStats[key]);
                } else if (firstEvoStats != "" && firstDuoStats != "") {
                    first = isBadges ? numToLevel(levelToNum(first) + firstEvoStats[key] + firstDuoStats[key]) : (first + firstEvoStats[key] + firstDuoStats[key]);
                } else if (firstEvoStats === "" && firstDuoStats != "") {
                    first = isBadges ? numToLevel(levelToNum(first) + firstDuoStats[key]) : (first + firstDuoStats[key]);
                }
            }
            
            if (secondEvoStats != null || secondEvoStats != undefined || secondDuoStats != undefined || secondDuoStats != null) {
                if (secondEvoStats != "" && secondDuoStats === "" ) {
                    second = isBadges ? numToLevel(levelToNum(second) + secondEvoStats[key]) : (second + secondEvoStats[key]);
                } else if (secondEvoStats != "" && secondDuoStats != "") {
                    second = isBadges ? numToLevel(levelToNum(first) + secondEvoStats[key] + secondDuoStats[key]) : (second + secondEvoStats[key] + secondDuoStats[key]);
                } else if (secondEvoStats === "" && secondDuoStats != "") {
                    second = isBadges ? numToLevel(levelToNum(second) + secondDuoStats[key]) : (second + secondDuoStats[key]);
                }
            }

            if (firstEvoStats != "" || firstDuoStats != "")
                if (isBadges && first.toLowerCase() !== firstStats[key].toLowerCase() && first.toLowerCase() !== "none")
                    upgraded.player1 = true;
            
            if (secondEvoStats != "" || secondDuoStats != "")
                if (isBadges && second.toLowerCase() !== secondStats[key].toLowerCase() && second.toLowerCase() != "None")
                    upgraded.player2 = true;

            let newRow = (
                <tr key={name}>
                    <td className="has-text-weight-semibold" style={{ verticalAlign: "middle" }}>{formatName(key)}</td>
					  { isBadges ? (
						    <Fragment>
						        <td className="has-text-centered">
                                    {renderBadgeCompare(first, name)}
                                    {diff === false ? "" : difference(first, second)}
                                    {renderNotification(upgraded.player1)}
                                </td> 
						        <td className="has-text-centered">
                                    {renderBadgeCompare(second, name)}
                                    {diff === false ? "" : difference(second, first)}
                                    {renderNotification(upgraded.player2)}
                                </td>
						    </Fragment>
						)
						 :
						  (
						     <Fragment>
						        <td className="has-text-centered">
                                    {ratingColor(first)}
                                    {diff === false ? "" : difference(first, second)}
                                </td> 
						        { second ? <td className="has-text-centered">
                                    {ratingColor(second)}
                                    {diff === false ? "" : difference(second, first)}
                                </td> : '' }
                                { third ? 
                                <td className="has-text-centered">
                                    {ratingColor(third)}
                                </td> : '' }
						     </Fragment>
						  )
				      }
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
                { secondName ? <td className="compare-thead has-text-weight-semibold has-text-centered">{secondName}</td> : ''}
                { thirdName ? <td className="compare-thead has-text-weight-semibold has-text-centered">{thirdName}</td> : ''}
            </tr>
		    {getTableValues()}
			<td style={{ border:0 }}></td>
		</tbody>
    )
}