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
                    <td className="title is-size-7-mobile is-size-6-tablet is-marginless" onClick={() => router.push(`/updates/${date}`)} style={{ cursor: "pointer", width: "12%" }}>{date}</td>
                    <td className="is-size-7-mobile is-size-6-tablet has-text-weight-medium has-text-success">+{players.length}</td>
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
                <section className="hero is-bold">
                    <div className="hero-body" style={{ padding: "1.2rem" }}>
                        <div className="container">
                            <h1 className="title is-size-4">
                                MyTeam Card Updates
                            </h1>
                        </div>
                    </div>
                </section>

                <div className="table-container">
                    <table className="table">
                        <tbody>
                            {renderUpdates()}
                        </tbody>
                    </table>
                </div>
                <div className="box">
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