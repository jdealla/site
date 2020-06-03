import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { ratingColor } from "../lib/helpers";

import OverallImage from "./overallimage";
import ImageCloud from "./imagecloud";

export default function PlayersList(props) {
    const { players, page } = props;
    const router = useRouter()

    const handleClick = (e, playerId) => {
        e.preventDefault();
        router.push(`/player/${playerId}`)
    }

    return (
        <tbody>
            {players.map(player => {
                return (
                    <tr onClick={(e) => handleClick(e, player.info.id)} key={player.info.id}>
                        <td>
                            <div className="container is-flex">
                                <figure className="image is-32x32">
                                    <ImageCloud src={`players/${player.info.name.replace(/( |')/g, "_").toLowerCase()}_${player.info.id}.jpg`} width={48} />
                                </figure>
                                <p>{player.info.name}</p>
                            </div>
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <div className="container">
                                <OverallImage overall={player.info.overall} />
                                <p className="is-overlay has-text-white has-text-weight-semibold  inline-number-ovr">
                                    {player.info.overall}
                                </p>
                            </div>
                        </td>
                        <td style={{ textAlign: "center" }}>{player.info.position}{player.info.secondary_position != null ? `/${player.info.secondary_position}` : ""} </td>
                        <td style={{ textAlign: "center" }}>{ratingColor(player.info.off_overall)}</td>
                        <td style={{ textAlign: "center" }}>{ratingColor(player.info.def_overall)}</td>
                        <td style={{ textAlign: "center" }}>{player.info.height}"</td>
                    </tr>
                )
            }).slice(page * 15, (page * 15) + 15)}
        </tbody>
    )
}