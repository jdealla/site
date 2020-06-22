import React, { useState, useEffect } from "react";
import { formatName } from "../lib/helpers";

import Dropdown from "./dropdown";
import SearchFilter from "./searchfilter";

export default function FilterSortBox(props) {
    const { allAnimations, searchOptions, handleOptions, } = props;
    const [filterCat, setFilterCat] = useState({ cat: "lower base", innerCat: "shooting" });
    const [filterItems, setFilterItems] = useState(allAnimations.shooting.lower_base_a)

    useEffect(() => {
        setFilterItems(allAnimations[filterCat.innerCat][filterCat.cat.replace(/ /g, "_") + "_a"])
    }, [filterCat])

    const handleFilterCat = (cat, innerCat) => {
        setFilterCat({ cat: cat, innerCat: innerCat })
    }

    const handleChange = (e) => handleOptions({...searchOptions, searchValue: e.target.value })

    const handleFilter = (cat, prop, value="", innerCat="") => {
        if (searchOptions.filterValue === value) {
            handleOptions({ ...searchOptions, filterCat: "", filterProp: "", filterValue: "", innerCat: "" })
        } else {
            handleOptions({ ...searchOptions, filterCat: cat, filterProp: prop, filterValue: value, innerCat: innerCat })
        }
    }

    // const handleSort = (cat, prop, value) => {
    //     if (searchOptions.sortValue === value && searchOptions.sortProp === prop) {
    //         handleOptions({ ...searchOptions, sortCat: "", sortProp: "", sortValue: value, innerCat: "" })
    //     } else {
    //         handleOptions({ ...searchOptions, sortCat: cat, sortProp: prop, sortValue: value, innerCat: "" })
    //     }
    // }

    // const getAnimationCats = () => {
    //     let cats = [
    //         "Lower Base", "Upper Release", "Dribble Style", "Size Up Packages", "Moving Crossover", "Moving Behind The Back", 
    //         "Moving Hesitation", "Moving Spin", "Triple Threat Style", "Layup Package", "Post Fade", "Post Hook"
    //     ];

    //     return cats.map((cat, i) => {
    //         let innerCat = ""
    //         switch(cat) {
    //             case "Lower Base": innerCat = "shooting"; break;
    //             case "Upper Release": innerCat = "shooting"; break;
    //             case "Dribble Style": innerCat = "ballhandle"; break;
    //             case "Size Up Packages": innerCat = "ballhandle"; break;
    //             case "Moving Crossover": innerCat = "ballhandle"; break;
    //             case "Moving Behind The Back": innerCat = "ballhandle"; break;
    //             case "Moving Hesitation": innerCat = "ballhandle"; break;
    //             case "Moving Spin": innerCat = "ballhandle"; break;
    //             case "Triple Threat Style": innerCat = "ballhandle"; break;
    //             case "Layup Package": innerCat = "layup"; break;
    //             case "Post Fade": innerCat = "post"; break;
    //             case "Post Hook": innerCat = "post"; break;
    //         }

    //         return (
    //             <a className="dropdown-item" key={i} onClick={() => handleFilterCat(cat.toLowerCase(), innerCat)}>
    //                 {cat}
    //             </a>
    //         )}
    //     )
    // }

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
                                    className={`button is-small ${searchOptions.filterValue === "bronze" ? "is-active filter-button-active" : ""}`} 
                                    onClick={() => handleFilter("info", "overall", "bronze")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #B2725C)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_bronze.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "silver" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "silver")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #9A9A9A)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_silver.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "gold" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "gold")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #EBE513)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_gold.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "emerald" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "emerald")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #5AC573)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_emerald.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "sapphire" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "sapphire")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #498AE8)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_sapphire.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "ruby" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "ruby")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #EF5A5D)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_ruby.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "amethyst" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "amethyst")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #CF67D7)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_amethyst.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "diamond" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "diamond")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #22D2F2)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_diamond.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "pink diamond" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "pink diamond")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #FF96DF)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_pink_diamond.png`} />
                                    </figure>
                                </button>
                            </p>
                            <p className="control">
                                <button 
                                    className={`button is-small ${searchOptions.filterValue === "galaxy opal" ? "is-active filter-button-active" : ""}`}
                                    onClick={() => handleFilter("info", "overall", "galaxy opal")}
                                >
                                    <figure className={`image is-16`} style={{ filter: `drop-shadow(0px 0px 1px #D389D7)` }}>
                                        <img src={`https://2kdbimg.com/16/icon_galaxy_opal.png`} />
                                    </figure>
                                </button>
                            </p>
                        </div>
                    </div>
                    {/* <div className="column is-2-widescreen">
                        <p className="heading">Filter By Position: </p>
                        <div className="field has-addons">
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "PG" ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("info", "position", "PG")}>PG</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "SG" ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("info", "position", "SG")}>SG</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "SF" ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("info", "position", "SF")}>SF</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "PF" ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("info", "position", "PF")}>PF</button>
                            </p>
                            <p className="control">
                                <button className={`button is-small ${searchOptions.filterValue === "C" ? "is-active filter-button-active" : ""}`} onClick={() => handleFilter("info", "position", "C")}>C</button>
                            </p>
                        </div>
                    </div>
                    <div className="column is-6-widescreen">
                        <p className="heading">Filter By Animations: </p>
                        <div className="container is-flex">
                            <Dropdown title={filterCat.cat.replace(/_/g, " ").replace(/\b\w/g, l => l.toUpperCase())} items={getAnimationCats()} />
                            <SearchFilter suggestions={filterItems} handleFilter={handleFilter} filterCat={filterCat} placeholder={`Search ${filterCat.cat.replace(/_/g, " ")} here`} />
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
                    <div className="column ">
                        <p className="heading">Filter By Badges: </p>

                    </div> */}
                </div>
            </div>
        </div>
    )
}