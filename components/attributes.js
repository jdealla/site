import { formatName } from "../lib/players";

export default function Attributes(props) {
    const { attributes, attrName } = props;

    const ratingColor = (num) => {
        let color = ""
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
        let tags = [];
        let i = 0;
        for (let [key, value] of Object.entries(attributes)) {
            const tag = (
                <div className="tags has-addons is-marginless" key={i++}>
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