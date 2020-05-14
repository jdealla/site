import Layout from "../../components/layout";
import { getUpdateDates, getPlayersByDate } from "../../lib/players";
import UpdatedList from "../../components/updatedlist";

export default function UpdatePage({ players }) {
    return (
        <Layout>
            <div className="container">
                <p className="title is-size-5">{players[0].date}</p>
                <UpdatedList players={players} amount={players.length} />
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
    const players = getPlayersByDate(params.date);

    return {
        props: {
            players
        }
    }
}