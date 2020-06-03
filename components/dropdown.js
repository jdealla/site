import React from "react";

export default function Dropdown(props) {
    const { title, items, customButton } = props;

    return (
        <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
                {
                    customButton != null ?
                    customButton :
                    (
                        <button className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>{title}</span>
                        </button>
                    )
                }
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <div className="container is-scrollable" >
                        {items}
                    </div>
                </div>
            </div>
        </div>
    )
}