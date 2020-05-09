import { useState, Fragment } from "react";
import { getPlayersIds, getPlayerData, getPlayerHeight, getPlayerInfo } from "../../lib/players";

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
                <div className="column is-one-fifth-tablet is-half-mobile">
                    <Attributes attributes={playerData.stats.shooting} attrName="Shooting" />
                    <Attributes attributes={playerData.stats.inside} attrName="Inside Scoring" />
                    <Attributes attributes={playerData.stats.playmaking} attrName="Playmaking" />
                </div>
                <div className="column is-one-fifth-tablet is-half-mobile">
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
                        <Attributes attributes={playerData.tendencies.shooting} attrName="Shooting" />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.iso} attrName="Iso" />
                        <Attributes attributes={playerData.tendencies.drive} attrName="Drive" />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.shooting} attrName="Freelance" />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.post} attrName="Post" />
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.passing} attrName="Passing" />
                        <Attributes attributes={playerData.tendencies.defense} attrName="Defense" />
                    </div>
                </Fragment>
            )
            case "animations": return (
                <Fragment>
                    <div className="column is-one-fifth-tablet is-half-mobile">

                    </div>
                </Fragment>
            )
            default: return;
        }
    }

    return (
        <Layout>
            <Head>
                <title>{playerData.name} | 2KDB</title>
            </Head>
            <div className="container is-fluid ">
                <div className="container ">
                    <div className="columns ">
                        <div className="column is-one-quarter">
                            <p className="title">{playerData.info.name}</p>
							<p className="subtitle">
                                <p className="is-paddingless is-size-6"> {playerData.info.collection} / {playerData.info.theme} </p>
                                Height: {getPlayerHeight(playerData.info.height)}
								<br />
								Weight: {playerData.info.weight}lbs
								<br />
							</p>
                            <p className="subtitle">
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
                        </div>
                        <div className="column">
                            <img src={`https://via.placeholder.com/225x313.png?text=${playerData.info.id}`} />
                        </div>
                        <div className="column is-one-quarter">
                            <p className="subtitle is-6 has-text-weight-semibold ">Hot Zones:</p>
                            <ShotChart hotzones={playerData.hotzones} />
                        </div>
                        <div className="column">
                            Badge Icons
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