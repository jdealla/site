import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getAllPlayersWithAllStats, getAllAnimations } from "../lib/players";
import { getFilterTiers } from "../lib/helpers"
import useSWR, { mutate } from "swr";

import FilterSortBox from "../components/filtersortbox";
import PlayersList from "../components/playerslist";

const fetcher = url => fetch(url).then(r => r.json())

export default function Players({ allPlayers, allAnimations }) {
    const { data: total } = useSWR("/api/totalplayers", fetcher);
    const { data: updatedPlayers } = useSWR(total.totalResults > allPlayers.length ? "/api/addplayers" : null, fetcher);
    const [page, setPage] = useState(0)
    const [players, setPlayers] = useState(allPlayers);
    const [searchOptions, setSearchOptions] = useState({ 
        searchValue: "", filterOptions: { position: [], overall: [], badges: [], animations: [] }, sortProp: "", asc: false, perPage: 15,
        evos: false, duos: false
    })

    const handlePage = (dir) => {
        if (dir === "prev") {
            if (page > 0)
                setPage(page - 1);
        } else {
            setPage(page + 1);
        }
    }

    const handleOptions = (options) => setSearchOptions(options);

    useEffect(() => {
        if (updatedPlayers) {
            setPlayers([...allPlayers, ...updatedPlayers]);
        }
    }, [total])

    useEffect(() => {
        const { searchValue, filterOptions, sortProp, asc, evos, duos } = searchOptions;

        let filtered = allPlayers

        if (duos) {
            filtered = filtered.filter(player => player.is_duo);
        }

        if (evos) {
            filtered = filtered.filter(player => player.is_evo);
        }

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

        if (filterOptions.badges.length > 0) {
            filtered = filtered.filter(player => {
                let check = [];
                for(let badge of filterOptions.badges) {
                    let temp = badge.split("-");
                    let [name, level] = temp;
                    
                    if (player[name] == level)
                        check.push(true);
                    else
                        check.push(false);
                }

                if (!check.includes(false))
                    return true;
            })
        }

        if (filterOptions.animations.length > 0) {
            filtered = filtered.filter(player => {
                let check = [];
                for(let animation of filterOptions.animations) {
                    let temp = animation.split("-");
                    let [cat, value] = temp;
                    
                    if (player[cat] === value || (cat === "size_up_packages" && player["size-up_packages"] === value)) 
                        check.push(true);
                }

                if (check.includes(true))
                    return true;
            })
        }

        if (sortProp !== "") {
            filtered = filtered.sort((a, b) => {
                if (a[sortProp] > b[sortProp])
                    return asc ? 1: -1;
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
                } else {
                    return asc ? -1 : 1;
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
                    <FilterSortBox allAnimations={allAnimations} searchOptions={searchOptions} handleOptions={handleOptions} />
                </div>
                <PlayersList players={players.slice(page * searchOptions.perPage, (page * searchOptions.perPage) + searchOptions.perPage)} searchOptions={searchOptions} />
                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={page <= 0}>Previous</a>
                            <ul className="pagination-list">
                                <li><p className="pagination-link" aria-label="total-players">Total Players: {players.length}</p></li>
                            </ul>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={page * searchOptions.perPage >= players.length}>Next page</a>
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

    const allAnimations = getAllAnimations(allPlayers);

    return {
        props: {
            allPlayers,
            allAnimations
        }
    }
}