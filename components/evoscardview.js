import React from "react";
import { AiFillStar } from "react-icons/ai"

export default function EvosCardView(props) {
    const { players, page } = props;

    const renderPlayers = () => {
        let playerCards = [];

        for(let [name, evos] of Object.entries(players)) {
            let player = (
                <div className="column is-1-desktop is-2-widescreen is-half-mobile" key={evos[0]["pid"]}>
                    <figure className="image is-3by4">
                        <a href={`/player/${evos[0]["pid"]}`}>
                            <img alt={`${name} | Evos: ${evos.length}`} src={`https://2kdbimg.com/250/${name.replace(/( |')/g, "_").toLowerCase()}_${evos[0]["pid"]}.jpg`} />
                        </a>
                    </figure>
                </div>
            )
            playerCards.push(player);
        }

        return playerCards.slice(page * 18, (page * 18) + 18)
    }

    return (
        <div className="box">
            <div className="columns is-multiline is-mobile">
                {renderPlayers()}
            </div>
        </div>
    )
}