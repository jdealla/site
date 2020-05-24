import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getUpdateDates, getPlayersByPropValue } from "../../lib/players";

import PlayersCardView from "../../components/playerscardview";
import Spinner from "../../components/spinner";

export default function UpdatePage({ date, players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner />
    }

    return (
        <>
            <Head>
                <title>{`MyTeam Updates (${date}) | 2KDB`}</title>
                <meta name="description" content={`NBA 2K20 MyTeam Card Update (${date})`} />
            </Head>
            <div className="container">
                <h1 className="title is-size-4" style={{ marginTop: "10px" }}>Roster Update ({players[0].date})</h1>
                <PlayersCardView players={players} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = getUpdateDates();

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const date = params.date;
    const players = getPlayersByPropValue("date", date);
    
    return {
        props: {
            date,
            players
        },
        unstable_revalidate: 1
    }
}