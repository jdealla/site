import Head from "next/head";
import { useRouter } from "next/router";
import { getThemes, getPlayersByPropValue } from "../../../../lib/players";

import Layout from "../../../../components/layout";
import UpdatesList from "../../../../components/updateslist";
import Spinner from "../../../../components/spinner";

export default function Collection({ players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner />
    }

    return (
        <Layout>
            <Head>
                <title>NBA 2K20 MyTeam Theme Collection Page</title>
                <html lang="en"/>
                <meta name="description" content={`NBA 2K20 MyTeam Theme Collection ${players[0].theme}`} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <p className="title is-size-5">{players[0].theme}</p>
                <UpdatesList players={players} amount={players.length} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getThemes();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let nameArray = params.themeName.split("-");
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

    const players = await getPlayersByPropValue("theme", formatted);

    return {
        props: {
            players
        }
    }
}