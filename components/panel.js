import { useState } from "react";

export default function Panel(props) {
    const { handlePlayers, panelName } = props;
    const [view, setView] = useState("stats")

    return (
        <article className="panel is-transparent">
            <p className="panel-heading">{panelName}</p>
            <p className="panel-tabs">
                <a className="is-active">Stats</a>
                <a>Tendencies</a>
                <a>Badges</a>
                <a>Animations</a>
            </p>

            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input" type="text" placeholder="Search" />
                </p>
            </div>

            <a className="panel-block is-active"> Overall </a>
        </article>
    )
}