import React from "react";
import { useRouter } from "next/router";
import { ratingColor, formatName } from "../lib/helpers";

import OverallImage from "./overallimage";

export default function PlayersList(props) {
    const { players, searchOptions } = props;
    const router = useRouter()

    const handleClick = (e, playerId) => {
        e.preventDefault();
        router.push(`/player/${playerId}`);
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
                        <th className="has-text-centered">Collection</th>
                        <th className="has-text-centered">Theme</th>
                        <th className="has-text-centered">Team</th>
                        {/* <th>Badges</th>
                            */}
                        <th className={searchOptions.sortProp === "" ? "is-hidden" : "players-sort-column"}>{formatName(searchOptions.sortProp)}</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => {
                        return (
                            <tr onClick={(e) => handleClick(e, player.id)} key={player.id} style={{ cursor: "pointer" }}>
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
                                <td className="has-text-centered">{player.collection}</td>
                                <td className="has-text-centered">{player.theme}</td>
                                <td className="has-text-centered">{player.team}</td>
                                {/* <td>
                                    <div className="level">   
                                        <div className="level-item has-text-centered" style={{ justifyContent:"space-evenly" }}>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_bronze.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.bronzeBadges}</p>
                                            </figure>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_silver.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.silverBadges}</p>
                                            </figure>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_gold.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.goldBadges}</p>
                                            </figure>
                                            <figure className="image is-24x24">
                                                <img src="https://2kdbimg.com/24/icon_badge_hof.png" />
                                                <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.hofBadges}</p>
                                            </figure>
                                        </div>
                                    </div>
                                </td> */}
                                <td className={searchOptions.sortProp === "" ? "is-hidden" : "has-text-centered"}>
                                    {(searchOptions.sortProp !== "") ? ratingColor(player[searchOptions.sortProp]) : ""}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}