import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAllPlayers } from "../../../lib/players";
import { getDates, getEvosByDate } from "../../../lib/evos";

import Layout from "../../../components/layout";
import PlayersCardView from "../../../components/playerscardview";
import Loader from "../../../components/updatesloader";

export default function UpdatePage({ date, allPlayers, players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />
    }

    return (
        <Layout players={players} searchOn={true}>
            <Head>
                <title>{`MyTeam Updates (${date}) | 2KDB`}</title>
                <meta name="description" content={`NBA 2K20 MyTeam Evolution Cards Update (${date})`} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <div className="container">
			    <nav className="panel">
                    <p className="panel-heading mb-1">
                        MyTeam Evolution Cards Update ({date})
                    </p>
				    <PlayersCardView players={allPlayers} evos={true} />
			    </nav>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getDates().catch(console.error);

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const date = params.date;
    const allPlayers = await getEvosByDate(date).catch(console.error)
    
    const players = await getAllPlayers().catch(console.error);

    return {
        props: {
            date,
            allPlayers,
            players
        },
        unstable_revalidate: 1
    }
}