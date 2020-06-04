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
            case "insideT": return allProps.tendencies.inside.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "inside", tend)}>
                    {formatName(tend)}
                </a>)
            );
            case "shootingT": return allProps.tendencies.shooting.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "shooting", tend)}>
                    {formatName(tend)}
                </a>)
            );
            case "isoT": return allProps.tendencies.iso.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "iso", tend)}>
                    {formatName(tend)}
                </a>)
            );
            case "driveT": return allProps.tendencies.drive.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "drive", tend)}>
                    {formatName(tend)}
                </a>)
            );
            case "freelanceT": return allProps.tendencies.freelance.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "freelance", tend)}>
                    {formatName(tend)}
                </a>)
            );
            case "postT": return allProps.tendencies.post.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "post", tend)}>
                    {formatName(tend)}
                </a>)
            );
            case "passingT": return allProps.tendencies.passing.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "passing", tend)}>
                    {formatName(tend)}
                </a>)
            );
            case "defenseT": return allProps.tendencies.defense.map((tend, i) => 
                (<a className="dropdown-item" key={i} onClick={() => handleSort("tendencies", "defense", tend)}>
                    {formatName(tend)}
                </a>)
            );
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
                    <div className="column is-4-widescreen">
                        <p className="heading">Sort By Stats: </p>
                        <Dropdown title="Shooting Stats" items={getDropdownItems("shootingStats")} />
                        <Dropdown title="Inside Stats" items={getDropdownItems("insideStats")} />
                        <Dropdown title="Athleticism Stats" items={getDropdownItems("athleticismStats")} />
                        <Dropdown title="Playmaking Stats" items={getDropdownItems("playmakingStats")} />
                        <Dropdown title="Defense Stats" items={getDropdownItems("defenseStats")} />
                        <Dropdown title="Rebound Stats" items={getDropdownItems("reboundStats")} />
                        <Dropdown title="Potential Stats" items={getDropdownItems("potentialStats")} />
                    </div>
                    <div className="column is-4-widescreen">
                        <p className="heading">Sort By Tendencies: </p>
                        <Dropdown title="Inside T" items={getDropdownItems("insideT")} />
                        <Dropdown title="Shooting T" items={getDropdownItems("shootingT")} />
                        <Dropdown title="Iso T" items={getDropdownItems("isoT")} />
                        <Dropdown title="Drive T" items={getDropdownItems("driveT")} />
                        <Dropdown title="Freelance T" items={getDropdownItems("freelanceT")} />
                        <Dropdown title="Post T" items={getDropdownItems("postT")} />
                        <Dropdown title="Passing T" items={getDropdownItems("passingT")} />
                        <Dropdown title="Defense T" items={getDropdownItems("defenseT")} />

                    </div>
                    <div className="column">
                        <p className="heading">Filter By Animations: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}