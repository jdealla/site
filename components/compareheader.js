import React from "react";

import SearchPlayers from "../components/searchplayers";
import ImageCloud from "../components/imagecloud";

export default function CompareHeader(props) {
    const { players, handlePlayer, compare } = props;

    const playerInfoContainer = (playerData, playerId) => {
        return (
            <div className="box">
                <div className="columns">
                    <div className="column is-half">
                        <figure className="is-3by4">
                            <ImageCloud src={`players/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width={240} height={350} />
                        </figure>
                    </div>
                    <div className="column ">
                        <div className="columns is-multiline">
                            <div className="column">
                                Overall: {playerData.info.overall}
                            </div>
                            <div className="column">
                                Height: {playerData.info.height}
                            </div>
                            <div className="column">
                                Weight: {playerData.info.weight}
                            </div>
                        </div>
                    </div>
                </div>
                <a className="delete is-medium" aria-label="delete" style={{ position: "absolute", top: 0 }} onClick={() => handlePlayer(playerId, null)}></a>
            </div>
        )
    };

    const renderSearch = (playerNum) => {
        switch(playerNum) {
            case 1: {
                if (compare.player1 == null) {
                    return <SearchPlayers players={players} handleClick={handlePlayer} playerInfo="player1" placeholder="Search player to compare" />
                } else {
                    let playerData = compare.player1

                    return playerInfoContainer(playerData, "player1");
                }
            }
            case 2: {
                if (compare.player2 == null) {
                    return <SearchPlayers players={players} handleClick={handlePlayer} playerInfo="player2" placeholder="Search player to compare" />
                } else {
                    let playerData = compare.player2
                    
                    return playerInfoContainer(playerData, "player2")
                }
            }
        }
    }

    return (
        <div className="level">
            <div className="level-item">
                {renderSearch(1)}
            </div>
            <div className="level-item">
                {renderSearch(2)}
            </div>
        </div>
    )
}