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
        for(let i = 0; i < evoStars; i++) {
            let star = (
                <div className="column is-1" key={i} style={{ cursor: "pointer" }}>
                    <div className="container" onClick={() => handleEvo(i)}>
                        {evoLevel >= i ? <AiFillStar size="2em" /> : <AiOutlineStar size="2em" />}
                    </div>
                </div>
            )
            stars.push(star);
        }

        return stars;
    }

    return (
        <div className="columns is-mobile is-multiline is-player-card mobile-padding">
            <div className="column is-full-mobile is-full-desktop is-full-widescreen">
			       <div className="column is-full-mobile player-column-height is-hidden-tablet">
                                <figure className="image is-3by4">
                                    <ImageCloud src={`players/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width={489} />
                                </figure>
                                <div className="columns is-mobile is-centered" style={{ padding:"2em 0", flexWrap:"wrap" }}>
                                    {altPlayers.map((player, i) => (
                                        <div className="column is-narrow" key={i} style={{ padding:"0.1em" }}>
                                            <div className="container no-shadow">
                                                <a href={`/player/${player.id}`}>
                                                    <OverallImage size="24x24" overall={player.overall} />
                                                    <p className="is-overlay is-size-6 has-text-white has-text-centered inline-number-ovr" >
                                                        {player.overall}
                                                    </p>
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
                                <figure className="image is-3by4">
                                    <ImageCloud src={`players/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width={489} />
                                </figure>
                                <div className="columns is-mobile is-centered" style={{ padding:"2em 0", flexWrap:"wrap" }}>
                                    {altPlayers.map((player, i) => (
                                        <div className="column is-narrow" key={i} style={{ padding:"0.1em" }}>
                                            <div className="container no-shadow">
                                                <a href={`/player/${player.id}`}>
                                                    <OverallImage size="24x24" overall={player.overall} />
                                                    <p className="is-overlay is-size-6 has-text-white has-text-centered inline-number-ovr" >
                                                        {player.overall}
                                                    </p>
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="column is-full-mobile is-8-tablet is-player-info">
                                <div className="columns is-mobile is-multiline">
                                    <div className="column is-1-mobile is-1-tablet ovr-margin" style={{ margin:"auto 5px auto 0" }}>
									  <div className="has-text-centered no-shadow" style={{ position:"relative", width:"48px" }}>
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
                                    <div className="column is-3-mobile is-2-tablet is-3-widescreen">
                                        <p className="heading has-text-warning">Offense</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.off_overall}</p>
                                    </div>
                                    <div className="column is-3-mobile is-2-tablet is-3-widescreen">
                                        <p className="heading has-text-warning">Defense</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.def_overall}</p>
                                    </div>
                                    <div className="column is-3-mobile is-2-tablet is-3-widescreen">
                                        <p className="heading has-text-warning">Height</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.height}</p>
                                    </div>
                                    <div className="column is-3-mobile is-3-tablet is-2-desktop is-3-widescreen">
                                        <p className="heading has-text-warning">Weight</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.weight} lbs</p>
                                    </div>
                                    <div className="column is-3-mobile is-3-tablet is-3-widescreen">
                                        <p className="heading has-text-warning">Position</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                                    </div>
                                    <div className="column is-half-mobile is-4-tablet is-3-widescreen">
                                        <p className="heading has-text-warning">Team</p>
                                        <p className="title is-size-6 has-text-white">{playerData.info.team}</p>
                                    </div>
                                    <div className="column is-half-mobile is-4-tablet is-3-widescreen">
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
									<div className={evoStars == 0 ? "is-hidden" : "is-full-mobile column is-3-tablet"}>
                                        <p className="heading has-text-warning">Evolutions</p>
                                        <div className="columns is-mobile">
                                            {renderEvoStars()}
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