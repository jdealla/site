import Head from "next/head";
import { useState } from "react";
import { getPlayerHeight } from "../lib/players";

import Layout from "../components/layout";
import SearchPlayers from "../components/searchplayers";
import CompareStats from "../components/comparestats";
import CompareBadges from "../components/comparebadges";

export default function Compare() {
    const [players, setPlayers] = useState({ player1: null, player2: null, });
    const [view, setView] = useState("stats");

    const handlePlayer = (num, playerObj) => {
        setPlayers({ ...players, [num]: playerObj });
    }

    const renderView = () => {
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
                if (players.player1 == null || players.player2 == null)
                    return heroView;
                else
                    return <CompareStats players={players} />;
            }
            case "badges": {
                if (players.player1 == null || players.player2 == null)
                    return heroView;
                else
                    return <CompareBadges players={players} />;
            }
            case "tendencies": return heroView;
            case "animations": return heroView;
        };
    };

    const playerInfoContainer = (playerData, playerId) => {
        console.log(playerData);
        return (
            <article className="message">
                <div className="message-header has-text-centered">
                    <p>{playerData.name}</p>
                    <button className="delete" aria-label="delete" onClick={() => handlePlayer(playerId, null)}></button>
                </div>
                <div className="message-body">
                    <div className="columns">
                        <div className="column is-half">
                            <p>
                                Overall: {playerData.overall}
                            </p>
                            <p>
                                Height: {getPlayerHeight(playerData.height)}
                            </p>
                            Position: {playerData.position}{playerData.secondary_position != null ? `/${playerData.secondary_position}` : ""}
                        </div>
                        <div className="column is-half">
                            <p>Total Badges: </p>
                            <div className="tags has-addons">
                                <span className="tag HOF">{playerData.hof_badges}</span>
                                <span className="tag Gold">{playerData.gold_badges}</span>
                                <span className="tag Silver">{playerData.silver_badges}</span>
                                <span className="tag Bronze">{playerData.bronze_badges}</span>
                            </div>

                        </div>
                    </div>
                </div>
            </article>
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
            <div className="container">

            </div>
        </Layout>
    )
}