import { useRouter } from "next/router";
import { getUpdateDates, getPlayersByPropValue } from "../../lib/players";

import Layout from "../../components/layout";
import PlayersLayout from "../../components/playerslayout";
import Spinner from "../../components/spinner";

export default function UpdatePage({ players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner />
    }

    return (
        <Layout>
            <div className="container">
                <h1 className="title is-size-4" style={{ marginTop: "10px" }}>Roster Update ({players[0].date})</h1>
                <PlayersLayout players={players} />
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