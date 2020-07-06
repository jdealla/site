import React from "react";
import Popup from "reactjs-popup";

import SearchPlayers from "../components/searchplayers";

import lineupStyle from "../components/lineupview.module.scss";

export default function LineupView(props) {
    const { players, lineup, handleLineup } = props;

    const handleClick = (slot, playerId) => handleLineup(slot, playerId, Number(slot) > 5 ? false : true);

    const renderStarters = () => {
        let view = [];
        for(let [slot, player] of Object.entries(lineup.starters)) {
            let item;
            
            if (player == null) {
                item = (
                    <div className="column is-4-mobile" key={`starters-${slot}`}>
                        <Popup 
                            trigger={(
                                <figure className="image is-3by4">
                                    <img src="https://2kdbimg.com/240x340/no_image.png" />
                                </figure>
                            )}
                            contentStyle={{ width: "350px" }}
                            on="click"
                            position={["top center", "center center", "right center", "left center"]}
                            closeOnDocumentClick
                        >
                            <div className="box">
                                <SearchPlayers players={players} handleClick={handleClick} playerInfo={slot} placeholder="Search player" styles={lineupStyle} />
                            </div>
                        </Popup>

                    </div>
                )
            } else {
                item = (
                    <div className="column is-4-mobile" key={`starters-${slot}`}>
                        <div style={{ position: "relative" }}>
                            <a className="delete" aria-label="delete" style={{ position: "absolute", top: 0, zIndex: "2" }} onClick={() => handleClick(slot, null)}></a>
                        </div>
                        <figure className="image is-3by4">
                            <img src={`https://2kdbimg.com/240x340/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                        </figure>
                    </div>
                )
            }
            view.push(item)
        }
        return view;
    }

    const renderBench = () => {
        let view = [];
        for(let [slot, player] of Object.entries(lineup.bench)) {
            let item;
            if (player == null) {
                item = (
                    <div className="column is-3-mobile" key={`bench-${slot}`}>
                        <Popup 
                            trigger={(
                                <figure className="image is-3by4">
                                    <img src="https://2kdbimg.com/160x211/no_image.png" />
                                </figure>
                            )}
                            contentStyle={{ width: "350px" }}
                            on="click"
                            position={["top center", "center center", "right center", "left center"]}
                            closeOnDocumentClick
                        >
                            <div className="box">
                                <SearchPlayers players={players} handleClick={handleClick} playerInfo={slot} placeholder="Search player" styles={lineupStyle} />
                            </div>
                        </Popup>
                    </div>
                )
            } else {
                item = (
                    <div className="column is-3-mobile" key={`bench-${slot}`}>
                        <div style={{ position: "relative" }}>
                            <a className="delete" aria-label="delete" style={{ position: "absolute", top: 0, zIndex: "2" }} onClick={() => handleClick(slot, null)}></a>
                        </div>
                        <figure className="image is-3by4">
                            <img key={player.id} src={`https://2kdbimg.com/160x211/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                        </figure>
                    </div>
                )
            }
            view.push(item)
        }
        return view;
    }

    return (
        <div className="box">
            <div className="columns is-multiline is-mobile">
                <div className="column is-full">
                    <div className="columns is-variable is-1 is-multiline is-mobile is-centered">
                        {renderStarters()}
                    </div>
                </div>
                <div className="column is-full">
                    <div className="columns is-variable is-1 is-multiline is-mobile">
                        {renderBench()}
                    </div>
                </div>
            </div>
        </div>
    )
}
