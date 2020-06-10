import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { ratingColor } from "../lib/helpers";

import OverallImage from "./overallimage";
import ImageCloud from "./imagecloud";

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
                                    <ImageCloud src={`players/${player.info.name.replace(/( |')/g, "_").toLowerCase()}_${player.info.id}.jpg`} width={24} />
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
                        <td style={{ textAlign: "center" }}>{player.info.position}{player.info.secondary_position != null ? `/${player.info.secondary_position}` : ""} </td>
                        <td style={{ textAlign: "center" }}>{ratingColor(player.info.off_overall)}</td>
                        <td style={{ textAlign: "center" }}>{ratingColor(player.info.def_overall)}</td>
                        <td style={{ textAlign: "center" }}>{player.info.height}"</td>
                        <td>
                            <div className="level">   
                                <div className="level-item has-text-centered" style={{ justifyContent:"space-evenly" }}>
                                    <figure className="image is-24x24">
                                        <ImageCloud src="icons/icon_badge_bronze.png" width={24} />
                                        <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.bronzeBadges}</p>
                                    </figure>
                                    <figure className="image is-24x24">
                                        <ImageCloud src="icons/icon_badge_silver.png" width={24} />
                                        <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.silverBadges}</p>
                                    </figure>
                                    <figure className="image is-24x24">
                                        <ImageCloud src="icons/icon_badge_gold.png" width={24} />
                                        <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.goldBadges}</p>
                                    </figure>
                                    <figure className="image is-24x24">
                                        <ImageCloud src="icons/icon_badge_hof.png" width={24} />
                                        <p className="is-overlay has-text-white inline-number-ovr">{player.badges.totalBadges.hofBadges}</p>
                                    </figure>
                                </div>
                            </div>
                        </td>
                        <td className={searchOptions.sortProp == "" ? "is-hidden" : ""}>
                            {(searchOptions.cat != "" && searchOptions.sortProp != "" && searchOptions.sortValue != "") ?
                                player[searchOptions.cat][searchOptions.sortProp][searchOptions.sortValue]
                                : ""
                            }
                        </td>
                    </tr>
                )
            }).slice(page * 15, (page * 15) + 15)}
        </tbody>
    )
}