import React from "react";
import { GiBasketballBall } from "react-icons/gi"

export default function PlayersCardView(props) {
    const { players } = props;

    const renderPlayers = () => {
        return players.map((player, i) => {
            return (
                <div className="column is-1-desktop is-2-widescreen is-half-mobile" key={i}>
                    <figure className="image is-3by4">
                        <a href={`/player/${player.id}`}>
							<img className="player-card-hovering" alt={`${player.overall} ${player.name} | ${player.theme}`} src={`https://2kdbimg.com/390/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                        </a>
                    </figure>
                </div>
            )
        })
    }

    return (
        <div className="box">
            <div className="columns is-multiline is-mobile">
                {renderPlayers()}
            </div>
        </div>
    )
}