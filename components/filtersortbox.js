import React from "react";

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
        if (searchOptions.sortValue === value) {
            handleOptions({ ...searchOptions, cat: "", sortProp: "", sortValue: "" })
        } else {
            handleOptions({ ...searchOptions, cat: cat, sortProp: prop, sortValue: value })
        }
    }

    const renderDropdownItems = () => {
        const statItems = allProps.stats.map(stat => (<a className="dropdown-item" >{stat}</a>))

        const tendencyItems = allProps.tendencies.map(tendency => (<a className="dropdown-item">{tendency}</a>))
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
                    <div className="column">
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
                    <div className="column">
                        <p className="heading">Sort By Stat: </p>
                        
                    </div>
                    <div className="column">
                        <p className="heading">Sort By Tendency: </p>
                    </div>
                    <div className="column">
                        <p className="heading">Filter By Animation: </p>
                    </div>
                </div>
            </div>
        </div>
    )
}