import { useState, Fragment } from "react";
import Layout from "../components/layout";
import SearchPlayers from "../components/searchplayers"

export default function Compare() {
    const [players, setPlayers] = useState({ player1: {}, player2: {}, })
    const [view, setView] = useState("stats");

    const handlePlayer = (num, playerObj) => {
        setPlayers({ ...players, [num]: playerObj })
    }

    const renderView = () => {
        switch(view) {
            case "stats": return;
            case "badges": return;
            case "tendencies": return;
            case "animations": return;
        }
    }

    return (
        <Layout>
            <div className="container">
                <p className="has-text-centered has-text-weight-semibold">Compare Player Cards</p>
                <div className="level">
                    <div className="level-item">
                        <SearchPlayers handlePlayer={handlePlayer} playerInfo="player1" />
                    </div>    
                    <div className="level-item">
                        <SearchPlayers handlePlayer={handlePlayer} playerInfo="player2" />
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
                    <div className="column ">
                        {renderView()}
                    </div>
                    <div className="column ">
                        Stat Numbers and difference
                    </div>
                </div>
            </div>
        </Layout>
    )
}