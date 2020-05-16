import { getUpdateDates, getPlayersByPropValue } from "../../lib/players";
import Layout from "../../components/layout";
import PlayersLayout from "../../components/playerslayout";

export default function UpdatePage({ players }) {
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
    const paths = getUpdateDates();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const players = getPlayersByPropValue("date", params.date);

    return {
        props: {
            players
        }
    }
}