import React from "react";
import { useRouter } from "next/router";
import { groupedPlayersByProp } from "../lib/players";

import UpdatesList from "../components/updateslist";
import Head from "next/head";

export default function Updated({ groupedByDate }) {
    const router = useRouter();

    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [date, players] of Object.entries(groupedByDate)) {
            let dateObj = (
                <tr key={i++}>
                    <td className="title is-5 is-marginless" onClick={() => router.push(`/updates/${date}`)} style={{ cursor: "pointer", width: "12%" }}>{date}</td>
                    <td className="has-text-weight-medium has-text-success">+{players.length}</td>
                    <UpdatesList date={date} players={players} amount={10} />
                </tr>
            )
            updates.push(dateObj);
        }
        return updates;
    }

    return (
        <>
            <Head>
                <title>NBA 2K20 MyTeam Updated Players | 2KDB</title>
                <meta name="description" content="List of player cards updated in NBA 2K20 MyTeam" />
            </Head>
            <div className="container">
                <p className="title is-size-4">MyTeam Card Updates</p>
                <div className="box">
                    <table className="table is-fullwidth is-scrollable-mobile">
                        <tbody>
                            {renderUpdates()}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    let groupedByDate = groupedPlayersByProp("date");

    return {
        props: {
            groupedByDate
        }
    }
}