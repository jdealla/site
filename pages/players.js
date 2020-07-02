import React from "react";
import Head from "next/head";
import { getAllPlayersWithAllStats } from "../lib/players";

import Layout from "../components/layout";

export default function Players({ players }) {
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

    return {
        props: {
            players,
        }
    }
}