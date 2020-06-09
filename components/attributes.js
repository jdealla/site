import React from "react";
import { formatName, ratingColor } from "../lib/helpers";

export default function Attributes(props) {
    const { attributes, attrName, evoStats, reverse, } = props;

    const renderEvoStat = (key) => {
        if (evoStats == null || evoStats == "")
            return "";
        else {
            if (evoStats[key] !== 0) {
                return <span className="tag has-text-success">{`+${evoStats[key]}`}</span>
            } else {
                return "";
            }
        }
    }

    const renderStat = (value, key) => {
        if (evoStats == null || evoStats == "" || evoStats == undefined)
            return ratingColor(value);
        else 
            if (evoStats[key] !== 0)
                return ratingColor(value + evoStats[key]);
            else
                return ratingColor(value);
    }

    const renderTags = () => {
        let tags = [];
        let i = 0;
        for (let [key, value] of Object.entries(attributes)) {
            const tag = reverse ? (
                <div className="tags has-addons is-marginless" key={i++} >
                    <span className="tag">{formatName(key)}</span>
                    {ratingColor(value)}
                </div>
            ) : (
                <div className="tags has-addons is-marginless" key={i++} style={{ flex: "0 0 75%" }}>
                    {renderStat(value, key)}
                    <span className="tag">{formatName(key)}</span>
                    {renderEvoStat(key)}
                </div>
            )
            tags.push(tag)
        }
        return tags
    }

    return (
        <div className="container">
            <p className="has-text-weight-semibold "> {attrName} </p>
            {renderTags()}
        </div>
    )
}