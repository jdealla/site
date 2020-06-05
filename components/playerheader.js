import React from "react";
import { RiBasketballLine } from "react-icons/ri";
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import ShotChart from "./shotchart";
import ImageCloud from "./imagecloud";
// import Dropdown from "./dropdown";
import OverallImage from "./overallimage";

export default function PlayerHeader(props) {
    const { playerData, altPlayers, evoStars, evoLevel, handleEvo, shoe, handleShoe, } = props;

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

    const renderEvoStars = () => {
        let stars = []
        for(let i = 1; i < evoStars + 1; i++) {
            let star = (
                <div className="column is-1" onClick={() => handleEvo(i)} key={i} style={{ cursor: "pointer" }}>
                    {evoLevel > i ? <AiFillStar size="2em" /> : <AiOutlineStar size="2em" />}
                </div>
            )
            stars.push(star);
        }

        return stars;
    }

    return (
        <div className="columns is-mobile is-multiline is-player-card mobile-padding">
            <div className="column is-full-mobile is-full-desktop is-full-widescreen">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-full-mobile is-8-desktop is-four-fifths-widescreen">
                        <div className="columns is-mobile is-multiline">
                            <div className="column is-half-mobile is-5-desktop is-3-widescreen">
                                <figure className="image is-3by4">
                                    <ImageCloud src={`players/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width={400} />
                                </figure>
                                <div className="columns is-mobile is-gapless is-centered">
                                    {altPlayers.map((player, i) => (
                                        <div className="column is-narrow" key={i}>
                                            <div className="container">
                                                <a href={`/player/${player.id}`}>
                                                    <OverallImage overall={player.overall} />
                                                    <p className="is-overlay has-text-white has-text-weight-bold is-size-7 inline-number-ovr" style={{ left: "24%", top: "12% !important" }}>
                                                        {player.overall}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="column is-half-mobile is-half-tablet is-6-desktop is-8-widescreen is-player-info">
                                <div className="columns is-mobile is-multiline">
                                    <div className="column is-hidden-mobile is-one-third-tablet is-half-desktop is-2-widescreen">
                                        <p className="heading has-text-warning" style={{ marginBottom:0 }}>Overall</p>
                                        <p className="title is-size-7-mobile is-size-4-desktop is-size-1-widescreen has-text-white">
                                            {playerData.info.overall}
                                        </p>
                                    </div>
                                    <div className="column is-full-mobile is-half-desktop is-6-widescreen">
                                        <p className="title is-size-3-widescreen has-text-weight-bold has-text-white is-hidden-mobile">{playerData.info.name}</p>
                                        <p className="subtitle is-size-7-mobile is-size-7-tablet has-text-weight-semibold"> 
                                            <a className="has-text-warning" href={`/collections`}>{playerData.info.collection} </a>
                                            / 
                                            <a className="has-text-warning" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a>
                                        </p>
                                    </div>
                                    <div className={evoStars == 0 ? "is-hidden" : "column is-3"}>
                                        <p className="heading has-text-warning">Evolutions</p>
                                        <div className="columns is-mobile">
                                            {renderEvoStars()}
                                        </div>
                                    </div>

                                    <div className="column is-hidden-mobile is-3-desktop">
                                        <p className="heading has-text-warning">Offense</p>
                                        <p className="title is-size-6-mobile is-size-6-desktop has-text-white">{playerData.info.off_overall}</p>
                                    </div>
                                    <div className="column is-hidden-mobile is-3-desktop">
                                        <p className="heading has-text-warning">Defense</p>
                                        <p className="title is-size-7-mobile is-size-6-desktop has-text-white">{playerData.info.def_overall}</p>
                                    </div>
                                    <div className="column is-half-mobile is-2-desktop is-3-widescreen">
                                        <p className="heading has-text-warning">Height</p>
                                        <p className="title is-size-7-mobile is-size-6-desktop has-text-white">{playerData.info.height}</p>
                                    </div>
                                    <div className="column is-half-mobile is-3-desktop">
                                        <p className="heading has-text-warning">Weight</p>
                                        <p className="title is-size-7-mobile is-size-6-desktop has-text-white">{playerData.info.weight} lbs</p>
                                    </div>
                                    <div className="column is-3-desktop">
                                        <p className="heading has-text-warning">Position</p>
                                        <p className="title is-size-7-mobile is-size-6-desktop has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                                    </div>
                                    <div className="column is-3-desktop">
                                        <p className="heading has-text-warning">Team</p>
                                        <p className="title is-size-7-mobile is-size-6-desktop has-text-white">{playerData.info.team}</p>
                                    </div>
                                    <div className="column is-half-mobile is-4-desktop is-3-widescreen">
                                        <p className="heading has-text-warning">From</p>
                                        <p className="title is-size-7-mobile is-size-6-desktop has-text-white">{playerData.info.college}</p>
                                    </div>
                                    <div className={`column is-hidden-mobile ${playerData.info.nickname == " " ? "is-hidden" : "is-3-desktop"}`}>
                                        <p className="heading has-text-warning">Nickname</p>
                                        <p className="title is-size-7-mobile is-size-6-desktop has-text-white">{playerData.info.nickname}</p>
                                    </div>
                                    <div className={`column is-hidden-mobile is-full-desktop is-full-widescreen is-full-fullhd`}>
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
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="column is-3-desktop is-2-widescreen">
                        <div className="columns is-mobile is-multiline">
                            <div className="column is-full-mobile is-hidden-desktop is-invisible-desktop">
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

                            <div className="column is-full-mobile">
                                <p className="heading has-text-warning">Hot Zones</p>
                                <ShotChart hotzones={playerData.hotzones} />  
                                <p className="title"></p>
                                <p className="heading has-text-warning">Badges</p>
                                <div className="level">   
                                    <div className="level-item is-size-5 has-text-centered" style={{ justifyContent:"space-evenly" }}>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_bronze.png" width={64} />
                                            <p className="is-overlay inline-number-badge">{playerData.badges.totalBadges.bronzeBadges}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_silver.png" width={64} />
                                            <p className="is-overlay inline-number-badge">{playerData.badges.totalBadges.silverBadges}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_gold.png" width={64} />
                                            <p className="is-overlay inline-number-badge">{playerData.badges.totalBadges.goldBadges}</p>
                                        </figure>
                                        <figure className="image is-64x64">
                                            <ImageCloud src="icons/icon_badge_hof.png" width={64} />
                                            <p className="is-overlay inline-number-badge">{playerData.badges.totalBadges.hofBadges}</p>
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