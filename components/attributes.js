import { Fragment } from "react";

export default function Attributes(props) {
    const { attributes, attrName } = props;

    const ratingColor = (number) => {
        let color = ""
        let num = parseInt(number)
        switch (true) {
            case (num < 50): color = "is-danger"; break;
            case (num < 70): color = "is-link"; break;
            case (num < 80): color = "is-warning"; break;
            case (num < 89): color = "is-info"; break;
            default: color = "is-success";
        }
        return (
        <span className={`tag ${color} has-text-weight-semibold`}>{num}</span>
        )
    }

    const renderTags = () => {
        return attributes.map((attr, i) => {
            return (
                <div className="tags has-addons is-marginless" key={i}>
                    {ratingColor(attr.rating)}
                    <span className="tag">{attr.name}</span>
                </div>
            )
        })
    }

    return (
        <div className="container">
            <p className="has-text-weight-semibold "> {attrName} </p>
            {renderTags()}
        </div>
    )
}