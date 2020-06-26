import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getDates, getPlayersByDate } from "../../lib/players";

import PlayersCardView from "../../components/playerscardview";
import Loader from "../../components/loader";

export default function UpdatePage({ date, players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />
    }

    return (
        <>
            <Head>
                <title>{`MyTeam Updates (${date}) | 2KDB`}</title>
                <meta name="description" content={`NBA 2K20 MyTeam Card Update (${date})`} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <div className="container">
			    <nav className="panel">
                    <p className="panel-heading mb-1">
                        MyTeam Update ({date})
                    </p>
				    <PlayersCardView players={players} />
			    </nav>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getDates()
                        .catch(console.error);

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const date = params.date;
    const players = await getPlayersByDate(date)
                            .catch(console.error)
    
    return {
        props: {
            date,
            players
        },
        unstable_revalidate: 1
    }
}