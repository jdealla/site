import React from "react";
import { ratingColor, formatName, getTotalNumOfBadges } from "../lib/helpers";
import OverallImage from "./overallimage";

export default function PlayersList(props) {
    const { players, searchOptions } = props;

    const handleClick = (playerId) => {
        window.location = `/player/${playerId}`
    }

    const displayHeaders = () => {
        let animations = searchOptions.filterOptions.animations
        if (animations.length > 0) {
            let rows = [], cats = [];
            for(let ani of animations) {
                let i = 0;
                let cat = ani.split("-")[0];
                
                let row = (
                    <th key={i++} className="has-text-centered">{cat.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/A/g, "")}</th>
                )
                    
                if (!cats.includes(cat)) {
                    cats.push(cat);
                    rows.push(row);
                }
            }
            if (rows.length < 3) {
                rows.unshift((<th className="has-text-centered">Theme</th>));
                if (rows.length < 3) {
                    rows.unshift((<th className="has-text-centered">Team</th>))
                }
            }
            return rows;
        } else {
            return (
                <>
                    <th className="has-text-centered">Collection</th>
                    <th className="has-text-centered">Theme</th>
                    <th className="has-text-centered">Team</th>
                </>
            )
        }
    }

    const displayColumns = (player) => {
        let animations = searchOptions.filterOptions.animations
        if (animations.length > 0) {
            let rows = [], cats = [];
            for(let ani of animations) {
                let i = 0;
                let cat = ani.split("-")[0];
                
                let row = (
                    <td key={i++} className="has-text-centered">{ratingColor(player[cat])}</td>
                )
                    
                if (!cats.includes(cat)) {
                    cats.push(cat);
                    rows.push(row);
                }
            }
                
            if (rows.length < 3) {
                rows.unshift((<td className="has-text-centered">{player.theme}</td>));
                if (rows.length < 3) {
                    rows.unshift((<td className="has-text-centered">{player.team}</td>))
                }
            }
            return rows;
        } else {
            return (
                <>
                    <td className="has-text-centered">{player.collection}</td>
                    <td className="has-text-centered">{player.team}</td>
                    <td className="has-text-centered">{player.theme}</td>
                </>
            )
        }
    }

    return (
        <div className="table-container">
            <table className="table is-fullwidth is-hoverable is-bordered is-striped" style={{ marginTop: "5px"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="has-text-centered">Overall</th>
                        <th className="has-text-centered">Position</th>
                        <th className="has-text-centered">Off Overall</th>
                        <th className="has-text-centered">Def Overall</th>
                        <th className="has-text-centered">Height</th>
                        <th className="has-text-centered">Badges</th>
                        {displayHeaders()}
                        <th className={searchOptions.sortProp === "" ? "is-hidden" : "players-sort-column"}>{formatName(searchOptions.sortProp)}</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => {
                        let totalBadges = getTotalNumOfBadges(player);
                        return (
                            <tr data-href={`/player/${player.id}`} onClick={() => handleClick(player.id)} key={player.id} style={{ cursor: "pointer" }}>
                                <td>
                                    <div className="container is-flex">
                                        <figure className="image is-24x24" style={{ marginBottom: "5px" }}>
                                            <img src={`https://2kdbimg.com/35/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                                        </figure>
                                        <p>{player.name}</p>
                                    </div>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <div className="container margin-auto-list">
                                        <OverallImage size="24x24" overall={player.overall} />
                                        <p className="is-overlay has-text-white inline-number-ovr">
                                            {player.overall}
                                        </p>
                                    </div>
                                </td>
                                <td className="has-text-centered">{player.position}{player.secondary_position != null ? `/${player.secondary_position}` : ""} </td>
                                <td className="has-text-centered">{ratingColor(player.off_overall)}</td>
                                <td className="has-text-centered">{ratingColor(player.def_overall)}</td>
                                <td className="has-text-centered">{player.height}"</td>
                                <td>
                                    <div className="level">   
                                        <div className="level-item has-text-centered" style={{ justifyContent:"space-evenly" }}>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_bronze.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{totalBadges.bronze}</p>
                                            </figure>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_silver.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{totalBadges.silver}</p>
                                            </figure>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_gold.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{totalBadges.gold}</p>
                                            </figure>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_hof.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{totalBadges.hof}</p>
                                            </figure>
                                        </div>
                                    </div>
                                </td>
                                {displayColumns(player)}
                                <td className={searchOptions.sortProp === "" ? "is-hidden" : "has-text-centered"}>
                                    {(searchOptions.sortProp !== "") ? ratingColor(player[searchOptions.sortProp], searchOptions.sortProp.includes("_t")) : ""}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}