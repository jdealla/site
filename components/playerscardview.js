import React from "react";
import ImageCloud from "./imagecloud";

export default function PlayersCardView(props) {
    const { players } = props;

    const renderPlayers = () => {
        return players.map((player, i) => {
            return (
                <div className="column is-2-desktop is-half-mobile" key={i}>
                    <figure className="image is-3by4">
                        <a href={`/players/${player.id}`}>
                            <ImageCloud src={`players/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} width={280} />
                        </a>
                    </figure>
                </div>
            )
        })
    }

    return (
        <div className="box is-flex">
            <div className="columns is-multiline is-mobile">
                {renderPlayers()}
            </div>
        </div>
    )
}