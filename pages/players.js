import React from "react";
import Head from "next/head";
import { getAllPlayersWithAllStats, getAllAnimations } from "../lib/players";
import { getTotalNumOfBadges } from "../lib/helpers"

import Layout from "../components/layout";

export default function Players({ players, allAnimations }) {
    return (
        <Layout players={[]} searchOn={false}>
            <Head>
                <title>All Players List | 2KDB </title>
                <meta name="description" content="List of all players in NBA 2K20 MyTeam" key="description"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">

            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const players = await getAllPlayersWithAllStats().catch(console.error);

    players.sort((a, b) => {
        let aBadges = getTotalNumOfBadges(a);
        let bBadges = getTotalNumOfBadges(b);

        if (a.overall > b.overall) {
            return -1;
        } else if (a.overall === b.overall) {
            if (aBadges.hof > bBadges.hof) {
                return -1;
            } else if (aBadges.hof === bBadges.hof) {
                if (a.name > b.name)
                    return 1;
                else
                    return -1;
            }
        } else {
            return 1;
        }
    })

    const allAnimations = getAllAnimations(players);

    return {
        props: {
            players,
            allAnimations,
        }
    }
}