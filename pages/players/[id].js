import { useState, Fragment } from "react";
import { getPlayersIds, getPlayerData } from "../../lib/players";

import Head from 'next/head'
import Layout from "../../components/layout";
import BadgeContainer from "../../components/badgecontainer";
import Attributes from "../../components/attributes";
import ShotChart from "../../components/shotchart";

export default function Player({ playerData }) {
    const [view, setView] = useState("stats");

    const renderRatings = () => {
        return (
            <Fragment>
                <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
                    <Attributes attributes={playerData.stats.shooting} attrName="Shooting" />
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

    return (
        <Layout>
            <Head>
                <title>{playerData.info.name} | 2KDB</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container is-fluid is-desktop">
                <div className="columns is-mobile is-multiline">
                    <div className="column is-5-mobile is-3-desktop is-2-tablet">
                        <p className="title is-size-4">{playerData.info.name}</p>
                        <p className="subtitle is-paddingless is-size-6-desktop is-size-7-mobile"> {playerData.info.collection} / {playerData.info.theme} </p>
                        <p className="subtitle is-size-6 is-size-7-mobile">
                            Height: {playerData.info.height}
                            <br />
                            Weight: {playerData.info.weight}lbs
                            <br />
						    From: {playerData.info.college}
                            <br />
                            Nickname: {playerData.info.nickname}
                            <br />
                            Team: {playerData.info.team}
                            <br />
                            Overall: {playerData.info.overall}
                            <br />
                            Offensive Overall: {playerData.info.off_overall}
                            <br />
                            Defensive Overall: {playerData.info.def_overall}
                            <br />
                            Position: {playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}
                        </p>
                        <p className="subtitle is-paddingless has-text-weight-bold is-size-7-mobile is-size-6"> Plays: </p>
                        <div className="tags">
                            <span className="tag">{playerData.info.play1}</span>
                            <span className="tag">{playerData.info.play2}</span>
                            <span className="tag">{playerData.info.play3}</span>
                            <span className="tag">{playerData.info.play4}</span>
                        </div>
                        <div className="container">
                            <div className="buttons has-addons">
                                <button className="button" disabled>
                                    <span className="icon">
                                        <img src="/icons/icon_shoes.png" />
                                    </span>
                                    <span>Add Shoe</span>
                                </button>
                                <button className="button" disabled>
                                    <span className="icon">
                                        <img src="/icons/icon_coach.png" />
                                    </span>
                                    <span>Add Coach</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-7-mobile is-2-desktop is-2-tablet">
                        <img src={playerData.image} />
                    </div>
                    <div className="column is-12-mobile is-2-desktop is-2-tablet">
                        <p className="subtitle is-6 has-text-weight-semibold ">Hot Zones:</p>
                        <ShotChart hotzones={playerData.hotzones} />  
                        <p className="subtitle is-6 has-text-weight-semibold ">Badges:</p>
                        <div className="level ">
                            <div className="level-item is-size-5 has-text-centered">
                                <figure className="image is-64x64">
                                    <img src="/icons/icon_badge_bronze.png" />
                                    <p className="subtitle is-4 is-overlay has-text-weight-semibold has-text-white" style={{ fontFamily: "Rajdhani", textShadow: "1px 2px 4px #000", marginTop: "0.4em"}}>{playerData.badges.totalBadges.bronzeBadges}</p>
                                </figure>
                                <figure className="image is-64x64">
                                    <img src="/icons/icon_badge_silver.png" />
                                    <p className="subtitle is-4 is-overlay has-text-weight-semibold has-text-white" style={{ fontFamily: "Rajdhani", textShadow: "1px 2px 4px #000", marginTop: "0.4em"}}>{playerData.badges.totalBadges.silverBadges}</p>
                                </figure>
                                <figure className="image is-64x64">
                                    <img src="/icons/icon_badge_gold.png" />
                                    <p className="subtitle is-4 is-overlay has-text-weight-semibold has-text-white" style={{ fontFamily: "Rajdhani", textShadow: "1px 2px 4px #000", marginTop: "0.4em"}}>{playerData.badges.totalBadges.goldBadges}</p>
                                </figure>
                                <figure className="image is-64x64">
                                    <img src="/icons/icon_badge_hof.png" />
                                    <p className="subtitle is-4 is-overlay has-text-weight-semibold has-text-white" style={{ fontFamily: "Rajdhani", textShadow: "1px 2px 4px #000", marginTop: "0.4em"}}>{playerData.badges.totalBadges.hofBadges}</p>
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