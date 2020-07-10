import React from "react";
import { formatName, ratingColor } from "../lib/helpers";
import Tippy from '@tippyjs/react';

export default function Attributes(props) {
    const { attributes, attrName, evoStats, duoStats, reverse, tendency, trueRating, totalStats } = props;

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

    const renderTotal = () => {
        let total = attributes;
        if ((evoStats != undefined || evoStats != null) && (duoStats != undefined || duoStats != null)) {
            if (evoStats !== "" && duoStats !== "") {
                if (duoStats !== 0 || evoStats !== 0)
                    total = total + duoStats + evoStats;
            } else if (evoStats !== "" && duoStats === "") {
                if (evoStats !== 0)
                    total = total + evoStats;
            } else if (duoStats !== "" && evoStats === "") {
                if (duoStats !== 0)
                    total = total + duoStats;
            }
        }
        return total;
    }

    const renderBonusTotal = () => {
        if ((evoStats != undefined || evoStats != null) && (duoStats != undefined || duoStats != null)) {
            if (evoStats !== "" && duoStats !== "") {
                if (evoStats !== 0 || duoStats !== 0)
                    return <span className="tag has-text-success">{`+${(evoStats + duoStats)}`}</span>
            } else if (evoStats !== "" && duoStats === "") {
                if (evoStats !== 0)
                    return <span className="tag has-text-success">{`+${evoStats}`}</span>
            } else if (duoStats !== "" && evoStats === "") {
                if (duoStats !== 0)
                    return <span className="tag has-text-success">{`+${duoStats}`}</span>
            }
        } 
    }

    const renderTags = () => {
        let tags = [];
        let i = 0;
        if (totalStats) {
            const tag = (
                <div className="tags has-addons is-marginless" key={i++} style={{ flex: "0 0 75%" }}>
                    <Tippy maxWidth={250} animation="shift-away" inertia={true} theme="light-border"
                        content={ 
                            <span className="is-size-7"> 
                                <p className="mb-3">Does not include <strong>Intangibles</strong> and <strong>Potential</strong></p>
                                <p><strong>Intangibles</strong> and <strong>Potential</strong> are filler stats to change the overall rating</p>
                            </span>
                        }>
                        <span className="tag is-primary has-text-weight-semibold">{renderTotal()} {'   '}</span>
                    </Tippy>
                    {renderBonusTotal()}
                </div>
            );
            tags.push(tag);
        } else {
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