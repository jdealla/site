import React, { useState } from "react";
import Head from "next/head";
import { getAllEvos } from "../lib/evos";

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
            </div>
        </>
    )
}

export async function getStaticProps() {
    const players = await getAllEvos()
                          .catch(console.error)
    
    return {
      props: {
        players,
      },
      unstable_revalidate: 1
    }
}