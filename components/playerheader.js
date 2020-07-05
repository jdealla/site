import React from "react";
import { RiBasketballLine } from "react-icons/ri";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import { IoMdCheckbox, IoMdCheckboxOutline } from "react-icons/io";
import { getTotalUpgradedBadges } from "../lib/helpers";

import ShotChart from "./shotchart";
import OverallImage from "./overallimage";
import TagOverall from "./tagoverall";

export default function PlayerHeader(props) {
    const { playerData, altPlayers, evos, evoLevel, handleEvo, duo, duoOn, handleDuo, duoPartner } = props;
    const totalBadges = getTotalUpgradedBadges(playerData, duo, duoOn, evos, evoLevel);

    const handleEvoStars = (level) => {
        if (evoLevel === level)
            handleEvo(level - 1);
        else
            handleEvo(level);
    }

    const renderEvoStars = () => {
        let stars = []
        for(let i = 0; i < evos.length; i++) {
            let star = (
                <div className="column is-2" key={i}>
                    <div className="container star" onClick={() => handleEvoStars(i)}>
                        {evoLevel >= i ? <AiFillStar className="icon-selected" size="2em" /> : <AiOutlineStar size="2em" />}
                    </div>
                </div>
            )
            stars.push(star);
        }
        return stars;
    }

    const renderDuo = () => {
        return (
                <span className="icon" onClick={() => handleDuo()} style={{ cursor: "pointer" }}>
                    {duoOn ? 
                        <IoMdCheckbox className="icon-selected" size="1.7em" /> 
                        : <IoMdCheckboxOutline size="1.7em" />
                    }
                </span>
        )
    }

    return (
        <div className="columns is-mobile is-multiline is-player-card mobile-padding">
            <div className="column is-full-mobile is-full-desktop is-full-widescreen">
			       <div className="column is-full-mobile player-column-height is-hidden-tablet">
                                <figure className="image is-3by4 mb-1">
                                    <img src={`https://2kdbimg.com/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} />
                                </figure>
                                <div className="columns is-mobile is-centered py-5" style={{ flexWrap:"wrap" }}>
                                    {altPlayers.map((player, i) => (
                                        <div className="column is-narrow" key={i} style={{ padding:"0.1em" }}>
                                           <div className="column is-narrow" key={i} style={{ padding:"0.1em" }}>
                                            <a href={`/player/${playerData.info.name.replace(/( |')/g, "-").toLowerCase()}/${player.id}`}>
                                                <TagOverall hasBorder={true} theme={player.theme} overall={player.overall} />
                                            </a>
                                        </div>
                                        </div>
                                    ))}
                                </div>
                         </div>
                <div className="columns is-mobile is-multiline">
                    <div className="column is-full-mobile is-9-tablet is-four-fifths-fullhd">
                        <div className="columns is-mobile is-multiline justify-header">
                            <div className="column is-4-tablet is-3-desktop player-column-height is-hidden-mobile">
                                <figure className="image is-3by4 mb-4">
                                    <img src={`https://2kdbimg.com/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} />
                                </figure>
                                <div className="columns is-mobile is-centered pt-5" style={{ flexWrap:"wrap" }}>
                                    {altPlayers.map((player, i) => (
                                        <div className="column is-narrow alt-players-tags" key={i}>
                                            <a href={`/player/${playerData.info.name.replace(/( |')/g, "-").toLowerCase()}/${player.id}`}>
                                                <TagOverall hasBorder={true} theme={player.theme} overall={player.overall} />
												<span style={{ backgroundImage: `url(https://2kdbimg.com/250/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg)` }} className="popup-img-alt" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="column is-full-mobile is-8-tablet is-player-info">
                                <div className="columns is-mobile is-multiline">
                                    <div className="column is-1-mobile is-1-tablet ovr-margin" style={{ margin: "auto 5px auto 0" }}>
									  <div className="has-text-centered no-shadow" style={{ position: "relative", width: "48px" }}>
                                          <OverallImage size="48x48" overall={playerData.info.overall} />
                                          <p className="is-overlay is-size-3 has-text-white inline-number-ovr">
                                              {playerData.info.overall}
                                         </p>
                                      </div>  
                                    </div>
                                    <div className="column is-9-mobile is-9-tablet">
                                        <p className="title is-size-4-mobile is-size-3-widescreen has-text-weight-bold has-text-white">{playerData.info.name}</p>
                                        <p className="subtitle is-size-7-mobile is-size-7-tablet has-text-weight-bold"> 
                                            <a className="has-text-warning" href={`/collections`}>{playerData.info.collection} </a>
                                            / 
                                            <a className="has-text-warning" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a>
                                        </p>
                                    </div>
                                    <div className="column is-3-mobile is-2-tablet ">
                                        <p className="heading has-text-warning">Offense</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.off_overall}</p>
                                    </div>
                                    <div className="column is-3-mobile is-2-tablet">
                                        <p className="heading has-text-warning">Defense</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.def_overall}</p>
                                    </div>
                                    <div className="column is-3-mobile is-2-tablet">
                                        <p className="heading has-text-warning">Height</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.height}"</p>
                                    </div>
									<div className="column is-3-mobile is-2-tablet">
                                        <p className="heading has-text-warning">Wingspan</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.wingspan}</p>
                                    </div>
                                    <div className="column is-3-mobile is-3-tablet">
                                        <p className="heading has-text-warning">Weight</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.weight} lbs</p>
                                    </div>
                                    <div className="column is-3-mobile is-2-tablet">
                                        <p className="heading has-text-warning">Position</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                                    </div>
                                    <div className="column is-half-mobile is-2-tablet">
                                        <p className="heading has-text-warning">Team</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.team}</p>
                                    </div>
                                    <div className="column is-half-mobile is-2-tablet">
                                        <p className="heading has-text-warning">From</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.college}</p>
                                    </div>
                                    <div className={`column ${playerData.info.nickname == " " ? "is-hidden" : "is-3-tablet"}`}>
                                        <p className="heading has-text-warning">Nickname</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.nickname}</p>
                                    </div>
                                    <div className="column is-hidden-mobile is-full-tablet">
                                        <p className="heading has-text-warning">Plays</p>
                                        <div className="tags is-left is-rounded has-text-weight-bold">
                                            {playerData.plays.map((play, i) => {
                                                if (play != "None") {
                                                    return (
                                                        <span className="tag is-dark" key={i}>
                                                            <RiBasketballLine />
                                                            &nbsp;{play}
                                                        </span> 
                                                    )
                                                } else return;
                                            })}
                                        </div>
                                    </div>
									<div className={evos.length == 0 ? "is-hidden" : "column is-3-tablet is-full-mobile"}>
                                        <p className="heading has-text-warning">Evolutions</p>
                                        <div className="columns is-mobile">
                                            {renderEvoStars()}
                                        </div>
                                    </div>
                                    <div className={(duo != undefined || duo != null) ? "column is-6-tablet is-full-mobile" : "is-hidden"}>
                                        <p className="heading has-text-warning">Dynamic Duo</p> 
                                        <div className="container is-flex duo-items">
										    <div className="has-text-centered no-shadow">
										        <TagOverall hasBorder={true} overall={duoPartner.overall} />
                                            </div>
                                            <a href={`/player/${playerData.info.name.replace(/( |')/g, "-").toLowerCase()}/${duoPartner.id}`}>{duoPartner.name}</a>
                                            {renderDuo()}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="column is-3-tablet is-2-desktop">
                        <div className="columns is-mobile is-multiline">
                            <div className="column is-full-mobile is-hidden-tablet">
                                <p className="heading has-text-warning">Plays</p>
                                <div className="tags is-left is-rounded has-text-weight-bold">
                                    {playerData.plays.map((play, i) => {
                                        if (play != "None") {
                                            return (
                                                <span className="tag is-dark" key={i}>
                                                    <RiBasketballLine />
                                                    &nbsp;{play}
                                                </span>
                                            )
                                        } else return;
                                    })}
                                </div>
                            </div>

                            <div className="column is-full-mobile hotzone-tablet">
                                <p className="heading has-text-warning">Hot Zones</p>
                                <ShotChart hotzones={playerData.hotzones} />  
                                <p className="title"></p>
                                <p className="heading has-text-warning">Badges</p>
                                <div className="level">   
                                    <div className="level-item is-size-5 has-text-centered transform-badges" style={{ justifyContent:"space-evenly" }}>
                                        <figure className="image is-64x64">
                                            <img src="https://2kdbimg.com/64/icon_badge_bronze.png" />
                                            <p className="is-overlay inline-number-badge">{totalBadges.bronze}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <img src="https://2kdbimg.com/64/icon_badge_silver.png" />
                                            <p className="is-overlay inline-number-badge">{totalBadges.silver}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <img src="https://2kdbimg.com/64/icon_badge_gold.png" />
                                            <p className="is-overlay inline-number-badge">{totalBadges.gold}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <img src="https://2kdbimg.com/64/icon_badge_hof.png" />
                                            <p className="is-overlay inline-number-badge">{totalBadges.hof}</p>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}