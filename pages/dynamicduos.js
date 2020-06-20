import React from "react";
import Head from "next/head";
import { getAllDuos } from "../lib/duos";
import { getPlayerName } from "../lib/players";

import DuosCardView from "../components/duoscardview"

export default function DynamicDuos({ players }) {
    return (
        <>
            <Head>
                <title>2KDB Dynamic Duos</title>
                <meta name="description" content="NBA 2K20 MyTeam Database Dynamic Duos page showing all dynamic duos" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <DuosCardView players={players} />
            </div>
        </>
    )
}

export async function getStaticProps() {
    const res = await getAllDuos()
                          .catch(console.error)
  
    for(let i = 0; i < res.length - 1; i++) {
        for(let j = i + 1; j < res.length; j++) {
            if (res[i]["id1"] === res[j]["id2"]) {
                res.splice(j, 1);
            }
        }
    }

    let promises = res.map(async player => {
        let name1 = await getPlayerName(player.id1);
        let name2 = await getPlayerName(player.id2);
        return { ...player, name1, name2 }
    })

    let players = await Promise.all(promises);

    return {
      props: {
        players,
      },
      unstable_revalidate: 1
    }
}
  