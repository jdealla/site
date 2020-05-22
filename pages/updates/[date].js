import Head from "next/head";
import { useRouter } from "next/router";
import { getUpdateDates, getPlayersByPropValue } from "../../lib/players";

import Layout from "../../components/layout";
import PlayersCardView from "../../components/playerscardview";
import Spinner from "../../components/spinner";

export default function UpdatePage({ players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner />
    }

    return (
        <Layout>
            <Head>
                <title>{`MyTeam Update ${players[0].date} | 2KDB`}</title>
                <html lang="en"/>
                <meta name="description" content={`NBA 2K20 MyTeam Card Update [${players[0].date}]`} />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <h1 className="title is-size-4" style={{ marginTop: "10px" }}>Roster Update ({players[0].date})</h1>
                <PlayersCardView players={players} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getUpdateDates();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const players = await getPlayersByPropValue("date", params.date);

    return {
        props: {
            players
        }
    }
}