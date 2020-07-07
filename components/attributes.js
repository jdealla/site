import React from "react";
import { formatName, ratingColor } from "../lib/helpers";

export default function Attributes(props) {
    const { attributes, attrName, evoStats, duoStats, reverse, tendency, trueRating } = props;

    const renderBonusStats = (baseStat, key) => {
        if ((evoStats != undefined || evoStats != null) && (duoStats != undefined || duoStats != null)) {
            if (evoStats !== "" && duoStats !== "") {
                if (evoStats[key] !== 0 || duoStats[key] !== 0)
                    return <span className="tag has-text-success">{`+${(evoStats[key] + duoStats[key] > 99) ? (99 - baseStat) : (evoStats[key] + duoStats[key])}`}</span>
            } else if (evoStats !== "" && duoStats === "") {
                if (evoStats[key] !== 0)
                    return <span className="tag has-text-success">{`+${(evoStats[key] > 99) ? (99 - baseStat) : evoStats[key]}`}</span>
            } else if (duoStats !== "" && evoStats === "") {
                if (duoStats[key] !== 0)
                    return <span className="tag has-text-success">{`+${(duoStats[key] > 99) ? (99 - baseStat) : duoStats[key]}`}</span>
            }
        }   
        return ""
    }

    const renderStat = (value, key) => {
        if ((evoStats != undefined || evoStats != null) && (duoStats != undefined || duoStats != null)) {
            if (evoStats !== "" && duoStats !== "") {
                if (duoStats[key] !== 0 || evoStats[key] !== 0)
                    return ratingColor(value + duoStats[key] + evoStats[key]);
            } else if (evoStats !== "" && duoStats === "") {
                if (evoStats[key] !== 0)
                    return ratingColor(value + evoStats[key]);
            } else if (duoStats !== "" && evoStats === "") {
                if (duoStats[key] !== 0)
                    return ratingColor(value + duoStats[key]);
            }
        }

        if (tendency || trueRating)
            return ratingColor(value, true);
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
                    {renderBonusStats(value, key)}
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