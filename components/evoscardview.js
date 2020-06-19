import React from "react";

export default function EvosCardView(props) {
    const { players } = props;

    const renderPlayers = () => {
    }

    return (
        <div className="box">
            <div className="columns is-multiline is-mobile">
                {renderPlayers()}
            </div>
        </div>
    )
}