import React from "react";

export default function PlayersCardView(props) {
    const { players, evos } = props;

    const renderPlayers = () => {
        return players.map((player, i) => {
            let playerId = evos ? player.pid : player.id
            return (
                <div className="column is-1-desktop is-2-widescreen is-half-mobile" key={i}>
                    <figure className="hvr-float-shadow image is-3by4">
                        <a href={`/player/${player.name.replace(/( |')/g, "_").toLowerCase()}/${playerId}`}>
							<img  alt={`${player.overall} ${player.name} | ${player.theme}`} src={`https://2kdbimg.com/390/${player.name.replace(/( |')/g, "_").toLowerCase()}_${playerId}.jpg`} />
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