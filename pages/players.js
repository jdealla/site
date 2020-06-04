import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { getAllPlayersWithAllStats, getAllProps, getAllAnimations } from "../lib/players";
import { formatName } from "../lib/helpers"

const FilterSortBox = dynamic(import("../components/filtersortbox"));
const PlayersList = dynamic(import("../components/playerslist"));

export default function Players({ allPlayers, allProps }) {
    const [page, setPage] = useState(0)
    const [players, setPlayers] = useState(allPlayers);
    const [searchOptions, setSearchOptions] = useState({ searchValue: "", direction: "", cat: "", filterProp: "", filterValue: "", sortProp: "", sortValue: "" })

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
        const { searchValue, cat, filterProp, filterValue, sortProp, sortValue} = searchOptions;

        let filtered = allPlayers.filter(player => player.info.name.toLowerCase().includes(searchValue));

        if (filterProp != "" && filterValue != "") {
            filtered = filtered.filter(player => player[cat][filterProp] === filterValue);
        } else if (sortProp != "" && sortValue != "") {
            filtered = filtered.sort((a, b) => {
                if (a[cat][sortProp][sortValue] > b[cat][sortProp][sortValue])
                    return -1;
                else if (a[cat][sortProp][sortValue] === b[cat][sortProp][sortValue]) {
                    if (a.info.overall > b.info.overall) {
                        return -1;
                    } else if (a.info.overall === b.info.overall) {
                        if (a.info.name > b.info.name)
                            return 1;
                        else return -1;
                    } else return 1;
                } else
                    return 1;        
            })
        }
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
                <div className="columns">
                    <div className="column is-full">
                    </div>
                </div>
                <div className="box">
                    <FilterSortBox allProps={allProps} searchOptions={searchOptions} handleOptions={handleOptions} />

                    <table className="table is-scrollable is-hoverable">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Overall</th>
                                <th>Position</th>
                                <th>Off Overall</th>
                                <th>Def Overall</th>
                                <th>Height</th>
                                <th>Badges</th>
                                <th className={searchOptions.sortProp == "" ? "is-hidden" : ""}>{formatName(searchOptions.sortValue)}</th>
                            </tr>
                        </thead>
                        <PlayersList players={players} page={page} searchOptions={searchOptions} />
                    </table>
                </div>

                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 0}>Previous</a>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={page * 15 >= allPlayers.length}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const allPlayers = await getAllPlayersWithAllStats();
    
    const allProps = getAllProps(allPlayers[0]);

    const allAnimations = getAllAnimations(allPlayers);

    console.log(allAnimations);
    return {
        props: {
            allPlayers,
            allProps
        },
        unstable_revalidate: 1
    }
}