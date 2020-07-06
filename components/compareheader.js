import React from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { IoMdCheckbox, IoMdCheckboxOutline } from "react-icons/io";

import SearchPlayers from "../components/searchplayers";
import TagOverall from "./tagoverall";

export default function CompareHeader(props) {
    const { players, handlePlayer, compare, duoOn, evoLevel, handleEvo, handleDuo } = props;

    const handleEvoStars = (playerId, level) => {
        if (evoLevel[playerId] === level)
            handleEvo(playerId, level - 1);
        else
            handleEvo(playerId, level);
    }

    const renderEvoStars = (playerId, evos) => {
        let stars = []
        for(let i = 0; i < evos.length; i++) {
            let star = (
                <div className="container star" onClick={() => handleEvoStars(playerId, i)} key={i}>
                    {evoLevel[playerId] >= i ? <AiFillStar className="icon-selected" size="1.5em" /> : <AiOutlineStar size="1.5em" />}
                </div>
            )
            stars.push(star);
        }

        return (
            <>
                <p className="heading">Evo</p>
                <div className="is-flex">
                    {stars}
                </div>
            </>
        )
    }

    const playerInfoContainer = (playerData, playerId, playerEvos, playerDuo) => {
        return (
		   <div className="box" style={{  position: "relative" }}>
		       <div className="column">
                   <article className="media">
                       <div className="media-left media-mobile">
                           <img className="compare-img" src={`https://2kdbimg.com/240x350/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} />
                       </div>
                       <div className="media-content">
                           <div className="content has-text-centered">
                               <div className="is-flex" style={{ justifyContent: "space-evenly", alignItems: "center" }}>
                                    <div>
                                       <p className="compare-name"> 
                                            <strong>{playerData.info.name}</strong> <span className="ml-2"> <TagOverall theme={playerData.info.theme} overall={playerData.info.overall} /> </span> 
                                       </p>
                                            <small><a className="has-text-dark" href={`/collections`}>{playerData.info.collection}</a> / 
                                            <a className="has-text-dark" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a></small>
                                    </div>
                               </div>
                               <br />
                               <div className="is-flex" style={{ justifyContent: "space-around" }}>
								    <div>
                                        <p className="heading">Height</p>
                                        <p className="title is-size-6">{playerData.info.height}"</p>
								    </div>
                                    <div>
                                        <p className="heading">Position</p>
                                        <p className="title is-size-6">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                                    </div>
                               </div>
                                <br />
								<div className="is-flex" style={{ justifyContent: "space-around" }}>
								    <div>
								        <p className="heading">Wingspan</p>
                                        <p className="title is-size-6">{playerData.info.wingspan}</p>
								    </div>
                                    <div>
                                        <p className="heading">Weight</p>
                                        <p className="title is-size-6">{playerData.info.weight}</p>
                                    </div>
								</div>
                                <br />
                                {
                                    playerEvos.length > 0 ? renderEvoStars(playerId, playerEvos) : ""
                                }
                                <br />
                                {
                                    playerDuo ? (
                                        <div>
                                            <div className="heading">Dynamic Duo</div>
                                            <span className="icon" onClick={() => handleDuo(playerId)} style={{ cursor: "pointer" }}>
                                                {duoOn[playerId] ? 
                                                    <IoMdCheckbox className="icon-selected" size="1.7em" /> 
                                                    : <IoMdCheckboxOutline size="1.7em" />
                                                }
                                            </span>
                                        </div>
                                    ) : ""
                                }
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
                    let playerData = compare.player1[0];
                    let evos = compare.player1[1];
                    let duo = compare.player1[2];

                    return playerInfoContainer(playerData, "player1", evos, duo);
                }
            }
            case 2: {
                if (compare.player2 == null) {
                    return <SearchPlayers players={players} handleClick={handlePlayer} playerInfo="player2" placeholder="Search player to compare" />
                } else {
                    let playerData = compare.player2[0];
                    let evos = compare.player2[1];
                    let duo = compare.player2[2];

                    return playerInfoContainer(playerData, "player2",  evos, duo)
                }
            }
        }
    }

    return (
        <div className="level">
            <div className="level-item is-narrow">
                {renderSearch(1)}
            </div>
            <div className="level-item is-narrow">
                {renderSearch(2)}
            </div>
        </div>
    )
}