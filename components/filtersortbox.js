import React from "react";
import { getPropNames } from "../lib/players";

import Dropdown from "./dropdown";
import SortIcon from "./sorticon";

export default function FilterSortBox(props) {
    const { handleSorted, sortedBy, handleSortDirection } = props;

    const handleClick = (item, addT) => {
        if (addT) {
            item += "T";
        }

        handleSortDirection();
        handleSorted(item);
    }

    const getItemsByProp = async (prop) => {
        switch(prop) {
            case "stats": return await getPropNames("stats");
            case "tendencies": return await getPropNames("tendencies");
            case "badges": return await getPropNames("badges");
            case "animations": return await getPropNames("sigs");
        }
    }

    const renderDropdownItems = async (prop) => {
        let addT = false;

        if (prop === "tendencies")
            addT = true;

        let items = await getItemsByProp(prop).map((item, i) => {
            return (
                <a key={i} className="dropdown-item" onClick={() => handleClick(item, addT)} >
                    {item}
                </a>
            )
        })

        return (
            <div className="columns">
                <div className="column is-half">
                    {items.slice(0, items.length / 2)}
                </div>
                <div className="column is-half">
                    {items.slice(items.length / 2 + 1)}
                </div>
            </div>
        )
    }

    return (
        <div className="box">
            <div className="columns is-mobile">
                <div className="column is-half">
                    <Dropdown hover={true} items={async () => {renderDropdownItems("stats") }} title="Sort By Stats" />
                    <Dropdown hover={true} items={async () => { renderDropdownItems("tendencies")} } title="Sort By Tendencies" />
                </div>
                <div className="column has-text-right">
                    <button className="button" onClick={() => handleSortDirection()}>
                        <SortIcon asc={sortedBy.asc} />
                        <span>
                            {sortedBy.asc ? "Asc" : "Desc" }
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}