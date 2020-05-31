import React, { useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { getAllPlayersWithAllStats } from "../lib/players";

// const FilterSortBox = dynamic(import("../components/filtersortbox"));
const PlayersList = dynamic(import("../components/playerslist"));

export default function Players({ allPlayers }) {
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(15);
    const [players, setPlayers] = useState(allPlayers);
    const [sortedBy, setSortedBy] = useState({ name: "", asc: true, propName: "" });

    const handlePage = (dir) => {
        if (dir === "prev") {
            if (page > 0)
                setPage(page - 1);
        } else {
            setPage(page + 1);
        }
        
        fetchPlayers();
    }

    const fetchPlayers = async () => {
        const res = await fetch(`/api/players/pages/${page}`)
        const data = await res.json();

        for(let i = 0; i < res.length; i++) {
            delete data[i]["@metadata"];
        }

        setPlayers(data);
    }

    const handlePerPage = (amount) => setPerPage(amount);
    // const handleSorted = (prop) => {
    //     let propName = prop.toLowerCase().replace(/ /g, "_");
    //     setSortedBy({ ...sortedBy, name: prop, propName: propName })
    // }
    // const handleSortDirection = () => {
    //     let propName = sortedBy.propName;
    //     if (sortedBy.asc) {
    //         propName = "-" + propName;
    //     }
    //     setSortedBy({ ...sortedBy, asc: !sortedBy.asc })
    // }
    const handlePlayers = (players) => setPlayers(players)

    return (
        <>
            <Head>
                <title>NBA 2K20 MyTeam All Players List | 2KDB</title>
                <meta name="description" content="List of all players in NBA 2K20 MyTeam" />
            </Head>
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        {/* <FilterSortBox handleSorted={handleSorted} handleSortDirection={handleSortDirection} handlePerPage={handlePerPage} sortedBy={sortedBy} /> */}
                    </div>
                </div>
                <div className="box">
                    <div className="columns is-mobile is-gapless is-marginless">
                        <div className="column is-one-fifth-mobile is-2-tablet" style={{ cursor: "pointer"}} onClick={() => handleSorted("name")} >
                            <p className="has-text-weight-semibold"> Name </p>
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
                        <div className={`column is-2-tablet ${sortedBy == "" ? "is-hidden" : ""}`}>
                            <p className="has-text-weight-bold"> {sortedBy.name}</p>
                        </div>
                    </div>
                    <div className="divider is-right"></div>
                    <PlayersList players={players} perPage={perPage} page={page} />
                </div>

                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 1}>Previous</a>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={page * perPage >= allPlayers.length}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPlayers = await getAllPlayersWithAllStats();

    for(let i = 0; i < allPlayers.length; i++) {
        delete allPlayers[i]["@metadata"]
    }
    
    return {
        props: {
            allPlayers,
        },
        
    }
}