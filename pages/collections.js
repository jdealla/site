import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";
import { groupedPlayersByProp } from "../lib/players";

import Layout from "../components/layout";
const UpdatedList = dynamic(import("../components/updateslist"));

export default function Collections({ groupedByCollection }) {
    const [view, setView] = useState("20current");

    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [collection, players] of Object.entries(groupedByCollection)) {
            let collectionObj = (
                <div className="notification" key={i++}>
                    <a className="title is-4" href={`/collection/${collection.toLowerCase().replace(/ /g, "-")}`}>
                        {collection}
                    </a>
                    <UpdatedList players={players} amount={10} />
                </div>
            )
            updates.push(collectionObj);
        }
        return updates;
    }

    const renderMenu = () => {
        return (
            <aside className="menu">
                <p className="menu-label">
                    NBA 2K20 Collections Menu
                </p>
                <ul className="menu-list">
                    <li><a onClick={() => setView("20current")}>'20 Current</a></li>
                    <li><a onClick={() => setView("20current2")}>'20 Current Series 2</a></li>
                    <li><a onClick={() => setView("heatcheck")}>Heat Check</a></li>
                    <li><a onClick={() => setView("moments")}>Moments</a></li>
                    <li><a onClick={() => setView("rewards")}>Rewards</a></li>
                    <li><a onClick={() => setView("premium")}>Premium</a></li>
                </ul>
            </aside>
        )
    }

    const renderView = () => {
        switch(view) {
            case "20current": {

            }
            case "20current2": {

            }
            case "heatcheck": {

            }
            case "moments": {

            }
            case "rewards": {

            }
            case "premium": {

            }
        }
    }

    return (
        <Layout>
            <Head>
                <title>NBA2K20 MyTeam Collections | 2KDB</title>
                <html lang="en"/>
                <meta name="description" content="NBA 2K20 MyTeam collections page including every collection in the game" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className="box">
                    <div className="columns is-multiline">
                        <div className="column is-3-desktop">
                            {renderMenu()}
                        </div>
                        <div className="column">
                            {renderView()}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    let groupedByCollection = groupedPlayersByProp("collection");

    return {
        props: {
            groupedByCollection
        }
    }
}