import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { formatName, getThemes, getPlayersByPropValue } from "../../../../lib/players";

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
    const paths = getThemes();

    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {
    const collection = params.name;
    const theme = params.themeName;
    let nameArray = theme.split("-");
    let formatted = "";

    if (nameArray.length === 1) {
        if (nameArray[0] === "goat")
            formatted = nameArray[0].toUpperCase();
        else
            formatted = nameArray[0].charAt(0).toUpperCase() + nameArray[0].substring(1);
    } else {
        formatted = nameArray.map(word => {
            let result = "";
            if (word === "2k20" || word === "mtu")
                result = word.toUpperCase();
            else
                result = word.charAt(0).toUpperCase() + word.substring(1);

            return result 
        }).join(" ");
    }

    const groupedBy = getPlayersByPropValue("theme", formatted);
    let players = groupedBy.filter(player => player.collection.toLowerCase().replace(/ /g, "-") === collection);
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