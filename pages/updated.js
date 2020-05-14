import Head from "next/head";
import { useRouter } from "next/router";
import { groupedPlayersByDate } from "../lib/players";

import Layout from "../components/layout";
import UpdatedList from "../components/updatedlist";

export default function Updated({ groupedByDate }) {
    const router = useRouter();

    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [date, players] of Object.entries(groupedByDate)) {
            let dateObj = (
                <div className="notification" key={i++}>
                    <p className="title is-4" onClick={() => router.push(`/updates/${date}`)} >{date}</p>
                    <UpdatedList players={players} amount={10} />
                </div>
            )
            updates.push(dateObj);
        }
        return updates;
    }

    return (
        <Layout>
            <Head>
                <title>2KDB Updated Players</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <p className="title is-size-4"> MyTeam Card Updates</p>
                {renderUpdates()}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    let groupedByDate = groupedPlayersByDate();

    return {
        props: {
            groupedByDate
        }
    }
}