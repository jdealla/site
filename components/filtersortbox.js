import { useState } from "react";
import { getPropNames, getPlayersData, sortPlayersByProp } from "../lib/players";

import Dropdown from "../components/dropdown";

export default function FilterSortBox(props) {
    const { handleSorted, sortedBy } = props;
    const [view, setView] = useState("sort");

    const handleClick = (item) => {
        let unformatted = item.toLowerCase().replace(/ /g, "_");

        handleSorted(unformatted);
    }

    const getItemsByProp = (prop) => {
        switch(prop) {
            case "stats": return getPropNames("stats");
            case "tendencies": return getPropNames("tendencies");
            case "badges": return getPropNames("badges");
            case "animations": return getPropNames("sigs");
        }
    }

    const renderDropdownItems = (prop) => {
        let items = getItemsByProp(prop).map((item, i) => {
            return (
                <a key={i} className="dropdown-item" onClick={() => handleClick(item)} >
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

    const handleSortDirection = () => {
        let value = sortedBy.split("-");

        //dsc
        if (value.length > 1)
            handleSorted(value[1])
        else
            handleSorted("-" + value[0].toLowerCase().replace(/ /g, "_"))
    }

    return (
        <div className="box">
            <div className="columns is-mobile">
                <div className="column is-half">
                    <Dropdown hover={true} items={renderDropdownItems("stats")} title="Sort By Stats" />
                    <Dropdown hover={true} items={renderDropdownItems("tendencies")} title="Sort By Tendencies" />
                </div>
                <div className="column has-text-right">
                    <button className="button" onClick={handleSortDirection} >Asc</button>
                    <button className="button" onClick={handleSortDirection} >Desc</button>
                </div>
            </div>
        </div>
    )
}