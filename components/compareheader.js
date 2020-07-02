import React from "react";

import SearchPlayers from "../components/searchplayers";
import TagOverall from "./tagoverall";

export default function CompareHeader(props) {
    const { players, handlePlayer, compare } = props;

    const playerInfoContainer = (playerData, playerId) => {
        return (
		   <div className="box" style={{  minWidth: "80%" }}>
		       <div className="column">
                   <article className="media">
                       <div className="media-left">
                           <img className="compare-img" src={`https://2kdbimg.com/240x350/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} />
                       </div>
                       <div className="media-content">
                           <div className="content has-text-centered">
                               <p> 
							      <strong>{playerData.info.name}</strong> <br /> 
							      <small><a className="has-text-dark" href={`/collections`}>{playerData.info.collection}</a> / 
		                          <a className="has-text-dark" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a></small>
                                  <br />
		                          <br />
		                       </p>
                                <p className="heading">Overall</p>
                                <p className="compare-ovr">
                                    <TagOverall theme={playerData.info.theme} overall={playerData.info.overall} />
                                </p>
                                <br />
                                <p className="heading">Position</p>
                                <p className="title is-size-6">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                                <br />
								<div className="is-flex" style={{ justifyContent: "space-evenly" }}>
								    <div>
                                        <p className="heading">Height</p>
                                        <p className="title is-size-6">{playerData.info.height}"</p>
								    </div>
								    <div>
								        <p className="heading">Wingspan</p>
                                        <p className="title is-size-6">{playerData.info.wingspan}</p>
								    </div>
								</div>
								<br />
								<p className="heading">Weight</p>
                                <p className="title is-size-6">{playerData.info.weight}</p>
                          </div>
                      </div>
                  </article>
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