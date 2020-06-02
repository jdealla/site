import React from "react";
import { RiBasketballLine } from "react-icons/ri";

import ShotChart from "./shotchart";
import ImageCloud from "./imagecloud";
// import Dropdown from "./dropdown";

export default function PlayerHeader(props) {
    const { playerData, shoe, handleShoe, } = props;

    // const renderShoeList = () => {
    //     return getAllShoes().map((shoe, i) => {
    //         return (
    //             <a key={i} className="dropdown-item" onClick={() => handleShoe(shoe)} >
    //                 {shoe.name}
    //             </a>
    //         )
    //     })
    // }

    // const shoeButton = (
    //     <button className="button is-dark is-small is-centered">
    //         <span className="icon">
    //             <ImageCloud src="icons/icon_shoes.png" width={100} />
    //         </span>
    //         <span>Add Diamond Shoe</span>
    //     </button>
    // )

    return (
        <div className="columns is-mobile is-multiline is-player-card mobile-padding">
            <div className="column is-full-mobile is-full-desktop is-full-tablet">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-full-mobile is-8-tablet is-9-desktop">
                        <div className="columns is-mobile is-multiline">
                            <div className="column is-half-mobile is-5-tablet is-4-desktop">
                                <figure className="image is-3by4">
                                    <ImageCloud src={`players/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width={400} />
                                </figure>
                            </div>
                            <div className="column is-half-mobile is-half-tablet is-6-desktop is-7-widescreen is-7-fullhd is-player-info">
                                <div className="columns is-mobile is-multiline">
                                    <div className="column is-hidden-mobile is-one-third-tablet is-3-desktop">
                                        <p className="heading has-text-warning " style={{ marginBottom:0 }}>Overall</p>
                                        <p className="title is-size-7-mobile is-size-4-tablet has-text-white">
                                            {playerData.info.overall}
                                        </p>
                                    </div>
                                    <div className="column is-full-mobile">
                                        <p className="heading has-text-weight-bold has-text-white is-hidden-mobile">{playerData.info.name}</p>
                                        <p className="subtitle is-size-7-mobile is-size-7-tablet has-text-weight-semibold"> 
                                            <a className="has-text-warning" href={`/collections`}>{playerData.info.collection} </a>
                                            / 
                                            <a className="has-text-warning" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a>
                                        </p>
                                    </div>
                                    <br />
                                    <div className="column is-hidden-mobile">
                                        <p className="heading has-text-warning">Offense</p>
                                        <p className="title is-size-6-mobile is-size-5-tablet has-text-white">{playerData.info.off_overall}</p>
                                    </div>
                                    <div className="column is-hidden-mobile">
                                        <p className="heading has-text-warning">Defense</p>
                                        <p className="title is-size-7-mobile is-size-5-tablet has-text-white">{playerData.info.def_overall}</p>
                                    </div>
                                    <div className="column is-half-mobile">
                                        <p className="heading has-text-warning">Height</p>
                                        <p className="title is-size-7-mobile is-size-5-tablet has-text-white">{playerData.info.height}"</p>
                                    </div>
                                    <div className="column is-half-mobile">
                                        <p className="heading has-text-warning">Weight</p>
                                        <p className="title is-size-7-mobile is-size-5-tablet has-text-white">{playerData.info.weight} lbs</p>
                                    </div>
                                    <div className="column">
                                        <p className="heading has-text-warning">Position</p>
                                        <p className="title is-size-7-mobile is-size-5-tablet has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                                    </div>
                                    <div className="column">
                                        <p className="heading has-text-warning">Team</p>
                                        <p className="title is-size-7-mobile is-size-5-tablet has-text-white">{playerData.info.team}</p>
                                    </div>
                                    <div className="column is-half-mobile">
                                        <p className="heading has-text-warning">From</p>
                                        <p className="title is-size-7-mobile is-size-5-tablet has-text-white">{playerData.info.college}</p>
                                    </div>
                                    <div className="column is-half-mobile">
                                        {
                                            playerData.info.nickname != " " ? (
                                                <div>
                                                    <p className="heading has-text-warning">Nickname</p>
                                                    <p className="title is-size-7-mobile is-size-5-tablet has-text-white">{playerData.info.nickname}</p>
                                                </div>
                                            ) : ""
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-3-desktop">
                        <div className="columns is-mobile is-multiline">
                            <div className="column is-full">
                                <p className="heading has-text-warning">Plays</p>
                                <div className="tags is-left is-rounded has-text-weight-bold">
                                    {playerData.info.play1 != "None" ? (
                                            <span className="tag is-dark">
                                                <RiBasketballLine />
                                                &nbsp;{playerData.info.play1}
                                            </span> 
                                        ) : ""    
                                    }
                                    {
                                        playerData.info.play2 != "None" ? (
                                            <span className="tag is-dark">
                                                <RiBasketballLine />
                                                &nbsp;{playerData.info.play2}
                                            </span> 
                                        ) : ""
                                    }
                                    {
                                        playerData.info.play3 != "None" ? (
                                            <span className="tag is-dark">
                                                <RiBasketballLine />
                                                &nbsp;{playerData.info.play3}
                                            </span> 
                                        ) : ""
                                    }
                                    {
                                        playerData.info.play4 != "None" ? (
                                            <span className="tag is-dark">
                                                <RiBasketballLine />
                                                &nbsp;{playerData.info.play4}
                                            </span> 
                                        ) : ""
                                    }
                                </div>
                            </div>
                            <div className="column is-full-mobile is-one-fifth-desktop is-3-tablet">
                                <p className="heading has-text-warning">Hot Zones</p>
                                <ShotChart hotzones={playerData.hotzones} />  
                                <p className="title"></p>
                                <p className="heading has-text-warning">Badges</p>
                                <div className="level">   
                                    <div className="level-item is-size-5 has-text-centered" style={{ justifyContent:"space-evenly" }}>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_bronze.png" width={64} />
                                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.bronzeBadges}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_silver.png" width={64} />
                                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.silverBadges}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_gold.png" width={64} />
                                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.goldBadges}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_hof.png" width={64} />
                                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.hofBadges}</p>
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