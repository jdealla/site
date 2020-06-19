import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { getAllPlayersWithAllStats, getAllProps, getAllAnimations } from "../lib/players";
import { formatName } from "../lib/helpers"

const FilterSortBox = dynamic(import("../components/filtersortbox"));
const PlayersList = dynamic(import("../components/playerslist"));

export default function Players({ allPlayers, allProps, allAnimations }) {
    const [page, setPage] = useState(0)
    const [players, setPlayers] = useState(allPlayers);
    const [searchOptions, setSearchOptions] = useState({ searchValue: "", direction: "", cat: "", innerCat: "", filterProp: "", filterValue: "", sortProp: "", sortValue: "" })

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
        const { searchValue, cat, innerCat, filterProp, filterValue, sortProp, sortValue} = searchOptions;

        let filtered = allPlayers.filter(player => player.info.name.toLowerCase().includes(searchValue));

        if (cat === "info" && filterProp === "overall" ) {
            filtered = filtered.filter(player => {
                let tierStart = 0;
                let tierEnd = 0;
                switch(filterValue) {
                    case "bronze": tierStart = 68; tierEnd = 69; break;
                    case "silver": tierStart = 70; tierEnd = 75; break;
                    case "gold": tierStart = 76; tierEnd = 79; break;
                    case "emerald": tierStart = 80; tierEnd = 83; break;
                    case "sapphire": tierStart = 84; tierEnd = 86; break;
                    case "ruby": tierStart = 87; tierEnd = 89; break;
                    case "amethyst": tierStart = 90; tierEnd = 92; break;
                    case "diamond": tierStart = 93; tierEnd = 95; break;
                    case "pink diamond": tierStart = 96; tierEnd = 98; break;
                    case "galaxy opal": tierStart = tierEnd = 99; break;
                }
                return (player.info.overall >= tierStart) && (player.info.overall <= tierEnd);
            })
        } else if (filterProp != "" && filterValue != "") {
            if (innerCat != "") {
                filtered = filtered.filter(player => player[cat][innerCat][filterProp] === filterValue)
            } else {
                filtered = filtered.filter(player => player[cat][filterProp] === filterValue);
            }
        }

        if (sortProp != "" && sortValue != "") {
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
                <div className="box">
                    <FilterSortBox allProps={allProps} allAnimations={allAnimations} searchOptions={searchOptions} handleOptions={handleOptions} />
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
                            <th>Badges</th>
                            <th className={searchOptions.sortProp == "" ? "is-hidden" : "players-sort-column"}>{formatName(searchOptions.sortValue)}</th>
                        </tr>
                    </thead>
                    <PlayersList players={players} page={page} searchOptions={searchOptions} />
                </table>

                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 0}>Previous</a>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={page * 15 >= players.length}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    console.time("allPlayersStats");

    const allPlayers = await getAllPlayersWithAllStats()
                            .catch(console.error);
    
    console.timeEnd("allPlayersStats");

    const allProps = getAllProps(allPlayers[0]);

    const allAnimations = getAllAnimations(allPlayers);

    return {
        props: {
            allPlayers,
            allProps,
            allAnimations
        },
        unstable_revalidate: 1
    }
}