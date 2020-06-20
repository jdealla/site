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
    const players = await getAllDuos()
                          .catch(console.error)
  
    return {
      props: {
        players,
      },
      unstable_revalidate: 1
    }
}
  