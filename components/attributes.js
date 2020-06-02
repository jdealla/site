import React from "react";
import { formatName } from "../lib/helpers";
import { ratingColor } from "../lib/helpers";

export default function Attributes(props) {
    const { attributes, attrName, bonus, reverse, } = props;

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
                    {/* {bonus != null ? `+${bonus} ` : ""} */}
                    {ratingColor(value)}
                    <span className="tag">{formatName(key)}</span>
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