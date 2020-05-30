import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getDates, getPlayersByDate } from "../../lib/players";

import PlayersCardView from "../../components/playerscardview";
import Spinner from "../../components/spinner";

export default function UpdatePage({ date, players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Head>
                <title>{`MyTeam Updates (${date}) | 2KDB`}</title>
                <meta name="description" content={`NBA 2K20 MyTeam Card Update (${date})`} />
            </Head>
            <div className="container">
                <section className="hero is-bold">
                    <div className="hero-body" style={{ padding: "1.2rem" }}>
                        <div className="container">
                            <h1 className="title is-size-4">
                                MyTeam Update ({date})
                            </h1>
                        </div>
                    </div>
                </section>
                <PlayersCardView players={players} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getDates();

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const date = params.date;
    const players = await getPlayersByDate(date);
    
    return {
        props: {
            date,
            players
        },
        unstable_revalidate: 1
    }
}