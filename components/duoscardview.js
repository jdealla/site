import React from "react";

export default function DuosCardView(props) {
    const { players, date } = props;

    const renderPlayers = () => {
        return players.map((player, i) => {
            return (
                <div className="column is-1-desktop is-2-widescreen is-half-mobile" key={i}>
                    <figure className="image is-3by4">
                        <a href={`/player/${player.id1}`}>
                            <img alt={`${player.name1} | ${player.name2}`} src={`https://2kdbimg.com/390/${player.name1.replace(/( |')/g, "_").toLowerCase()}_${player.id1}.jpg`} />
                        </a>
                    </figure>
                    <figure className="image is-3by4">
                        <a href={`/player/${player.id2}`}>
                            <img alt={`${player.name2} | ${player.name1}`} src={`https://2kdbimg.com/390/${player.name2.replace(/( |')/g, "_").toLowerCase()}_${player.id2}.jpg`} />
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