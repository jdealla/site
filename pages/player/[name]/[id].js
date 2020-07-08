import { useState, Fragment, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getPlayersIds, findAltPlayers, getAllPlayers } from "../../../lib/players";
import { findEvos } from "../../../lib/evos";
import { findDuos, findDuoPartner } from "../../../lib/duos";
import { getPlayerData } from "../../../pages/api/player/[id]";
import { ratePlayer } from "../../../lib/ratings";

import Layout from "../../../components/layout";
import PlayerHeader from "../../../components/playerheader";
import BadgeContainer from "../../../components/badgecontainer";
import Attributes from "../../../components/attributes";
import Loader from "../../../components/idloader";

export default function Player({ playerData, altPlayers, evos, duo, duoPartner, players }) {
    const [view, setView] = useState("stats");
    const [evoLevel, setEvoLevel] = useState(-1);
    const [duoOn, setDuoOn] = useState(false);
    const [trueRatings, setTrueRatings] = useState(false);
    useEffect(() => {
        if (playerData) {
            setTrueRatings(ratePlayer(playerData, duoOn, evoLevel, duo, evos));
        }
    }, [ playerData, duoOn, evoLevel ]);

    const { isFallback } = useRouter();
    if (isFallback) {
        return <Loader />
    }

    const handleEvo = (level) => setEvoLevel(level);
    const handleDuo = () => setDuoOn(!duoOn);

    const renderRatings = () => {
        return (
            <Fragment>
                <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
                    <Attributes attributes={playerData.stats.shooting} 
                        attrName="Shooting" evoStats={evoLevel != -1 ? evos[evoLevel].stats.shooting : ""} duoStats={duoOn ? duo.stats.shooting : ""} />
                    <Attributes attributes={playerData.stats.inside} 
                        attrName="Inside Scoring" evoStats={evoLevel != -1 ? evos[evoLevel].stats.inside : ""} duoStats={duoOn ? duo.stats.inside : ""} />
                    <Attributes attributes={playerData.stats.playmaking} 
                        attrName="Playmaking" evoStats={evoLevel != -1 ? evos[evoLevel].stats.playmaking : ""} duoStats={duoOn ? duo.stats.playmaking : ""} />
                </div>
                <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
				    <Attributes attributes={playerData.stats.athleticism} 
                        attrName="Athleticism" evoStats={evoLevel != -1 ? evos[evoLevel].stats.athleticism : ""} duoStats={duoOn ? duo.stats.athleticism : ""} />
                    <Attributes attributes={playerData.stats.defense} 
                        attrName="Defense" evoStats={evoLevel != -1 ? evos[evoLevel].stats.defense : ""} duoStats={duoOn ? duo.stats.defense : ""} />
                    <Attributes attributes={playerData.stats.rebound} 
                        attrName="Rebound" evoStats={evoLevel != -1 ? evos[evoLevel].stats.rebound : ""} duoStats={duoOn ? duo.stats.rebound : ""} />
                    <Attributes attributes={playerData.stats.potential} 
                        attrName="Potential" evoStats={evoLevel != -1 ? evos[evoLevel].stats.potential : ""} duoStats={duoOn ? duo.stats.potential : ""} />
                </div>
            </Fragment>
        )
    }

    const renderBadges = () => {
        return (
            <div className="column ">
                <div className="container">
                    <p className="subtitle is-6 has-text-weight-semibold "> Finishing Badges</p>
                    <BadgeContainer badges={playerData.badges.finishing} evoBadges={evoLevel != -1 ? evos[evoLevel].badges.finishing : ""} duoBadges={duoOn ? duo.badges.finishing : ""} />
                    <p className="subtitle is-6 has-text-weight-semibold "> Shooting Badges </p>
                    <BadgeContainer badges={playerData.badges.shooting} evoBadges={evoLevel != -1 ? evos[evoLevel].badges.shooting : ""} duoBadges={duoOn ? duo.badges.shooting : ""} />
                    <p className="subtitle is-6 has-text-weight-semibold "> Playmaking Badges </p>
                    <BadgeContainer badges={playerData.badges.playmaking} evoBadges={evoLevel != -1 ? evos[evoLevel].badges.playmaking : ""} duoBadges={duoOn ? duo.badges.playmaking : ""} />
                    <p className="subtitle is-6 has-text-weight-semibold "> Defensive Badges </p>
                    <BadgeContainer badges={playerData.badges.defensive} evoBadges={evoLevel != -1 ? evos[evoLevel].badges.defensive : ""} duoBadges={duoOn ? duo.badges.defensive : ""} />
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
                        <Attributes attributes={playerData.tendencies.inside} attrName="Inside" tendency={true}/>
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.shooting} attrName="Shooting" tendency={true}/>
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.iso} attrName="Iso" tendency={true}/>
                        <Attributes attributes={playerData.tendencies.drive} attrName="Drive" tendency={true}/>
                    </div>
					<div className="column is-one-fifth-tablet is-half-mobile">
                        <Attributes attributes={playerData.tendencies.post} attrName="Post" tendency={true}/>
                    </div>
                    <div className="column is-one-fifth-tablet is-half-mobile">
					    <Attributes attributes={playerData.tendencies.defense} attrName="Defense" tendency={true}/>
                        <Attributes attributes={playerData.tendencies.freelance} attrName="Freelance" tendency={true}/>
						<Attributes attributes={playerData.tendencies.passing} attrName="Passing" tendency={true}/>        
                    </div>
                </Fragment>
            )
            case "animations": return (
                <Fragment>
                    <div className="column is-full-mobile is-3-desktop is-one-fifth-fullhd">
                        <Attributes attributes={playerData.animations.shooting} attrName="Shooting" reverse={true} />
						<Attributes attributes={playerData.animations.post} attrName="Post" reverse={true} />
                    </div>
                    <div className="column is-full-mobile is-3-desktop is-one-fifth-fullhd">
                        <Attributes attributes={playerData.animations.ballhandle} attrName="Dribble Moves" reverse={true} />
						<Attributes attributes={playerData.animations.hands} attrName="Handedness" reverse={true} />
                    </div>
                    <div className="column is-full-mobile is-4-desktop is-one-fifths-fullhd">
                        <Attributes attributes={playerData.animations.layup} attrName="Layups/Dunks" reverse={true} />
                    </div>
                </Fragment>
            )
            case "trueRatings": return (
                <Fragment>
                    <div>
                        <div className="column is-three-fifths-desktop pl-0 pt-0 ml-0"><strong>True Ratings</strong> are based on a weighted calculation that favors specific attributes for specific positions, helping measure the true quality of the card. Currently, badging, animations, and player models aren’t factored in. </div>
                        <div className="mb-3 is-size-7 pl-0 ml-0">created by <strong><a href="https://2kgamer.com/u/element">element</a></strong> | implemented by <strong><a href="https://2kgamer.com/u/jdealla">jdealla</a></strong></div>
                    </div>
                    {trueRatings ? trueRatings.map( ({ overall, sections, position }, index) => {
                        return (
                            <div key={`trueRating${index}`} className="column is-one-fifth-desktop is-one-fourth-tablet is-half-mobile">
                                <Attributes attributes={{overall, ...sections}} attrName={position} trueRating={true}/>
                            </div>
                        );
                    }) : null}
                </Fragment>
            )
            default: return;
        }
    }

    return (
        <Layout players={players} searchOn={true}>
            <Head>
                <title>{`${playerData.info.name} MyTeam Player Page | 2KDB`}</title>
                <meta property="og:title" content={`${playerData.info.name} MyTeam Player Page | 2KDB`} key={"title" + playerData.info.id} />
                <meta name="description" content={`NBA 2K20 MyTeam Card Description of ${playerData.info.name}`} />
                <meta property="og:description" content={`NBA 2K20 MyTeam Card Description of ${playerData.info.name}`} key={"description" + playerData.info.id} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <html lang="en" key="lang-en" />
            </Head>
			<div className="is-player-card-bg is-hidden-mobile">
                <img src="/playercard_bg.png" alt="player card bg" />
            </div>
            <div className="container is-fluid mobile-nopadding">
                <PlayerHeader 
                    playerData={playerData} 
                    altPlayers={altPlayers} 
                    evos={evos}
                    evoLevel={evoLevel} 
                    handleEvo={handleEvo}
                    duo={duo}
                    duoPartner={duoPartner}
                    duoOn={duoOn} 
                    handleDuo={handleDuo}
                />

                <div className="columns ">
                    <div className="column is-full">
                        <div className="tabs is-boxed">
                            <ul>
                                <li className={view === "stats" ? "is-active" : ""} onClick={() => setView("stats")}><a>Stats</a></li>
                                <li className={view === "tendencies" ? "is-active" : ""} onClick={() => setView("tendencies")}><a>Tendencies</a></li>
                                <li className={view === "animations" ? "is-active" : ""} onClick={() => setView("animations")}><a>Signature/Animations</a></li>
                                <li className={view === "trueRatings" ? "is-active" : ""} onClick={() => setView("trueRatings")}><a>True Ratings</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="columns is-multiline is-mobile is-gapless mobile-padding">
                    {renderView()}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getPlayersIds()
                        .catch(console.error);

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const id = params.id;

    const playerData = await getPlayerData(id).catch(console.error);

    const res = await findAltPlayers(playerData.info.name).catch(console.error);
    
    const altPlayers = res.filter(player => player.id != id).sort((a, b) => a.overall > b.overall ? -1 : 1);

    const evos = await findEvos(id).catch(console.error);

    const duo = await findDuos(id).catch(console.error);

    let duoPartner = {};
    if (duo != null)
        duoPartner = await findDuoPartner(duo.id2).catch(console.error);


    const players = await getAllPlayers().catch(console.error);

    return {
        props: {
            playerData,
            altPlayers,
            evos,
            duo,
            duoPartner,
            players,
        },
        unstable_revalidate: 10
    }
}