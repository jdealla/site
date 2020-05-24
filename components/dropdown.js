import React from "react";

export default function Dropdown(props) {
    const { title, items, hover, customButton } = props;

    return (
        <div className={`dropdown ${hover ? "is-hoverable" : "is-active"}`}>
            <div className="dropdown-trigger">
                {
                    customButton != null ?
                    customButton :
                    (
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
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