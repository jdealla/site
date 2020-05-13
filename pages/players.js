import Head from "next/head";
import { useState } from "react";
import { getPlayersData, sortPlayersByProp, formatName } from "../lib/players";

import Layout from "../components/layout";
import FilterSortBox from "../components/filtersortbox"
import PlayersList from "../components/playerslist"

export default function Players({ allPlayers }) {
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(20);
    const [players, setPlayers] = useState(allPlayers);
    const [sortedBy, setSortedBy] = useState("");

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
    const handlePerPage = (amount) => setPerPage(amount);
    const handleSorted = (prop) => {
        setSortedBy(prop)
        setPlayers(sortPlayersByProp(prop))
    }
    const handlePlayers = (players) => setPlayers(players)

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
                        <FilterSortBox handleSorted={handleSorted} sortedBy={sortedBy} />
                    </div>
                </div>
                <div className="box">
                    <div className="columns is-mobile is-gapless is-marginless">
                        <div className="column is-one-fifth-mobile is-2-tablet" style={{ cursor: "pointer"}} onClick={() => handleSorted("name")} >
                            <div className="level">
                                <div className="level-left">
                                    <p className="has-text-weight-semibold"> Name </p>
                                    <span className="icon is-small">
                                        <i className="fas fa-sort-up"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" style={{ cursor: "pointer"}} onClick={() => handleSorted("overall")}>
                            <p className="has-text-weight-semibold "> Tier </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" style={{ cursor: "pointer"}} onClick={() => handleSorted("overall")}>
                            <p className="has-text-weight-semibold "> Overall </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" style={{ cursor: "pointer"}} onClick={() => handleSorted("position")}>
                            <p className="has-text-weight-semibold "> Position </p>
                        </div>
                        <div className="column is-one-fifth-mobile is-1-tablet" style={{ cursor: "pointer"}} onClick={() => handleSorted("height")}>
                            <p className="has-text-weight-semibold "> Height </p>
                        </div>
                        <div className="column is-hidden-mobile is-1-tablet" style={{ cursor: "pointer"}} onClick={() => handleSorted("weight")}>
                            <p className="has-text-weight-semibold "> Weight </p>
                        </div>
                        {/* <div className="column is-hidden-mobile is-2-tablet">
                            <p className="has-text-weight-semibold "> Badges </p>
                        </div> */}
                        <div className={`column is-2-tablet ${sortedBy == "" ? "is-hidden" : ""}`}>
                            <p className="has-text-weight-bold"> {formatName(sortedBy)}</p>
                        </div>
                    </div>
                    <div className="divider is-right"></div>
                    <PlayersList players={players} perPage={perPage} page={page} sortedBy={sortedBy} />
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

export async function getStaticProps() {
    const allPlayers = getPlayersData();

    return {
        props: {
            allPlayers
        }
    }
}