import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getThemes, getPlayersByTheme } from "../../../../lib/players";

import PlayersCardView from "../../../../components/playerscardview";
import Spinner from "../../../../components/spinner";

export default function Collection({ collection, theme, players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner />
    }

    return (
        <>
            <Head>
                <title>{`NBA 2K20 MyTeam ${theme} collection | 2KDB`}</title>
                <meta name="description" content={`NBA 2K20 MyTeam Theme Collection ${theme}`} />
            </Head>
            <div className="container">
                <p className="title is-size-5">{collection} / {theme}</p>
                <PlayersCardView players={players} />
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const paths = await getThemes();

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const collection = params.name;
    const theme = params.themeName;

    const players = await getPlayersByTheme(theme, collection);
    
    players.sort((a, b) => a.overall > b.overall ? -1 : 1);

    return {
        props: {
            collection,
            theme,
            players
        },
        unstable_revalidate: 1
    }
}