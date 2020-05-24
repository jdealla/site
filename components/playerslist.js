import React, { Fragment } from "react";
import { useRouter } from "next/router";

import OverallImage from "./overallimage";
import ImageCloud from "./imagecloud";

export default function PlayersList(props) {
    const { players, perPage, page, sortedBy } = props;
    const router = useRouter()

    const handleClick = (e, playerId) => {
        e.preventDefault();
        router.push(`/players/${playerId}`)
    }
    return players.map(player => {
        return (
            <Fragment key={player.id}>
                <div className="columns is-mobile is-gapless is-marginless" id="player-link" onClick={(e) => handleClick(e, player.id)}>
                    <div className="column is-one-fifth-mobile is-2-tablet">
                        <div className="columns is-mobile is-multiline">
                            <div className="column is-3-desktop is-4-mobile">
                                <figure className="image is-48x48">
                                    <ImageCloud src={`players/${player.name.replace(/ /g, "_").toLowerCase()}_${player.id}.jpg`} width={48} height={48} alt={player.name} />
                                </figure>
                            </div>
                            <div className="column is-hidden-mobile is-size-7-mobile">
                                {player.name}
                            </div>
                        </div>
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        <OverallImage overall={player.overall} />
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.overall}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.position}{player.secondary_position != null ? `/${player.secondary_position}` : ""}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.height}
                    </div>
                    <div className="column is-hidden-mobile is-1-tablet">
                        {player.weight} lbs
                    </div>
                    {/* <div className="column is-hidden-mobile is-2-tablet">
                        <div className="tags has-addons">
                            <span className="tag HOF">{player.badges.totalBadges.hofBadges}</span>
                            <span className="tag Gold">{player.badges.totalBadges.goldBadges}</span>
                            <span className="tag Silver">{player.badges.totalBadges.silverBadges}</span>
                            <span className="tag Bronze">{player.badges.totalBadges.bronzeBadges}</span>
                        </div>
                    </div> */}
                    <div className={`column is-2-tablet ${sortedBy == "" ? "is-hidden" : "has-text-weight-semibold"}`}>
                        {player[sortedBy.propName]}
                    </div>
                </div>
                <div className="divider is-right"></div>
            </Fragment>
        )
    }).slice((page * perPage) - perPage, page * perPage);
}