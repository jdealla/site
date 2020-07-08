import React, { Fragment } from "react";
import { ratingColor, formatName, getTotalNumOfBadges } from "../lib/helpers";
import TagOverall from "./tagoverall";

export default function PlayersList(props) {
    const { players, searchOptions } = props;

    const handleClick = (playerId, playerName) => {
        window.location = `/player/${playerName.replace(/( |')/g, "-").toLowerCase()}/${playerId}`;
    }

    const displayHeaders = () => {
        const { animations, colleges } = searchOptions.filterOptions;
        let sortProps = searchOptions.sortOptions;
        let headerRows = [], headerCats = [];

        if (animations.length > 0) {
            for(let ani of animations) {
                let cat = ani.split("-")[0];

                let row = (
                    <th key={cat + "header"} className="has-text-centered">{cat.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase()).replace(/A/g, "")}</th>
                )
                    
                if (!headerCats.includes(cat)) {
                    headerCats.push(cat);
                    headerRows.push(row);
                }
            }
            if (headerRows.length < 3) {
                headerRows.unshift((<th key={"themeheader"} className="has-text-centered">Theme</th>));
                if (headerRows.length < 3) {
                    headerRows.unshift((<th key={"teamheader"} className="has-text-centered">Team</th>))
                }
            }
        } else if (colleges.length > 0) {
            let header = (
                <Fragment key="college-headers">
                    <th className="has-text-centered">Theme</th>
                    <th className="has-text-centered">Team</th>
                    <th className="has-text-centered">College</th>
                </Fragment>
            )
            headerRows.push(header);
        } else {
            headerRows.push((
                <Fragment key="default-headers">
                    <th className="has-text-centered">Collection</th>
                    <th className="has-text-centered">Theme</th>
                    <th className="has-text-centered">Team</th>
                </Fragment>
            ))
        }

        if (sortProps.length > 0) {
            for (let prop of sortProps) {
                let row = (<th key={prop + "header"} className="players-sort-column">{formatName(prop)}</th>)

                headerRows.push(row);
            }
        }
        return headerRows
    }

    const displayColumns = (player, totalBadges) => {
        const { animations, colleges } = searchOptions.filterOptions;
        let sortProps = searchOptions.sortOptions;
        let tableRows = [], cats = [];

        if (animations.length > 0) {
            for(let ani of animations) {
                let cat = ani.split("-")[0];
                
                let row = (
                    <td key={cat + "table"} className="has-text-centered">{ratingColor(player[cat])}</td>
                )
                    
                if (!cats.includes(cat)) {
                    cats.push(cat);
                    tableRows.push(row);
                }
            }
                
            if (tableRows.length < 3) {
                tableRows.unshift((<td key={"themetable"} className="has-text-centered">{player.theme}</td>));
                if (tableRows.length < 3) {
                    tableRows.unshift((<td key={"teamtable"} className="has-text-centered">{player.team}</td>))
                }
            }
        } else if (colleges.length > 0) {
            let column = (
                <Fragment key="college-columns">
                    <td className="has-text-centered">{player.theme}</td>
                    <td className="has-text-centered">{player.team}</td>
                    <td className="has-text-centered">{player.college}</td>
                </Fragment>
            );
            tableRows.push(column);
        } else {
            tableRows.push((
                <Fragment key="default-columns">
                    <td className="has-text-centered">{player.collection}</td>
                    <td className="has-text-centered">{player.theme}</td>
                    <td className="has-text-centered">{player.team}</td>
                </Fragment>
            ));
        }

        if (sortProps.length > 0) {
            for(let prop of sortProps) {
                if (prop !== "totalBadges") {
                    let cell = (
                        <td key={prop} className="has-text-centered">{ratingColor(player[prop], prop.includes("_t"))}</td>
                    )
                    tableRows.push(cell)
                } else {
                    let cell = (
                        <td key={prop} className="has-text-centered">
                            <span className="tag is-dark has-text-weight-semibold">{totalBadges.bronze + totalBadges.silver + totalBadges.gold + totalBadges.hof} {'   '}</span>
                        </td>
                    )
                    tableRows.push(cell);
                }
            }
        }
        return tableRows;
    }

    return (
        <div className="table-container">
            <table className="table is-fullwidth is-hoverable is-bordered is-striped" style={{ marginTop: "5px"}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th className="has-text-centered">Overall</th>
                        <th className="has-text-centered">Position</th>
                        <th className="has-text-centered">Offense</th>
                        <th className="has-text-centered">Defense</th>
                        <th className="has-text-centered">Height</th>
                        <th className="has-text-centered">Badges</th>
                        {displayHeaders()}
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => {
                        let totalBadges = getTotalNumOfBadges(player);
                        return (
                            <tr className="playerlist-item" onClick={() => handleClick(player.id, player.name)} key={player.id}>
                                <td>
                                    <div className="container is-flex">
                                        <figure className="image is-24x24" style={{ marginBottom: "5px" }}>
                                            <img src={`https://2kdbimg.com/35/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                                        </figure>
                                        <p className="ml-1">{player.name}</p>
                                    </div>
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <div className="container margin-auto-list">
                                        <TagOverall theme={player.theme} overall={player.overall} />
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
                                {displayColumns(player, totalBadges)}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}