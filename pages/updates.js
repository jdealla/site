import React from "react";
import { useRouter } from "next/router";
import { getPlayersByDates } from "../lib/players";

import UpdatesList from "../components/updateslist";
import Head from "next/head";

export default function Updates({ groupedByDate }) {
    const router = useRouter();

    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [date, players] of Object.entries(groupedByDate)) {
            players.sort((a, b) => (a.overall > b.overall) ? 1 : (a.overall === b.overall) ? ((a.name > b.name) ? 1 : -1) : -1 )

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
                <meta name="description" content="List of player cards updated in NBA 2K20 MyTeam" key="updates" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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

                <div className="box">
                    <div className="table-container">
                        <table className="table">
                            <tbody>
                                {renderUpdates()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const groupedByDate = await getPlayersByDates();
    
    return {
        props: {
            groupedByDate
        },
        unstable_revalidate: 1
    }
}