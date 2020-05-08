import { useState } from "react";
import { getPropNames, getPlayersData } from "../lib/players";

import Box from "./box";

const allPlayers = getPlayersData();

export default function FilterSortBox(props) {
    const { handlePlayers } = props;
    const [view, setView] = useState("stats");

    const getItemsByView = () => {
        switch(view) {
            case "stats": return getPropNames("stats");
            case "tendencies": return getPropNames("tendencies");
            case "badges": return getPropNames("badges");
            case "animations": return [];
        }
    }

    return (
        <div className="box">
            <div className="columns is-mobile">
                <div className="column is-full">
                    <div className="container">
                        <div className="field has-addons" style={{ justifyContent: "center" }}>
                            <p className="control">
                                <button className="button is-active">
                                    Sort
                                </button>
                            </p>
                            <p className="control">
                                <button className="button" >
                                    Filter
                                </button>
                            </p>
                        </div>
                        <div className="tabs is-boxed is-centered">
                            <ul>
                                <li className={view === "stats" ? "is-active" : ""} onClick={() => setView("stats")}><a>Stats</a></li>
                                <li className={view === "badges" ? "is-active" : ""} onClick={() => setView("badges")}><a>Badges</a></li>
                                <li className={view === "tendencies" ? "is-active" : ""} onClick={() => setView("tendencies")}><a>Tendencies</a></li>
                                <li className={view === "animations" ? "is-active" : ""} onClick={() => setView("animations")}><a>Signature/Animations</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-full">
                    <div className="container">
                        <div className="buttons">
                            {getItemsByView().map((item, i) => <button key={i} className="button">{item}</button>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}