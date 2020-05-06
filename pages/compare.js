import { useState, Fragment } from "react";
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
        switch(view) {
            case "stats": {
                if (players.player1 == null || players.player2 == null)
                    return;
                else
                    return <CompareStats players={players} />;
            }
            case "badges": {
                if (players.player1 == null || players.player2 == null)
                    return;
                else
                    return <CompareBadges players={players} />;
            }
            case "tendencies": return;
            case "animations": return;
        }
    }

    const playerInfoContainer = (playerData) => {
        return (
            <div className="notification">
                <button className="delete" onClick={() => handlePlayer("player1", null)}></button>
                <p className="subtitle">
                    {playerData.name}
                    <br />
                    Overall: {playerData.overall}
                    <br />
                    Position: {playerData.position}{playerData.secondary_position != null ? `/${playerData.secondary_position}` : ""}
                </p>
            </div>
        )
    }

    const renderSearch = (playerNum) => {
        switch(playerNum) {
            case 1: {
                if (players.player1 == null) {
                    return <SearchPlayers handlePlayer={handlePlayer} playerInfo="player1" />
                } else {
                    let playerData = players.player1

                    return playerInfoContainer(playerData);
                }
            }
            case 2: {
                if (players.player2 == null) {
                    return <SearchPlayers handlePlayer={handlePlayer} playerInfo="player2" />
                } else {
                    let playerData = players.player2
                    
                    return playerInfoContainer(playerData)
                }
            }
        }
    }

    return (
        <Layout>
            <div className="container">
                <p className="has-text-centered has-text-weight-semibold">Compare Player Cards</p>
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