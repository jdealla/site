import React from "react";
import { useRouter } from "next/router";
import { ratingColor } from "../lib/helpers";

import OverallImage from "./overallimage";

export default function PlayersList(props) {
    const { players, page, searchOptions } = props;
    const router = useRouter()

    const handleClick = (e, playerId) => {
        e.preventDefault();
        router.push(`/player/${playerId}`)
    }

    return (
        <tbody>
            {players.map(player => {
                return (
                    <tr onClick={(e) => handleClick(e, player.info.id)} key={player.info.id} style={{ cursor: "pointer" }}>
                        <td>
                            <div className="container is-flex">
                                <figure className="image is-24x24" style={{ marginBottom: "5px" }}>
                                    <img src={`https://2kdbimg.com/35/${player.info.name.replace(/( |')/g, "_").toLowerCase()}_${player.info.id}.jpg`} />
                                </figure>
                                <p>{player.info.name}</p>
                            </div>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <div className="container margin-auto-list">
                                <OverallImage size="24x24" overall={player.info.overall} />
                                <p className="is-overlay has-text-white inline-number-ovr">
                                    {player.info.overall}
                                </p>
                            </div>
                        </td>
                        <td className="has-text-centered">{player.info.position}{player.info.secondary_position != null ? `/${player.info.secondary_position}` : ""} </td>
                        <td className="has-text-centered">{ratingColor(player.info.off_overall)}</td>
                        <td className="has-text-centered">{ratingColor(player.info.def_overall)}</td>
                        <td className="has-text-centered">{player.info.height}"</td>
                        <td>
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
                        </td>
                        <td className={searchOptions.sortProp == "" ? "is-hidden" : "has-text-centered"}>
                            {(searchOptions.cat != "" && searchOptions.sortProp != "" && searchOptions.sortValue != "") ?
                                ratingColor(player[searchOptions.cat][searchOptions.sortProp][searchOptions.sortValue])
                                : ""
                            }
                        </td>
                    </tr>
                )
            }).slice(page * 15, (page * 15) + 15)}
        </tbody>
    )
}