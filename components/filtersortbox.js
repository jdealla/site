import React from "react";

import Dropdown from "./dropdown";

export default function FilterSortBox(props) {
    const { allProps, searchOptions, handleOptions, } = props;

    const handleChange = (e) => {
        console.log(e.target.value);
        handleOptions({...searchOptions, searchValue: e.target.value })
    }

    const handleFilter = (cat, prop, value) => {
        handleOptions({ ...searchOptions, cat: cat, filterProp: prop, filterValue: value})
    }

    return (
        <div className="container">
            <div className="field">
                <div className="control">
                    <input className="input" value={searchOptions.searchValue} onChange={handleChange} type="text" placeholder="Search players..." />
                </div>
            </div>
            <div className="container">
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
            
        </div>
    )
}