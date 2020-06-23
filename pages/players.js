import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getAllPlayersWithAllStats } from "../lib/players";
import { formatName, getFilterTiers } from "../lib/helpers"

import FilterSortBox from "../components/filtersortbox";
import PlayersList from "../components/playerslist";

export default function Players({ allPlayers }) {
    const [page, setPage] = useState(0)
    const [players, setPlayers] = useState(allPlayers);
    const [searchOptions, setSearchOptions] = useState({ 
        searchValue: "", direction: "", filterOptions: { position: [], overall: [] }, sortProp: ""
    })

    const handlePage = (dir) => {
        if (dir === "prev") {
            if (page > 0)
                setPage(page - 1);
        } else {
            setPage(page + 1);
        }
    }

    const handleOptions = (options) => {
        setSearchOptions(options);
    }

    useEffect(() => {
        console.log(searchOptions);
        const { searchValue, filterOptions, sortProp} = searchOptions;

        let filtered = allPlayers

        if (filterOptions.overall.length > 0) {
            const tiers = getFilterTiers(filterOptions.overall);
            filtered = filtered.filter(player => {
                for(const tier of tiers) {
                    if (player.overall >= tier[0] && player.overall <= tier[1])
                        return true;
                }
            })
        }

        if (filterOptions.position.length > 0) {
            filtered = filtered.filter(player => {
                for(const value of filterOptions.position) {
                    if (player.position === value)
                        return true;
                }
            })
        }

        if (sortProp !== "") {
            filtered = filtered.sort((a, b) => {
                if (a[sortProp] > b[sortProp])
                    return -1;
                else if (a[sortProp] === b[sortProp]) {
                    if (a.overall > b.overall) {
                        return -1;
                    } else if (a.overall === b.overall) {
                        if (a.name > b.name)
                            return 1;
                        else
                            return -1;
                    } else {
                        return 1;
                    }
                }
            })
        }

        //filter by name value
        filtered = filtered.filter(player => player.name.toLowerCase().includes(searchValue));

        setPlayers(filtered);
    }, [searchOptions])

    return (
        <>
            <Head>
                <title>All Players List | 2KDB </title>
                <meta name="description" content="List of all players in NBA 2K20 MyTeam" key="description"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className="box">
                    <FilterSortBox searchOptions={searchOptions} handleOptions={handleOptions} />
                </div>
                <table className="table is-scrollable is-hoverable is-bordered is-striped" style={{ marginTop: "5px"}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Overall</th>
                            <th>Position</th>
                            <th>Off Overall</th>
                            <th>Def Overall</th>
                            <th>Height</th>
                            {/* <th>Badges</th>
                            <th>Collection</th>
                            <th>Theme</th>
                            <th>Team</th> */}
                            <th className={searchOptions.sortProp === "" ? "is-hidden" : "players-sort-column"}>{formatName(searchOptions.sortProp)}</th>
                        </tr>
                    </thead>
                    <PlayersList players={players.slice(page * 15, (page * 15) + 15)} page={page} searchOptions={searchOptions} />
                </table>

                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 0}>Previous</a>
                            <ul className="pagination-list">
                                <li><p className="pagination-link" aria-label="total-players">Total Players: {players.length}</p></li>
                            </ul>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={page * 15 >= players.length}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPlayers = await getAllPlayersWithAllStats()
                            .catch(console.error);

    return {
        props: {
            allPlayers
        }
    }
}