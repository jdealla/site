import Head from "next/head";
import { useRouter } from "next/router";
import { groupedPlayersByProp } from "../lib/players";

import Layout from "../components/layout";
import UpdatesList from "../components/updateslist";

export default function Updated({ groupedByDate }) {
    const router = useRouter();

    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [date, players] of Object.entries(groupedByDate)) {
            let dateObj = (
                <tr key={i++}>
                    <th className="title is-5" onClick={() => router.push(`/updates/${date}`)} style={{ cursor: "pointer" }}>{date}</th>
                    <td className="has-text-weight-medium has-text-success">+{players.length}</td>
                    <UpdatesList players={players} amount={10} />
                </tr>
            )
            updates.push(dateObj);
        }
        return updates;
    }

    return (
        <Layout>
            <Head>
                <title>NBA 2K20 MyTeam Updated Players | 2KDB</title>
                <html lang="en"/>
                <meta name="description" content="List of player cards updated in NBA 2K20 MyTeam" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <p className="title is-size-4">MyTeam Card Updates</p>
                <div className="box">
                    <table className="table">
                        <tbody>
                            {renderUpdates()}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    let groupedByDate = await groupedPlayersByProp("date");

    return {
        props: {
            groupedByDate
        }
    }
}