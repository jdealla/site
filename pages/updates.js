import React from "react";
import { useRouter } from "next/router";
import { getPlayersByDates, getUpdatesNames } from "../lib/players";

import UpdatesList from "../components/updateslist";
import Head from "next/head";

export default function Updates({ groupedByDate, updateNames }) {
    const router = useRouter();
	
    const findUpdateName = (date) => {
        let updateName = "";
        let nameObj = updateNames.find( x => x.date === date);
		
        if (nameObj) {  updateName = nameObj["update_name"];  }
		
        return updateName;
    }

    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [date, players] of Object.entries(groupedByDate)) {
			
            let dateObj = (
                <a href={`/updates/${date}`} className="panel-block" key={i++}>
				    <span className="tags  has-addons" style={{margin:0}}>
                        <span className="tag is-size-6 is-size-7-mobile">{date}</span>
                        <span className="tag is-size-6 is-size-7-mobile is-warning is-light">+ {players.length} cards</span>
                        <span className="tag is-size-6 is-size-7-mobile"> {findUpdateName(date)} </span>
					</span>
					<div style={{ marginLeft: "auto" }}>
					    <UpdatesList date={date} players={players} amount={10} />
					</div>
                </a>

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
                <nav className="panel">
                    <p className="panel-heading">
                        MyTeam Card Updates
                    </p>
                        {renderUpdates()}
                </nav>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const groupedByDate = await getPlayersByDates()
                                .catch(console.error);
	const updateNames = await getUpdatesNames();							
    
    return {
        props: {
            groupedByDate,
            updateNames
        },
        unstable_revalidate: 1
    }
}