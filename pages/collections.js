import React, { useState } from "react";
import Head from "next/head";

import { getValuesFromProp } from "../lib/players";
import ImageCloud from "../components/imagecloud";

export default function Collections({ collections }) {
    const [view, setView] = useState("20 Current");

    const renderCollection = () => {
        let themes = [], i = 0;
        for(let c of collections) {
            if (c === view) {
                let groupedBy = players.reduce((h, obj) => Object.assign(h, { [obj["theme"]]: ( h[obj["theme"]] || [] ).concat(obj) }), {});

                let sorted = {};
                Object.keys(groupedBy).sort((a, b) => {
                    return a < b ? -1 : 1;
                }).forEach(key => {
                    sorted[key] = groupedBy[key];
                })
                
                for(let theme of Object.keys(sorted)) {
                    let name = theme;
                    if (theme.includes("Rewards") && !theme.includes("Collector") && !theme.includes("Prime") && !theme.includes("Unlimited") && !theme.includes("Spotlight")) {
                        name = theme.replace("Rewards", "").trim();
                    } 

                    let themeObj = (
                        <div className="column is-2-desktop is-3-mobile" key={i++}>
                            <figure className="image is-96x96">
                                <a className="title is-4" href={`/collection/${collection.toLowerCase().replace(/ /g, "-")}/theme/${theme.toLowerCase().replace(/ /g, "-")}`}>
                                    <ImageCloud src={`icons/icon_${name.toLowerCase().replace(/ /g, "_")}.png`} width="96" />
                                </a>
                            </figure>
                        </div>
                    )
                    themes.push(themeObj);
                }
            }
        }
        return themes;
    }

    return (
        <>
            <Head>
                <title>NBA2K20 MyTeam Collections | 2KDB</title>
                <meta name="description" content="NBA 2K20 MyTeam collections page including every collection in the game" />
            </Head>
            <div className="container">
                <div className="box">
                    <div className="columns">
                        <div className="column is-full ">
                            <div className="tabs is-boxed is-centered">
                                <ul>
                                    <li className={view === "20 Current" ? "is-active" : ""} onClick={() => setView("20 Current")}><a>'20 Current</a></li>
                                    <li className={view === "20 Current Series 2" ? "is-active" : ""} onClick={() => setView("20 Current Series 2")}><a>'20 Current Series 2</a></li>
                                    <li className={view === "Heat Check" ? "is-active" : ""} onClick={() => setView("Heat Check")}><a>Heat Check</a></li>
                                    <li className={view === "Moments" ? "is-active" : ""} onClick={() => setView("Moments")}><a>Moments</a></li>
                                    <li className={view === "Rewards" ? "is-active" : ""} onClick={() => setView("Rewards")}><a>Rewards</a></li>
                                    <li className={view === "Premium" ? "is-active" : ""} onClick={() => setView("Premium")}><a>Premium</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="column">
                        </div>
                    </div>
                    <div className="columns is-flex is-multiline">
                        {renderCollection()}
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    let collections = await getValuesFromProp("collection");

    return {
        props: {
            collections
        }
    }
}