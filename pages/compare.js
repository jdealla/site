import Head from "next/head";
import { useState, Fragment } from "react";

import Layout from "../components/layout";
import SearchPlayers from "../components/searchplayers";
import CompareTable from "../components/comparetable";

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
            case "tendencies": return heroView;
            case "animations": return heroView;
        };
    };

    const playerInfoContainer = (playerData, playerId) => {
        return (
            <div className="card">
                <div className="card-header">
                    <button className="delete" aria-label="delete" onClick={() => handlePlayer(playerId, null)}></button>
                </div>
                <div className="card-image">
                    <img src={playerData.image} />
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
        <Layout>
            <Head>
                <title>2KDB Compare Players Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
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
        </Layout>
    )
}