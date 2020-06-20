import React, { useState } from "react";
import Head from "next/head";
import { getAllEvos } from "../lib/evos";
import { getPlayerName } from "../lib/players";

import EvosCardView from "../components/evoscardview";

export default function Evolutions({ players }) {
    const [page, setPage] = useState(0);

    const handlePage = (dir) => {
        if (dir === "prev") {
            if (page > 0)
                setPage(page - 1);
        } else {
            setPage(page + 1);
        }
    }

    return (
        <>
            <Head>
                <title>2KDB All Evolution Cards</title>
                <meta name="description" content="NBA 2K20 MyTeam Database page showing all evolution cards" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <EvosCardView players={players} page={page} handlePage={handlePage} />

                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 0}>Previous</a>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={page * 18 >= players.length}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allEvos = await getAllEvos()
                          .catch(console.error)

    let res = allEvos.map(async player => {
        let name = await getPlayerName(player.pid);
        return { ...player, name }
    })

    let resolved = await Promise.all(res);
  
    let players = resolved.reduce((h, obj) => Object.assign(h, { [obj["name"]]: ( h[obj["pid"]] || [] ).concat({ pid: obj["pid"], evo_num: obj["evo_num"] }) }), {})

    return {
      props: {
        players,
      },
      unstable_revalidate: 1
    }
}