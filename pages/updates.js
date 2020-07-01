import React from "react";
import Head from "next/head";
import { getPlayersByDates, getUpdatesNames, getAllPlayers } from "../lib/players";
import { getDuoUpdates } from "../lib/duos";

import UpdatesList from "../components/updateslist";
import Layout from "../components/layout";

export default function Updates({ groupedByDate, updateNames, duoUpdates, players }) {
    const findUpdateName = (date) => {
        let updateName = "";
        let nameObj = updateNames.find( x => x.date === date);
		
        if (nameObj) {  updateName = nameObj["update_name"];  }
		
        return updateName;
    }

    const renderUpdates = () => {
        let updates = [];
        for(let [date, players] of Object.entries(groupedByDate)) {
            let dateObj = (
                <div className="panel-block" key={date + "_players"}>
                    <a href={`/updates/${date}`}>
                        <span className="tags has-addons" style={{ margin: 0 }}>
                            <span className="tag is-size-6 is-size-7-mobile">{date}</span>
                            <span className="tag is-size-6 is-size-7-mobile is-warning is-light">+ {players.length} cards</span>
                            <span className="tag is-size-6 is-size-7-mobile"> {findUpdateName(date)} </span>
                        </span>
                    </a>
                    <p className="is-hidden-mobile" style={{ marginLeft: "auto" }}>
                        <UpdatesList date={date} players={players} amount={10} />
                    </p>
                </div>
            )
            updates.push(dateObj);
        }

        for(let [date, players] of Object.entries(duoUpdates)) {
            let dateObj = (
                <div className="panel-block" key={date + "_duos"}>
                    <a href={`/updates/duos/${date}`}>
                        <span className="tags has-addons" style={{ margin: 0 }}>
                            <span className="tag is-size-6 is-size-7-mobile">{date}</span>
                            <span className="tag is-size-6 is-size-7-mobile is-warning is-light">+ {players.length} cards</span>
                            <span className="tag is-size-6 is-size-7-mobile"> Dynamic Duo Update </span>
                        </span>
                    </a>
                    <p className="is-hidden-mobile" style={{ marginLeft: "auto" }}>
                        {/* <DuosCardView date={date} players={players} amount={10} /> */}
                    </p>
                </div>
            )
            updates.push(dateObj);
        }

        updates.sort((a, b) => {
            let dateA = a.key.split("_")[0];
            let dateB = b.key.split("_")[0];

            if (dateA > dateB) 
                return -1;
            else if (dateA === dateB) 
                return 0;
            else 
                return 1;
        })
        return updates;
    }

    return (
        <Layout players={players} searchOn={true}>
            <Head>
                <title>NBA 2K20 MyTeam Updated Players | 2KDB</title>
                <meta name="description" content="List of player cards updated in NBA 2K20 MyTeam" key="updates" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <nav className="panel">
                    <p className="panel-heading">
                        MyTeam Card Updates
                    </p>
                    {renderUpdates()}
                </nav>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const groupedByDate = await getPlayersByDates().catch(console.error);

    const updateNames = await getUpdatesNames().catch(console.error);						
    
    const players = await getAllPlayers().catch(console.error);

    const duoUpdates = await getDuoUpdates().catch(console.error);

    return {
        props: {
            groupedByDate,
            updateNames,
            duoUpdates,
            players
        },
        unstable_revalidate: 1
    }
}