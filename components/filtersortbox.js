import React, { useState, useEffect } from "react";
import { formatName } from "../lib/helpers";

import Dropdown from "./dropdown";
import ImageCloud from "./imagecloud";
import SearchFilter from "./searchfilter";

export default function FilterSortBox(props) {
    const { allProps, allAnimations, searchOptions, handleOptions, } = props;
    const [filterCat, setFilterCat] = useState({ cat: "lower base", innerCat: "shooting" });
    const [filterItems, setFilterItems] = useState(allAnimations.shooting.lower_base_a)

    useEffect(() => {
        setFilterItems(allAnimations[filterCat.innerCat][filterCat.cat.replace(/ /g, "_") + "_a"])
    }, [filterCat])

    const handleFilterCat = (cat) => {
        setFilterCat({ ...filterCat, cat: cat.toLowerCase() })
    }

    const handleChange = (e) => handleOptions({...searchOptions, searchValue: e.target.value })

    const handleFilter = (cat, prop, value="", innerCat="") => {
        if (searchOptions.filterValue === value) {
            handleOptions({ ...searchOptions, cat: "", filterProp: "", filterValue: "", innerCat: "" })
        } else {
            handleOptions({ ...searchOptions, cat: cat, filterProp: prop, filterValue: value, innerCat: innerCat, sortProp: "", sortValue: "" })
        }
    }

    const handleSort = (cat, prop, value) => {
        if (searchOptions.sortValue === value && searchOptions.sortProp === prop) {
            handleOptions({ ...searchOptions, cat: "", sortProp: "", sortValue: value, innerCat: "" })
        } else {
            handleOptions({ ...searchOptions, cat: cat, sortProp: prop, sortValue: value, innerCat: "", filterProp: "", filterValue: "" })
        }
    }

    const getAnimationCats = () => {
        let cats = [
            "Lower Base", "Upper Release", "Dribble Style", "Size Up Package", "Moving Cross", "Moving Btb", 
            "Moving Hesi", "Triple Threat", "Layup Package", "Post Fade", "Post Hook"
        ];

        return cats.map((cat, i) => (
            <a className="dropdown-item" key={i} onClick={() => handleFilterCat(cat)}>
                {cat}
            </a>
        ))
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
                <div className="columns is-mobile is-multiline">
                    <div className="column is-4-widescreen">
                        <p className="heading">Filter By Overall: </p>
                        <div className="field has-addons">
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "bronze" ? "is-active" : ""}`} 
                                    onClick={() => handleFilter("info", "overall", "bronze")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #B2725C)` }}>
                                        <ImageCloud src={`icons/icon_bronze.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "silver" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "silver")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #9A9A9A)` }}>
                                        <ImageCloud src={`icons/icon_silver.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "gold" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "gold")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #EBE513)` }}>
                                        <ImageCloud src={`icons/icon_gold.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "emerald" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "emerald")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #5AC573)` }}>
                                        <ImageCloud src={`icons/icon_emerald.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "sapphire" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "sapphire")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #498AE8)` }}>
                                        <ImageCloud src={`icons/icon_sapphire.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "ruby" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "ruby")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #EF5A5D)` }}>
                                        <ImageCloud src={`icons/icon_ruby.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "amethyst" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "amethyst")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #CF67D7)` }}>
                                        <ImageCloud src={`icons/icon_amethyst.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "diamond" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "diamond")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #22D2F2)` }}>
                                        <ImageCloud src={`icons/icon_diamond.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "pink diamond" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "pink diamond")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #FF96DF)` }}>
                                        <ImageCloud src={`icons/icon_pink_diamond.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "galaxy opal" ? "is-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "galaxy opal")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #D389D7)` }}>
                                        <ImageCloud src={`icons/icon_galaxy_opal.png`} width={16} />
                                    </figure>
                                </button>
                            </p>
                        </div>
                    </div>
                    <div className="column is-2-widescreen">
                        <p className="heading">Filter By Position: </p>
                        <div className="field has-addons">
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "PG" ? "is-active" : ""}`} onClick={() => handleFilter("info", "position", "PG")}>PG</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "SG" ? "is-active" : ""}`} onClick={() => handleFilter("info", "position", "SG")}>SG</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "SF" ? "is-active" : ""}`} onClick={() => handleFilter("info", "position", "SF")}>SF</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "PF" ? "is-active" : ""}`} onClick={() => handleFilter("info", "position", "PF")}>PF</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "C" ? "is-active" : ""}`} onClick={() => handleFilter("info", "position", "C")}>C</button>
                            </p>
                        </div>
                    </div>
                    <div className="column is-6-widescreen">
                        <p className="heading">Sort By Stats: </p>
                        <Dropdown title="Shooting" items={getDropdownItems("shootingStats")} />
                        <Dropdown title="Inside Scoring" items={getDropdownItems("insideStats")} />
                        <Dropdown title="Athleticism" items={getDropdownItems("athleticismStats")} />
                        <Dropdown title="Playmaking" items={getDropdownItems("playmakingStats")} />
                        <Dropdown title="Defense" items={getDropdownItems("defenseStats")} />
                        <Dropdown title="Rebounding" items={getDropdownItems("reboundStats")} />
                        <Dropdown title="Potential" items={getDropdownItems("potentialStats")} />
                    </div>
                    <div className="column is-6-widescreen">
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
                    <div className="column is-6-widescreen">
                        <p className="heading">Filter By Animations: </p>
                        <div className="container is-flex">
                            <Dropdown title="Animation Category" items={getAnimationCats()} />
                            <SearchFilter suggestions={filterItems} handleFilter={handleFilter} filterCat={filterCat} placeholder="Search animations here" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}