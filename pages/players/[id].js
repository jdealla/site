import { useState, Fragment } from "react";
import { getPlayersIds, getPlayerData } from "../../lib/players";
import { getAllShoes, shoeButton } from "../../lib/shoes";

import Head from 'next/head'
import Layout from "../../components/layout";
import BadgeContainer from "../../components/badgecontainer";
import Attributes from "../../components/attributes";
import ShotChart from "../../components/shotchart";
import Dropdown from "../../components/dropdown";

export default function Player({ playerData }) {
    const [view, setView] = useState("stats");
    const [shoe, setShoe] = useState()

    const renderRatings = () => {
        return (
            <Fragment>
                <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
                    <Attributes attributes={playerData.stats.shooting} attrName="Shooting"  />
                    <Attributes attributes={playerData.stats.inside} attrName="Inside Scoring" />
                    <Attributes attributes={playerData.stats.playmaking} attrName="Playmaking" />
                </div>
                <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
				    <Attributes attributes={playerData.stats.atheleticism} attrName="Atheleticism" />
                    <Attributes attributes={playerData.stats.defense} attrName="Defense" />
                    <Attributes attributes={playerData.stats.rebound} attrName="Rebound" />
                    <Attributes attributes={playerData.stats.potential} attrName="Potential" />
                </div>
            </Fragment>
        )
    }

    const renderBadges = () => {
        return (
            <div className="column ">
                <div className="container">
                    <p className="subtitle is-6 has-text-weight-semibold "> Finishing Badges</p>
                    <BadgeContainer badges={playerData.badges.finishing} />
                    <p className="subtitle is-6 has-text-weight-semibold "> Shooting Badges </p>
                    <BadgeContainer badges={playerData.badges.shooting} />
                    <p className="subtitle is-6 has-text-weight-semibold "> Playmaking Badges </p>
                    <BadgeContainer badges={playerData.badges.playmaking} />
                    <p className="subtitle is-6 has-text-weight-semibold "> Defensive Badges </p>
                    <BadgeContainer badges={playerData.badges.defensive} />
                    <p className="subtitle is-6 has-text-weight-semibold "> Personality Badges </p>
                    <BadgeContainer badges={playerData.badges.personality} />
                </div>
            </div>
        )
    }
    
    const renderView = () => {
        switch(view) {
            case "stats": return (
                <Fragment>
                    {renderRatings()}
                    {renderBadges()}
                </Fragment>
            )
            case "tendencies": return (
                <Fragment>
				    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.inside} attrName="Inside" />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.shooting} attrName="Shooting" />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.iso} attrName="Iso" />
                        <Attributes attributes={playerData.tendencies.drive} attrName="Drive" />
                    </div>
					<div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.post} attrName="Post" />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
					    <Attributes attributes={playerData.tendencies.defense} attrName="Defense" />
                        <Attributes attributes={playerData.tendencies.freelance} attrName="Freelance" />
						<Attributes attributes={playerData.tendencies.passing} attrName="Passing" />        
                    </div>
                </Fragment>
            )
            case "animations": return (
                <Fragment>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.animations.shooting} attrName="Shooting" reverse={true} />
						<Attributes attributes={playerData.animations.post} attrName="Post" reverse={true} />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.animations.ballhandle} attrName="Dribble Moves" reverse={true} />
						<Attributes attributes={playerData.animations.hands} attrName="Handedness" reverse={true} />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.animations.layup} attrName="Layups/Dunks" reverse={true} />
                    </div>
                </Fragment>
            )
            default: return;
        }
    }

    // const renderShoeList = () => {
    //     return getAllShoes.map(shoe => {
    //         return (
    //             <a key={i} className="dropdown-item" onClick={() => handleClick(item, addT)} >
    //                     {shoe.name}
    //             </a>
    //         )
    //     })
    // }

    return (
        <Layout>
            <Head>
                <title>{playerData.info.name} | 2KDB</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container is-fluid">
                <div className="columns is-mobile is-multiline is-player-card">
                    <div className="is-player-card"><img src="/playercard_bg.png" /></div>
                    <div className="column is-7-mobile is-one-fifth-desktop is-2-tablet ">
                        <img src={require(`images/players/${playerData.info.name.replace(/ /g, "_").toLowerCase()}_${playerData.info.id}.jpg`)} />
                    </div>
                    <div className="column is-5-mobile is-5-desktop is-2-tablet has-padding-2 is-player-info">
                        <p className="title is-size-3 has-text-weight-bold has-text-white">{playerData.info.name}</p>
                        <p className="subtitle is-paddingless is-size-6-desktop is-size-7-mobile has-text-warning has-text-weight-semibold"> 
                            <a href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}`}>{playerData.info.collection} </a>
                            / 
                            <a href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a>
                        </p>
                        <div className="subtitle is-size-6 is-size-7-mobile has-text-white">
                            <nav className="level ">
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Overall</p>
                                        <p className="title is-1 title has-text-white">
                                            {playerData.info.overall}
                                        </p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Off. Overall</p>
                                        <p className="title is-5 title has-text-white">{playerData.info.off_overall}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Def. Overall</p>
                                        <p className="title is-5 has-text-white">{playerData.info.def_overall}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Position</p>
                                        <p className="title is-5 has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Height</p>
                                        <p className="title is-5 has-text-white">{playerData.info.height}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Weight</p>
                                        <p className="title is-5 has-text-white">{playerData.info.weight} lbs</p>
                                    </div>
                                </div>
                            </nav>
                            <nav className="level ">
                                {
                                    playerData.info.nickname === "" ? (
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="heading has-text-warning">Nickname</p>
                                                <p className="title is-4 has-text-white">{playerData.info.nickname}</p>
                                            </div>
                                        </div>
                                    ) : ""
                                }
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Team</p>
                                        <p className="title is-4 has-text-white">{playerData.info.team}</p>
                                    </div>
                                </div>
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">From</p>
                                        <p className="title is-4 has-text-white">{playerData.info.college}</p>
                                    </div>
                                </div>
                            </nav>
                            <nav className="level ">
                                <div className="level-item has-text-centered">
                                    <div className="columns is-centered">
                                        <div className="column">
                                            <p className="heading has-text-warning">Plays</p>
                                            <div className="tags has-addons is-rounded has-text-weight-bold">
                                                <span className="tag is-dark">{playerData.info.play1}</span>
                                                <span className="tag is-dark">{playerData.info.play2}</span>
                                                <span className="tag is-dark">{playerData.info.play3}</span>
                                                <span className="tag is-dark">{playerData.info.play4}</span>
                                            </div> 

                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div className="container">
                            <div className="columns is-centered">
                                <div className="column is-half">
                                    {/* <Dropdown hover={false} items={renderShoeList()} customButton={shoeButton} /> */}
                                    <div className="buttons has-addons is-centered">
                                        <button className="button" disabled>
                                            <span className="icon">
                                                <img src={require("images/icons/icon_shoes.png")} />
                                            </span>
                                            <span>Add Shoe</span>
                                        </button>
                                        <button className="button" disabled>
                                            <span className="icon">
                                                <img src={require("images/icons/icon_coach.png")} />
                                            </span>
                                            <span>Add Coach</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="column is-11-mobile is-one-fifth-desktop is-2-tablet">
                    
                    <p className="subtitle has-text-weight-bold is-size-6 is-size-7-mobile has-text-warning">Hot Zones:</p>
                    <ShotChart hotzones={playerData.hotzones} />  
                    
                        <p className="subtitle has-text-weight-bold is-size-6 is-size-7-mobile has-text-warning">Badges:</p>
                        <div className="level ">
                            <div className="level-item is-size-5 has-text-centered">
                                <figure className="image is-64x64">
                                    <img src={require("images/icons/icon_badge_bronze.png")} />
                                    <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.bronzeBadges}</p>
                                </figure>
                                <figure className="image is-64x64">
                                    <img src={require("images/icons/icon_badge_silver.png")} />
                                    <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.silverBadges}</p>
                                </figure>
                                <figure className="image is-64x64">
                                    <img src={require("images/icons/icon_badge_gold.png")} />
                                    <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.goldBadges}</p>
                                </figure>
                                <figure className="image is-64x64">
                                    <img src={require("images/icons/icon_badge_hof.png")} />
                                    <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.hofBadges}</p>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns ">
                    <div className="column is-full">
                        <div className="tabs is-boxed">
                            <ul>
                                <li className={view === "stats" ? "is-active" : ""} onClick={() => setView("stats")}><a>Stats</a></li>
                                <li className={view === "tendencies" ? "is-active" : ""} onClick={() => setView("tendencies")}><a>Tendencies</a></li>
                                <li className={view === "animations" ? "is-active" : ""} onClick={() => setView("animations")}><a>Signature/Animations</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="columns is-multiline is-mobile is-gapless">
                    {renderView()}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getPlayersIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const playerData = getPlayerData(params.id)
    
    return {
        props: {
            playerData
        }
    }
}