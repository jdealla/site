import Head from "next/head";
import { useState } from "react";
import { getAllPlayersData, sortPlayersByProp } from "../lib/players";

import Layout from "../components/layout";
import FilterSortBox from "../components/filtersortbox"
import PlayersList from "../components/playerslist"

const allPlayers = getAllPlayersData();

export default function Players() {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(20);
    const [players, setPlayers] = useState(allPlayers);

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

    const sortByCat = (cat) => {
        setPlayers(sortPlayersByProp(cat));
    }

    return (
        <Layout>
            <Head>
                <title>2KDB All Players List</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            </Head>
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        <FilterSortBox handlePlayers={handlePlayers} />
                    </div>
                </div>
                <div className="box">
                    <div className="columns is-mobile is-gapless is-marginless" style={{ cursor: "pointer"}}>
                        <div className="column is-one-fifth-mobile is-2-tablet" onClick={() => setPlayers(sortPlayersByProp("name"))} >
                            <div className="level">
                                <div className="level-left">
                                    <p className="has-text-weight-semibold"> Name </p>
                                    <span className="icon is-small">
                                        <i className="fas fa-sort-up"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" onClick={() => setPlayers(sortPlayersByProp("overall"))}>
                            <p className="has-text-weight-semibold "> Tier </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" onClick={() => setPlayers(sortPlayersByProp("overall"))}>
                            <p className="has-text-weight-semibold "> Overall </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" onClick={() => setPlayers(sortPlayersByProp("position"))}>
                            <p className="has-text-weight-semibold "> Position </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" onClick={() => setPlayers(sortPlayersByProp("height"))}>
                            <p className="has-text-weight-semibold "> Height </p>
                        </div>
                        <div className="column is-hidden-mobile is-1-tablet" onClick={() => setPlayers(sortPlayersByProp("weight"))}>
                            <p className="has-text-weight-semibold "> Weight </p>
                        </div>
                        <div className="column is-hidden-mobile is-2-tablet">
                            <p className="has-text-weight-semibold "> Badges </p>
                        </div>
                    </div>
                    <div className="divider is-right"></div>
                    <PlayersList players={players} perPage={perPage} page={page} />
                </div>

                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 1}>Previous</a>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={page * perPage >= players.length}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </Layout>
    )
}