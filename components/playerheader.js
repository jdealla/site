import React from "react";
import { getAllShoes } from "../lib/shoes";

import ShotChart from "./shotchart";
import Dropdown from "./dropdown";
import ImageCloud from "./imagecloud";

export default function PlayerHeader(props) {
    const { playerData, shoe, handleShoe, } = props;

    const renderShoeList = () => {
        return getAllShoes().map((shoe, i) => {
            return (
                <a key={i} className="dropdown-item" onClick={() => handleShoe(shoe)} >
                    {shoe.name}
                </a>
            )
        })
    }

    const shoeButton = (
        <button className="button is-dark is-small is-centered">
            <span className="icon">
                <ImageCloud src="icons/icon_shoes.png" width={100} height={100} alt="shoe icon" />
            </span>
            <span>Add Diamond Shoe</span>
        </button>
    )

    return (
        <div className="columns is-mobile is-multiline is-player-card" style={{ justifyContent:"space-around" }}>
            <div className="is-player-card is-hidden-mobile">
                <img src="/playercard_bg.png" alt="player card bg" />
            </div>
            <div className="column is-7-mobile is-one-fifth-desktop is-3-tablet ">
                <ImageCloud src={`players/${playerData.info.name.replace(/ /g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width={320} height={480} alt={playerData.info.name} />
            </div>
            <div className="column is-multiline is-centered is-full-mobile is-5-desktop is-7-tablet is-player-info">
			    <div className="columns is-vcentered is-flex">
                    <div className="column is-half-mobile is-2-desktop">
                        <p className="heading has-text-warning" style={{ marginBottom:0 }}>Overall</p>
                        <p className="title is-1 title has-text-white">
                            {playerData.info.overall}
                        </p>
                    </div>
                    <div className="column is-half-mobile">
                        <p className="title is-size-3 has-text-weight-bold has-text-white">{playerData.info.name}</p>
                        <p className="subtitle is-paddingless is-size-6-desktop is-size-7-mobile has-text-weight-semibold"> 
                            <a className="has-text-warning" href={`/collections`}>{playerData.info.collection} </a>
                            / 
                            <a className="has-text-warning" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a>
                        </p>
                    </div>
                </div>
			  
                <div className="subtitle is-size-6 is-size-7-mobile has-text-white">
                    <div className="columns is-multiline is-vcentered has-text-left is-flex">
                        <div className="column is-one-quarter is-3-mobile">
                            <p className="heading has-text-warning">Offense</p>
                            <p className="title is-5 title has-text-white">{playerData.info.off_overall}</p>
                        </div>
                        <div className="column is-one-quarter is-3-mobile">
                            <p className="heading has-text-warning">Defense</p>
                            <p className="title is-5 has-text-white">{playerData.info.def_overall}</p>
                        </div>
                        <div className="column is-one-quarter is-3-mobile">
                            <p className="heading has-text-warning">Position</p>
                            <p className="title is-5 has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                        </div>
                        <div className="column is-one-quarter is-3-mobile">
                            <p className="heading has-text-warning">Height</p>
                            <p className="title is-5 has-text-white">{playerData.info.height}</p>
                        </div>
                        <div className="column is-one-quarter is-3-mobile">
                            <p className="heading has-text-warning">Weight</p>
                            <p className="title is-5 has-text-white">{playerData.info.weight} lbs</p>
                        </div>
                        <div className="column is-one-quarter is-4-mobile">
                                <p className="heading has-text-warning">Team</p>
                                <p className="title is-6 has-text-white">{playerData.info.team}</p>
                        </div>
                        <div className="column is-one-quarter is-4-mobile">
                                <p className="heading has-text-warning">From</p>
                                <p className="title is-6 has-text-white">{playerData.info.college}</p>
                        </div>
                        {
                            playerData.info.nickname != " " ? (
                                <div className="column is-one-quarter is-4-mobile">
                                    <div>
                                        <p className="heading has-text-warning">Nickname</p>
                                        <p className="title is-6 has-text-white">{playerData.info.nickname}</p>
                                    </div>
                                </div>
                            ) : ""
                        }
                    </div>
                    <div className="columns has-text-left">
                        <div className="column">
                            <p className="heading has-text-warning">Plays</p>
                            <div className="tags is-left is-rounded has-text-weight-bold">
                                {
                                    playerData.info.play1 != "None" ? (
                                        <span className="tag is-dark">
                                            <span className="icon" style={{ color:"#aaa"}}>
                                                <i className="fas fa-basketball-ball"></i>
                                            </span> 
                                            &nbsp;{playerData.info.play1}
                                        </span> 
                                    ) : ""    
                                }
                                
                                {
                                    playerData.info.play2 != "None" ? (
                                        <span className="tag is-dark">
                                            <span className="icon" style={{ color:"#aaa"}}>
                                                <i className="fas fa-basketball-ball"></i>
                                            </span>
                                            &nbsp;{playerData.info.play2}
                                        </span> 
                                    ) : ""
                                }
                                
                                {
                                    playerData.info.play3 != "None" ? (
                                        <span className="tag is-dark">
                                            <span className="icon" style={{ color:"#aaa"}}>
                                                <i className="fas fa-basketball-ball"></i>
                                            </span> 
                                            &nbsp;{playerData.info.play3}
                                        </span> 
                                    ) : ""
                                }
                                
                                {
                                    playerData.info.play4 != "None" ? (
                                        <span className="tag is-dark">
                                            <span className="icon" style={{ color:"#aaa"}}>
                                                <i className="fas fa-basketball-ball"></i>
                                            </span> 
                                            &nbsp;{playerData.info.play4}
                                        </span> 
                                    ) : ""
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="columns is-left">
                        <div className="column is-half">
                            {
                                (shoe == undefined || shoe == null) ? (
                                    <Dropdown hover={true} items={renderShoeList()} customButton={shoeButton} />
                                ) : (
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="title">{shoe.brand}</p>
                                                <p className="subtitle">{shoe.name}</p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <button className="delete" onClick={handleShoe(null)}></button>
                                        </div>
                                    </article>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="column is-11-mobile is-one-fifth-desktop is-2-tablet">
            
            <p className="heading has-text-warning">Hot Zones</p>
            <ShotChart hotzones={playerData.hotzones} />  
            <p className="title"></p>
                <p className="heading has-text-warning">Badges</p>
                <div className="level ">   
                    <div className="level-item is-size-5 has-text-centered" style={{ justifyContent:"space-evenly" }}>
                        <figure className="image is-64x64">
                            <ImageCloud src="icons/icon_badge_bronze.png" height={74} width={64} alt="Bronze Badge" styles={{ height: "auto" }} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.bronzeBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <ImageCloud src="icons/icon_badge_silver.png" height={74} width={64} alt="Silver Badge" styles={{ height: "auto" }} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.silverBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <ImageCloud src="icons/icon_badge_gold.png" height={74} width={64} alt="Gold Badge" styles={{ height: "auto" }} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.goldBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <ImageCloud src="icons/icon_badge_hof.png" height={74} width={64} alt="Hall Of Fame Badge" styles={{ height: "auto" }} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.hofBadges}</p>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}