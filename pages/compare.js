import React, { useState, Fragment } from "react";

import SearchPlayers from "../components/searchplayers";
import CompareTable from "../components/comparetable";
import ImageCloud from "../components/imagecloud";
import Head from "next/head";

export default function Compare() {
    const [players, setPlayers] = useState({ player1: null, player2: null, });
    const [view, setView] = useState("stats");

    const handlePlayer = (num, playerObj) => {
        setPlayers({ ...players, [num]: playerObj });
    }

    const renderView = () => {
        const { player1, player2 } = players;

        const heroView = (
            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    </div>
                </div>
            </section>
        )

        switch(view) {
            case "stats": {
                if (player1 == null || player2 == null)
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
                                <CompareTable tableName="Shooting" firstName={player1.info.name} firstStats={player1.stats.shooting} secondName={player2.info.name} secondStats={player2.stats.shooting} />
                                <CompareTable tableName="Inside Scoring" firstName={player1.info.name} firstStats={player1.stats.inside} secondName={player2.info.name} secondStats={player2.stats.inside} />
                                <CompareTable tableName="Playmaking" firstName={player1.info.name} firstStats={player1.stats.playmaking} secondName={player2.info.name} secondStats={player2.stats.playmaking} />
                            </div>
                            <div className="column">
                                <CompareTable tableName="Defense" firstName={player1.info.name} firstStats={player1.stats.defense} secondName={player2.info.name} secondStats={player2.stats.defense} />
                                <CompareTable tableName="Rebound" firstName={player1.info.name} firstStats={player1.stats.rebound} secondName={player2.info.name} secondStats={player2.stats.rebound} />
                                <CompareTable tableName="Potential" firstName={player1.info.name} firstStats={player1.stats.potential} secondName={player2.info.name} secondStats={player2.stats.potential} />
                            </div>
                        </Fragment>
                    )
            }
            case "badges": {
                if (player1 == null || player2 == null)
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
                                <CompareTable tableName="Finishing Badges" firstName={player1.info.name} firstStats={player1.badges.finishing} secondName={player2.info.name} secondStats={player2.badges.finishing} />
                                <CompareTable tableName="Playmaking Badges" firstName={player1.info.name} firstStats={player1.badges.playmaking} secondName={player2.info.name} secondStats={player2.badges.playmaking} />
                            </div>
                            <div className="column">
                                <CompareTable tableName="Shooting Badges" firstName={player1.info.name} firstStats={player1.badges.shooting} secondName={player2.info.name} secondStats={player2.badges.shooting} />
                                <CompareTable tableName="Defensive Badges" firstName={player1.info.name} firstStats={player1.badges.defensive} secondName={player2.info.name} secondStats={player2.badges.defensive} />
                            </div>
                        </Fragment>
                    )
            }
            case "tendencies": {
                if (player1 == null || player2 == null)
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
                                <CompareTable tableName="Inside" firstName={player1.info.name} firstStats={player1.tendencies.inside} secondName={player2.info.name} secondStats={player2.tendencies.inside} />
                                <CompareTable tableName="Iso" firstName={player1.info.name} firstStats={player1.tendencies.iso} secondName={player2.info.name} secondStats={player2.tendencies.iso} />
                                <CompareTable tableName="Defense" firstName={player1.info.name} firstStats={player1.tendencies.defense} secondName={player2.info.name} secondStats={player2.tendencies.defense} />
                            </div>
                            <div className="column">
                                <CompareTable tableName="Shooting" firstName={player1.info.name} firstStats={player1.tendencies.shooting} secondName={player2.info.name} secondStats={player2.tendencies.shooting} />
                                <CompareTable tableName="Drive" firstName={player1.info.name} firstStats={player1.tendencies.drive} secondName={player2.info.name} secondStats={player2.tendencies.drive} />
                            </div>
                            <div className="column">
                                <CompareTable tableName="Post" firstName={player1.info.name} firstStats={player1.tendencies.post} secondName={player2.info.name} secondStats={player2.tendencies.post} />
                                <CompareTable tableName="Freelance" firstName={player1.info.name} firstStats={player1.tendencies.freelance} secondName={player2.info.name} secondStats={player2.tendencies.freelance} />
                                <CompareTable tableName="Passing" firstName={player1.info.name} firstStats={player1.tendencies.passing} secondName={player2.info.name} secondStats={player2.tendencies.passing} />
                            </div>
                        </Fragment>
                    )
            }
            case "animations": {
                if (player1 == null || player2 == null)
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
                                <CompareTable tableName="Shooting" firstName={player1.info.name} firstStats={player1.animations.shooting} secondName={player2.info.name} secondStats={player2.animations.shooting} diff={false} />
                                <CompareTable tableName="Post" firstName={player1.info.name} firstStats={player1.animations.post} secondName={player2.info.name} secondStats={player2.animations.post} diff={false} />
                            </div>
                            <div className="column">
                                <CompareTable tableName="Dribble Moves" firstName={player1.info.name} firstStats={player1.animations.ballhandle} secondName={player2.info.name} secondStats={player2.animations.ballhandle} diff={false} />
                                <CompareTable tableName="Handedness" firstName={player1.info.name} firstStats={player1.animations.hands} secondName={player2.info.name} secondStats={player2.animations.hands} diff={false} />
                            </div>
                            <div className="column">
                                <CompareTable tableName="Layups / Dunks" firstName={player1.info.name} firstStats={player1.animations.layup} secondName={player2.info.name} secondStats={player2.animations.layup} diff={false} />
                            </div>
                        </Fragment>
                    )
            }
        };
    };

    const playerInfoContainer = (playerData, playerId) => {
        return (
            <div className="card">
                <div className="card-header">
                    <button className="delete" aria-label="delete" onClick={() => handlePlayer(playerId, null)}></button>
                </div>
                <div className="card-image">
                    <ImageCloud src={`players/${playerData.info.name.replace(/ /g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width="0.4" />
                </div>
            </div>
        )
    };

    const renderSearch = (playerNum) => {
        switch(playerNum) {
            case 1: {
                if (players.player1 == null) {
                    return <SearchPlayers handlePlayer={handlePlayer} playerInfo="player1" />
                } else {
                    let playerData = players.player1

                    return playerInfoContainer(playerData, "player1");
                }
            }
            case 2: {
                if (players.player2 == null) {
                    return <SearchPlayers handlePlayer={handlePlayer} playerInfo="player2" />
                } else {
                    let playerData = players.player2
                    
                    return playerInfoContainer(playerData, "player2")
                }
            }
        }
    }

    return (
        <>
            <Head>
                <title>Compare NBA 2K20 MyTeam Players Page | 2KDB</title>
                <meta name="description" content="Compare 2 NBA 2K20 MyTeam player cards for their stats, badges, tendencies, and animations" />
            </Head>
            <div className="container" style={{ marginTop: '10px' }}>
                <div className="level">
                    <div className="level-item">
                        {renderSearch(1)}
                    </div>
                    <div className="level-item">
                        {renderSearch(2)}
                    </div>
                </div>
                <div className="container">
                    <div className="tabs is-boxed is-centered">
                        <ul>
                            <li className={view === "stats" ? "is-active" : ""} onClick={() => setView("stats")}><a>Stats</a></li>
                            <li className={view === "badges" ? "is-active" : ""} onClick={() => setView("badges")}><a>Badges</a></li>
                            <li className={view === "tendencies" ? "is-active" : ""} onClick={() => setView("tendencies")}><a>Tendencies</a></li>
                            <li className={view === "animations" ? "is-active" : ""} onClick={() => setView("animations")}><a>Signature/Animations</a></li>
                        </ul>
                    </div>
                </div>
                <div className="columns">
                    {renderView()}
                </div>
            </div>
        </>
    )
}