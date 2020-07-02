import React from "react";
import styles from './duoscardview.module.scss';

export default function DuosCardView(props) {
    const { players, date } = props;

    const renderPlayers = () => {
        return players.map((player, i) => {
            return (
                <div className="column is-3-tablet is-half-mobile" key={i}>
                    <div className={styles.imageStack}>
                        <div className={styles.imageStackItemLeft}>
                            <figure className="hvr-float-shadow image is-3by4">
                                <a href={`/player/${player.name1.replace(/( |')/g, "-").toLowerCase()}/${player.id1}`}>
                                    <img alt={`${player.name1} | ${player.name2}`} src={`https://2kdbimg.com/390/${player.name1.replace(/( |')/g, "_").toLowerCase()}_${player.id1}.jpg`} />
                                </a>
                            </figure>
                        </div>
                        <div className={styles.imageStackItemRight}>
                            <figure className="hvr-float-shadow image is-3by4">
                                <a href={`/player/${player.name2.replace(/( |')/g, "-").toLowerCase()}/${player.id2}`}>
                                    <img alt={`${player.name2} | ${player.name1}`} src={`https://2kdbimg.com/390/${player.name2.replace(/( |')/g, "_").toLowerCase()}_${player.id2}.jpg`} />
                                </a>
                            </figure>
                        </div>
                    </div>
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