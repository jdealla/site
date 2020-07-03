import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getAllPlayersWithAllStats, getAllAnimations } from "../lib/players";
import { getFilterTiers, getTotalNumOfBadges } from "../lib/helpers"

import FilterSortBox from "../components/filtersortbox";
import PlayersList from "../components/playerslist";
import Layout from "../components/layout";


export default function Players({ players, allAnimations }) {
    const [update, setUpdate] = useState([]);
    const [allPlayers, setAllPlayers] = useState(players);
    const [searchOptions, setSearchOptions] = useState({ 
        searchValue: "", filterOptions: { position: [], overall: [], badges: [], animations: [] }, sortProp: "", asc: false, page: 0, perPage: 15,
        evos: false, duos: false
    })

    const handlePage = (dir) => {
        if (dir === "prev") {
            if (searchOptions.page > 0)
                setSearchOptions({ ...searchOptions, page: searchOptions.page - 1 });
        } else {
            setSearchOptions({ ...searchOptions, page: searchOptions.page + 1 });
        }
    }

    const handleOptions = (options) => setSearchOptions(options);
    
    useEffect(() => {
        const { searchValue, filterOptions, sortProp, asc, evos, duos } = searchOptions;

        let filtered = update.length === 0 ? players : update

        if (duos) {
            filtered = filtered.filter(player => player.is_duo === "True");
        }

        if (evos) {
            filtered = filtered.filter(player => player.is_evo === "True");
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
                
                    if (player[cat] === value) 
                        check.push(true);
                }

                if (check.includes(true))
                    return true;
            })
        }

        let sorted = filtered;
        filtered = sorted.sort((a, b) => {
            let aBadges = getTotalNumOfBadges(a);
            let bBadges = getTotalNumOfBadges(b);
            let aCompare = aBadges.hof;
            let bCompare = bBadges.hof;

            if (sortProp !== "") {
                aCompare = a[sortProp];
                bCompare = b[sortProp];
            }

            if (sortProp === "totalBadges") {
                aCompare = aBadges.bronze + aBadges.silver + aBadges.gold + aBadges.hof;
                bCompare = bBadges.bronze + bBadges.silver + bBadges.gold + bBadges.hof;
            } else if (sortProp === "wingspan") {
                let aWingspan = a[sortProp].replace(/\"/g, "").split("'");
                let bWingspan = b[sortProp].replace(/\"/g, "").split("'");
                aCompare = Number(aWingspan[0] * 12) + Number(aWingspan[1]);
                bCompare = Number(bWingspan[0] * 12) + Number(bWingspan[1]);
            }
            
            if (sortProp === "") {
                if (a.overall > b.overall) {
                    return -1;
                } else if (a.overall === b.overall) {
                    if (aBadges.hof > bBadges.hof) {
                        return -1;
                    } else if (aBadges.hof === bBadges.hof) {
                        if (a.name > b.name)
                            return 1;
                        else
                            return -1;
                    }
                } else {
                    return 1;
                }
            } else {
                if (aCompare > bCompare)
                    return asc ? 1 : -1;
                else if (aCompare === bCompare) {
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
            }
        })

        filtered = filtered.filter(player => player.name.toLowerCase().includes(searchValue));

        setAllPlayers(filtered);
    }, [searchOptions])

    return (
        <Layout players={[]} searchOn={false}>
            <Head>
                <title>All Players List | 2KDB </title>
                <meta name="description" content="List of all players in NBA 2K20 MyTeam" key="description"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className="box">
                    <FilterSortBox allAnimations={allAnimations} searchOptions={searchOptions} handleOptions={handleOptions} />
                </div>
                <PlayersList players={allPlayers.slice(searchOptions.page * searchOptions.perPage, (searchOptions.page * searchOptions.perPage) + searchOptions.perPage)} searchOptions={searchOptions} />
                <div className="columns">
                    <div className="column is-full">
                        <nav className="pagination is-centered" role="navigation" aria-label="pagination">
                            <a className="pagination-previous" onClick={() => handlePage("prev")} disabled={searchOptions.page <= 0}>Previous</a>
                            <ul className="pagination-list">
                                {/* <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                                <li><a className="pagination-link" aria-label="Goto page 2">2</a></li>
                                <li><a className="pagination-link is-current" aria-label="Page 3">3</a></li>
                                <li><span className="pagination-ellipsis">&hellip;</span></li>
                                <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                                <li><a className="pagination-link" aria-label="Goto page 86">86</a></li> */}
                                <li><p className="pagination-link" aria-label="total-players">Total Players: {allPlayers.length}</p></li>
                            </ul>
                            <a className="pagination-next" onClick={() => handlePage("next")} disabled={searchOptions.page * searchOptions.perPage > (allPlayers.length - searchOptions.page * searchOptions.perPage)}>Next page</a>
                        </nav>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const players = await getAllPlayersWithAllStats().catch(console.error);

    players.sort((a, b) => {
        let aBadges = getTotalNumOfBadges(a);
        let bBadges = getTotalNumOfBadges(b);

        if (a.overall > b.overall) {
            return -1;
        } else if (a.overall === b.overall) {
            if (aBadges.hof > bBadges.hof) {
                return -1;
            } else if (aBadges.hof === bBadges.hof) {
                if (a.name > b.name)
                    return 1;
                else
                    return -1;
            }
        } else {
            return 1;
        }
    })

    const allAnimations = getAllAnimations(players);

    return {
        props: {
            players,
            allAnimations,
        }
    }
}