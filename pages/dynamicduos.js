import React from "react";
import Head from "next/head";
import { getAllDuos } from "../lib/duos";

export default function DynamicDuos({ players }) {
    return (
        <>
            <Head>
                <title>2KDB Dynamic Duos</title>
                <meta name="description" content="NBA 2K20 MyTeam Database Dynamic Duos page showing all dynamic duos" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className="box">

                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const players = await getAllDuos()
                          .catch(console.error)
  
    for(let i = 0; i < players.length; i++) {
      delete players[i]["@metadata"]
    }
  
    return {
      props: {
        players,
      },
      unstable_revalidate: 1
    }
}
  