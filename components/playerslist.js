import { Fragment } from "react";
import { useRouter } from "next/router";

import OverallImage from "./overallimage";

export default function PlayersList(props) {
    const { players } = props;
    const router = useRouter()

    const handleClick = (e, playerId) => {
        e.preventDefault();
        router.push(`/players/${playerId}`)
    }

    return players.map(player => {
        return (
            <Fragment key={player.info.id}>
                <div className="columns is-mobile is-gapless is-marginless" id="player-link" onClick={(e) => handleClick(e, player.info.id)}>
                    <div className="column is-one-fifth-mobile is-2-tablet">
                        {player.info.name}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        <figure className="image is-32x32">
                            <OverallImage overall={player.info.overall} />
                        </figure>
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.info.overall}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.info.position}{player.info.secondary_position != null ? `/${player.info.secondary_position}` : ""}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.info.height}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.info.weight} lbs
                    </div>
                    <div className="column is-one-fifth-mobile is-2-tablet">
                        <div className="tags has-addons">
                            <span className="tag HOF">{player.badges.totalBadges.hofBadges}</span>
                            <span className="tag Gold">{player.badges.totalBadges.goldBadges}</span>
                            <span className="tag Silver">{player.badges.totalBadges.silverBadges}</span>
                            <span className="tag Bronze">{player.badges.totalBadges.bronzeBadges}</span>
                        </div>
                    </div>
                </div>
                <div className="divider is-right"></div>
            </Fragment>
        )
    })
}