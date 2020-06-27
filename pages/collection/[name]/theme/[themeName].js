import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getThemes, getPlayersByTheme, getAllPlayers } from "../../../../lib/players";

import PlayersCardView from "../../../../components/playerscardview";
import Loader from "../../../../components/loader";

export default function Collection({ collection, theme, allPlayers }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Loader />
    }

    const formatThemeName = (name) => {
        let formatted = name.split("-").map(word => {
            if (word.includes("ii"))
                return word.toUpperCase();

            return word.charAt(0).toUpperCase() + word.slice(1)
        }).join(" ")

        return formatted;
    }

    return (
        <>
            <Head>
                <title>{`NBA 2K20 MyTeam ${theme} collection | 2KDB`}</title>
                <meta name="description" content={`NBA 2K20 MyTeam Theme Collection ${theme}`} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
            </Head>
            <div className="container">
			    <nav className="panel">
                    <p className="panel-heading mb-1">
                        {collection.charAt(0).toUpperCase() + collection.slice(1)} / {formatThemeName(theme)}
                    </p>
				    <PlayersCardView players={allPlayers} />
			    </nav>        
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

    const allPlayers = await getPlayersByTheme(theme);

    const players = await getAllPlayers()
                            .catch(console.error);
    return {
        props: {
            collection,
            theme,
            allPlayers,
            players
        },
        unstable_revalidate: 10
    }
}