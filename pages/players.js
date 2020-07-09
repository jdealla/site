import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getAllPlayersWithAllStats, getAllAnimations } from "../lib/players";
import { getFilterTiers, getTotalNumOfBadges, getTotalStats } from "../lib/helpers"

import FilterSortBox from "../components/filtersortbox";
import PlayersList from "../components/playerslist";
import Layout from "../components/layout";

export default function Players({ players, allAnimations }) {
    const [allPlayers, setAllPlayers] = useState(players);
    const [searchOptions, setSearchOptions] = useState({ 
        searchValue: "", filterOptions: { position: [], overall: [], badges: [], animations: [], teams: [], colleges: [], themes: [] }, sortOptions: [], asc: false, 
        page: 0, perPage: 15, evos: false, duos: false, secondary: false, exclusive: false
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
        const { searchValue, filterOptions, sortOptions, asc, evos, duos } = searchOptions;

        let filtered = players

        filtered = filtered.filter(player => {
            let checked = [];

            if (duos) checked.push(player.is_duo === "True" ? true : false);
            if (evos) checked.push(player.is_evo === "True" ? true : false);

            if (filterOptions.overall.length > 0) {
                let tierCheck = [];
                const tiers = getFilterTiers(filterOptions.overall);
                for(const tier of tiers) {
                    if (player.overall >= tier[0] && player.overall <= tier[1])
                        tierCheck.push(true);
                }

                if(tierCheck.includes(true))
                    checked.push(true);
                else
                    checked.push(false);
            }

            if (filterOptions.position.length > 0) {
                for(const value of filterOptions.position) {
                    if (player.position === value || (filterOptions.secondary && (player.secondary_position === value)))
                        checked.push(true);
                    else
                        checked.push(false);
                }
            }

            if (filterOptions.badges.length > 0) {
                let badgeCheck = [];
                for(let badge of filterOptions.badges) {
                    let temp = badge.split("-");
                    let [name, level] = temp;
                    
                    if (player[name] == level)
                        badgeCheck.push(true);
                    else
                        badgeCheck.push(false);
                }

                if (!badgeCheck.includes(false))
                    checked.push(true);
                else
                    checked.push(false);
            }

            if (filterOptions.animations.length > 0) {
                let aniCheck = [];
                for(let animation of filterOptions.animations) {
                    let temp = animation.split("-");
                    let [cat, value] = temp;
                
                    if (player[cat] === value) 
                        aniCheck.push(true);
                    else
                        aniCheck.push(false);
                }

                if (!searchOptions.exclusive) {
                    if (aniCheck.includes(true))
                        checked.push(true);
                    else
                        checked.push(false);
                } else {
                    if (!aniCheck.includes(false))
                        checked.push(true);
                    else
                        checked.push(false);
                }
            }

            if (filterOptions.teams.length > 0) {
                if (filterOptions.teams.includes(player.team))
                    checked.push(true);
                else
                    checked.push(false);
            }

            if (filterOptions.colleges.length > 0) {
                if (filterOptions.colleges.includes(player.college))
                    checked.push(true);
                else
                    checked.push(false);
            }

            if (filterOptions.themes.length > 0) {
                if (filterOptions.themes.includes(player.theme))
                    checked.push(true);
                else
                    checked.push(false);
            }

            if (!checked.includes(false) || checked.length === 0)
                return true;
        })

        let sorted = filtered;
        filtered = sorted.sort((a, b) => {
            let aBadges = getTotalNumOfBadges(a);
            let bBadges = getTotalNumOfBadges(b);
            let aCompare = aBadges.hof;
            let bCompare = bBadges.hof;
            for (let prop of sortOptions) {
                let value = a[prop] > b[prop] ? 1 : a[prop] < b[prop] ? -1 : 0;
                if (prop === "totalBadges") {
                    aCompare = aBadges.bronze + aBadges.silver + aBadges.gold + aBadges.hof;
                    bCompare = bBadges.bronze + bBadges.silver + bBadges.gold + bBadges.hof;
                    value = aCompare > bCompare ? 1 : aCompare < bCompare ? -1 : 0;
                } else if (prop === "wingspan") {
                    let aWingspan = a[prop].replace(/\"/g, "").split("'");
                    let bWingspan = b[prop].replace(/\"/g, "").split("'");
                    aCompare = Number(aWingspan[0] * 12) + Number(aWingspan[1]);
                    bCompare = Number(bWingspan[0] * 12) + Number(bWingspan[1]);

                    value = aCompare > bCompare ? 1 : aCompare < bCompare ? -1 : 0;
                } else if (prop === "height") {
                    let aHeight = a[prop].replace(/\"/g, "").split("'");
                    let bHeight = b[prop].replace(/\"/g, "").split("'");
                    aCompare = Number(aHeight[0] * 12) + Number(aHeight[1]);
                    bCompare = Number(bHeight[0] * 12) + Number(bHeight[1]);

                    value = aCompare > bCompare ? 1 : aCompare < bCompare ? -1 : 0;
                }

                if (!asc) {
                    value = value * -1;
                }
                if (value !== 0) {
                    return value;
                }
            }
        })

        filtered = filtered.filter(player => player.name.toLowerCase().includes(searchValue.toLowerCase()));

        setAllPlayers(filtered);
    }, [searchOptions]);

    const teams = Array.from(new Set(players.map(player => player.team))).sort();
    const colleges = Array.from(new Set(players.map(player => player.college))).sort();
    const themes = Array.from(new Set(players.map(player => player.theme))).sort();

    return (
        <Layout players={[]} searchOn={false}>
            <Head>
                <title>All Players List | 2KDB </title>
                <meta name="description" content="List of all players in NBA 2K20 MyTeam" key="description"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className="box">
                    <FilterSortBox teams={teams} colleges={colleges} themes={themes} allAnimations={allAnimations} searchOptions={searchOptions} handleOptions={handleOptions} />
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

    for(let i = 0; i < players.length; i++) {
        players[i].total_stats = getTotalStats(players[i]);
    }

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
    });

    const allAnimations = getAllAnimations(players);

    return {
        props: {
            players,
            allAnimations,
        }
    }
}