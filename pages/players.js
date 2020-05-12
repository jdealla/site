import Head from "next/head";
import { useState, useEffect } from "react";
import { getPlayersByPage } from "../lib/players";

import Layout from "../components/layout";
import FilterSortBox from "../components/filtersortbox"
import PlayersList from "../components/playerslist"

export default function Players() {
    const [page, setPage] = useState(1)
    const [players, setPlayers] = useState(getPlayersByPage(1));

    const handlePlayers = (players) => setPlayers(players)
    const handlePage = (dir) => {
        if (dir === "prev") {
            if (page === 0) {
                // cant go back my boy
            } else {
                setPage(page - 1);
            }
        } else {
            setPage(page + 1);
        }
    }

    useEffect(() => {
        // slice(page) for filtered players 
        setPlayers(getPlayersByPage(page))
    }, [page])

    return (
        <Layout>
            <Head>
                <title>2KDB All Players List</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <FilterSortBox />
                    </div>
                </div>
                <div className="box">
                    <div className="columns is-mobile is-gapless is-marginless">
                        <div className="column is-one-fifth-mobile is-2-tablet">
                            <p className="has-text-weight-semibold "> Name </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet">
                            <p className="has-text-weight-semibold "> Tier </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet">
                            <p className="has-text-weight-semibold "> Overall </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet">
                            <p className="has-text-weight-semibold "> Position </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet">
                            <p className="has-text-weight-semibold "> Height </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet">
                            <p className="has-text-weight-semibold "> Weight </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-2-tablet">
                            <p className="has-text-weight-semibold "> Badges </p>
                        </div>
                    </div>
                    <div className="divider is-right"></div>
                    <PlayersList players={players} />
                </div>

                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 1}>Previous</a>
                            <a className="pagination-next" onClick={() => handlePage("next")}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </Layout>
    )
}