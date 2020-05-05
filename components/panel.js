import { useState } from "react";

export default function Panel(props) {
    const { handlePlayers, panelName } = props;
    const [view, setView] = useState("stats")

    return (
        <article className="panel is-transparent">
            <p className="panel-heading">{panelName}</p>

            <div className="panel-block">
                <p className="control has-icons-left">
                    <input className="input" type="text" placeholder="Search" />
                </p>
            </div>

            <p className="panel-tabs">
                <a className="is-active">Stats</a>
                <a>Tendencies</a>
                <a>Badges</a>
                <a>Animations</a>
            </p>

            <div className="panel-block">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half is-marginless">
                            <ul className="panel-list">
                                <li className="panel-item">Overall</li>
                                <li className="panel-item">Stats</li>
                                <li className="panel-item">Height</li>
                                <li className="panel-item">Position</li>
                                <li className="panel-item">Shot Three</li>
                                <li className="panel-item">Shot Three</li>
                                <li className="panel-item">Shot Three</li>
                                <li className="panel-item">Shot Three</li>
                                <li className="panel-item">Shot Three</li>
                                <li className="panel-item">Shot Three</li>
                            </ul>
                        </div>
                        <div className="divider is-vertical is-left"></div>
                        <div className="column is-half is-paddingless">
                            Column 2
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}