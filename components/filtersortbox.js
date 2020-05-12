import { useState } from "react";
import { getPropNames, getPlayersData, sortPlayersByProp, } from "../lib/players";

const allPlayers = getPlayersData();

export default function FilterSortBox(props) {
    const { handlePlayers } = props;
    const [view, setView] = useState("sort");

    const getItemsByProp = (prop) => {
        switch(prop) {
            case "stats": return getPropNames("stats");
            case "tendencies": return getPropNames("tendencies");
            case "badges": return getPropNames("badges");
            case "animations": return getPropNames("sigs");
        }
    }

    const renderDropdownItems = (prop) => {
        let items = getItemsByProp(prop).map((item, i) => {
            return (
                <a key={i} className="dropdown-item">
                    {item}
                </a>
            )
        })

        return (
            <>
                <div className="column is-half">
                    {items.slice(0, items.length / 2)}
                </div>
                <div className="column is-half">
                    {items.slice(items.length / 2 + 1)}
                </div>
            </>
        )
    }

    return (
        <div className="box">
            <div className="columns is-mobile">
                <div className="column is-half">
                    <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span>Sort By Stats</span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                            <div className="dropdown-content">
                                <div className="container is-scrollable">
                                    <div className="columns">
                                        {renderDropdownItems("stats")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span>Sort By Tendencies</span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                            <div className="dropdown-content">
                                <div className="container is-scrollable">
                                    <div className="columns">
                                        {renderDropdownItems("tendencies")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                                <span>Sort By Animations</span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu2" role="menu">
                            <div className="dropdown-content">
                                <div className="container is-scrollable">
                                    <div className="columns">
                                        {renderDropdownItems("animations")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="column has-text-right">
                    <button className="button">Asc</button>
                    <button className="button">Desc</button>
                </div>
            </div>
        </div>
    )
}