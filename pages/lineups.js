import React, { useState } from "react";
import Head from "next/head";
import { getAllPlayers } from "../lib/players";

import Layout from "../components/layout";
import LineupView from "../components/lineupview";

export default function Home({ players }) {
    const [lineup, setLineup] = useState({ 
        starters: { "1": null, "2": null, "3": null, "4": null, "5": null },
        bench: { "6": null, "7": null, "8": null, "9": null, "10": null, "11": null, "12": null, "13": null }
    })

    const handleLineup = (slot, playerNum, starting) => {
        let targetIndex = (playerNum != null) ? players.findIndex(player => player.id === playerNum) : null;
        
        if (starting) {
            setLineup({ ...lineup, starters: { ...lineup.starters, [slot]: players[targetIndex] } });
        } else {
            setLineup({ ...lineup, bench: { ...lineup.bench, [slot]: players[targetIndex] } });
        }
    }

    return (
        <Layout players={players} searchOn={true}>
            <Head>
                <title>2KDB Lineup Creator</title>
                <meta name="description" content="NBA 2K20 MyTeam Database Lineup Page" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <p className="title has-text-centered"> Lineup Builder </p>
            <div className="container">
                <LineupView players={players} lineup={lineup} handleLineup={handleLineup} />
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const players = await getAllPlayers().catch(console.error);

    return {
        props: {
        players,
        },
        unstable_revalidate: 300
    }
}