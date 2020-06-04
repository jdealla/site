import React from "react";
import { formatName } from "../lib/helpers";

import Dropdown from "./dropdown";

export default function FilterSortBox(props) {
    const { allProps, searchOptions, handleOptions, } = props;

    const handleChange = (e) => {
        handleOptions({...searchOptions, searchValue: e.target.value })
    }

    const handleFilter = (cat, prop, value) => {
        if (searchOptions.filterValue === value) {
            handleOptions({ ...searchOptions, cat: "", filterProp: "", filterValue: "" })
        } else {
            handleOptions({ ...searchOptions, cat: cat, filterProp: prop, filterValue: value})
        }
    }

    const handleSort = (cat, prop, value) => {
        if (searchOptions.sortValue === value && searchOptions.sortProp === prop) {
            handleOptions({ ...searchOptions, cat: "", sortProp: "", sortValue: value })
        } else {
            handleOptions({ ...searchOptions, cat: cat, sortProp: prop, sortValue: value })
        }
    }

    const getDropdownItems = (cat) => {
        switch(cat) {
            case "shootingStats": return allProps.stats.shooting.map((stat, i) =>
                (<a className="dropdown-item" key={i} onClick={() => handleSort("stats", "shooting", stat)}>
                    {formatName(stat)}
                </a>)
            )
            case "insideStats": return allProps.stats.inside.map((stat, i) =>
                (<a className="dropdown-item" key={i} onClick={() => handleSort("stats", "inside", stat)}>
                    {formatName(stat)}
                </a>)
            )
            case "athleticismStats": return allProps.stats.athleticism.map((stat, i) =>
                (<a className="dropdown-item" key={i} onClick={() => handleSort("stats", "athleticism", stat)}>
                    {formatName(stat)}
                </a>)
            )
            case "playmakingStats": return allProps.stats.playmaking.map((stat, i) =>
                (<a className="dropdown-item" key={i} onClick={() => handleSort("stats", "playmaking", stat)}>
                    {formatName(stat)}
                </a>)
            )
            case "defenseStats": return allProps.stats.defense.map((stat, i) =>
                (<a className="dropdown-item" key={i} onClick={() => handleSort("stats", "defense", stat)}>
                    {formatName(stat)}
                </a>)
            )
            case "reboundStats": return allProps.stats.rebound.map((stat, i) =>
                (<a className="dropdown-item" key={i} onClick={() => handleSort("stats", "rebound", stat)}>
                    {formatName(stat)}
                </a>)
            )
            case "potentialStats": return allProps.stats.potential.map((stat, i) =>
                (<a className="dropdown-item" key={i} onClick={() => handleSort("stats", "potential", stat)}>
                    {formatName(stat)}
                </a>)
            )
            case "insideT": return;
            case "shootingT": return;
            case "isoT": return;
            case "driveT": return;
            case "freelanceT": return;
            case "postT": return;
            case "passingT": return;
            case "defenseT": return;
        }
    }

    return (
        <div className="container">
            <div className="field">
                <div className="control">
                    <input className="input" value={searchOptions.searchValue} onChange={handleChange} type="text" placeholder="Search players..." />
                </div>
            </div>
            <div className="container">
                <div className="columns">
                    <div className="column is-2-widescreen">
                        <p className="heading">Filter By Position: </p>
                        <div className="field has-addons">
                            <p className="control">
                                <button className="button is-small" onClick={() => handleFilter("info", "position", "PG")}>PG</button>
                            </p>
                            <p className="control">
                                <button className="button is-small" onClick={() => handleFilter("info", "position", "SG")}>SG</button>
                            </p>
                            <p className="control">
                                <button className="button is-small" onClick={() => handleFilter("info", "position", "SF")}>SF</button>
                            </p>
                            <p className="control">
                                <button className="button is-small" onClick={() => handleFilter("info", "position", "PF")}>PF</button>
                            </p>
                            <p className="control">
                                <button className="button is-small" onClick={() => handleFilter("info", "position", "C")}>C</button>
                            </p>
                        </div>
                    </div>
                    <div className="column is-5-widescreen">
                        <p className="heading">Sort By Stats: </p>
                        <Dropdown title="Shooting Stats" items={getDropdownItems("shootingStats")} />
                        <Dropdown title="Inside Stats" items={getDropdownItems("insideStats")} />
                        <Dropdown title="Athleticism Stats" items={getDropdownItems("athleticismStats")} />
                        <Dropdown title="Playmaking Stats" items={getDropdownItems("playmakingStats")} />
                        <Dropdown title="Defense Stats" items={getDropdownItems("defenseStats")} />
                        <Dropdown title="Rebound Stats" items={getDropdownItems("reboundStats")} />
                        <Dropdown title="Potential Stats" items={getDropdownItems("potentialStats")} />
                    </div>
                    <div className="column is-2-widescreen">
                        <p className="heading">Sort By Tendency: </p>
                        {/* <Dropdown title="Tendencies" items={getDropdownItems("tendencies")} /> */}
                    </div>
                    <div className="column">
                        <p className="heading">Filter By Animation: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}