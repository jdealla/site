import React, { useState } from "react";
import Head from "next/head";

import { getCollections } from "../lib/players";

export default function Collections({ collections }) {
    const [view, setView] = useState("20 Current");

    const renderCollection = () => {
        for(let [collection, themes] of Object.entries(collections)) {
            if (collection === view) {
                return themes.map((obj, i) => {
                    let name = obj.theme;
                    if (name.includes("Rewards") && !name.includes("Collector") && !name.includes("Prime") && 
                        !name.includes("Unlimited") && !name.includes("Spotlight")) {
                        name = name.replace("Rewards", "").trim();
                    } 
                    return (
                        <div className="column is-2-desktop is-3-mobile" key={i++}>
                            <figure className="image is-96x96">
                                <a className="title is-4" href={`/collection/${collection.toLowerCase().replace(/ /g, "-")}/theme/${obj.theme.toLowerCase().replace(/ /g, "-")}`}>
                                    <img src={`https://2kdbimg.com/96x96/icon_${name.toLowerCase().replace(/ /g, "_")}.png`} />
                                </a>
                            </figure>
                        </div>
                    )
                })
            }
        }
    }

    return (
        <>
            <Head>
                <title>NBA2K20 MyTeam Collections | 2KDB</title>
                <meta name="description" content="NBA 2K20 MyTeam collections page including every collection in the game" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
    let collections = await getCollections()
                            .catch(console.error);

    return {
        props: {
            collections
        },
        unstable_revalidate: 1
    }
}