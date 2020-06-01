import { useState, Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { getPlayersIds } from "../../lib/players";
import { getPlayerData } from "../../pages/api/player/[id]";

import BadgeContainer from "../../components/badgecontainer";
import Attributes from "../../components/attributes";
import Loader from "../../components/loader";

const PlayerHeader = dynamic(import("../../components/playerheader"));

export default function Player({ playerData }) {
    const [view, setView] = useState("stats");
    const [shoe, setShoe] = useState()
    const { isFallback } = useRouter();

    if (isFallback) {
        return <Loader />
    }

    const handleShoe = (shoe) => {
        console.log('setting shoe to: ', shoe)
        setShoe(shoe)
    }

    const renderRatings = () => {
        return (
            <Fragment>
                <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
                    <Attributes attributes={playerData.stats.shooting} attrName="Shooting" bonus={shoe} />
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
        <>
            <Head>
                <title>{`${playerData.info.name} MyTeam Player Page | 2KDB`}</title>
                <meta property="og:title" content={`${playerData.info.name} MyTeam Player Page | 2KDB`} key={"title" + playerData.info.id} />
                <meta name="description" content={`NBA 2K20 MyTeam Card Description of ${playerData.info.name}`} />
                <meta property="og:description" content={`NBA 2K20 MyTeam Card Description of ${playerData.info.name}`} key={"description" + playerData.info.id} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <html lang="en" key="lang-en" />
            </Head>
			<div className="is-player-card-bg is-hidden-mobile">
                <img src="/playercard_bg.png" alt="player card bg" />
            </div>
            <div className="container is-fluid mobile-nopadding">
                <PlayerHeader playerData={playerData} shoe={shoe} handleShoe={handleShoe} />

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

                <div className="columns is-multiline is-mobile is-gapless mobile-padding">
                    {renderView()}
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getPlayersIds();

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const playerData = await getPlayerData(params.id)

    return {
        props: {
            playerData,
        },
    }
}