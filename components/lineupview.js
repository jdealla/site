import React, { useRef } from "react";
import Popup from "reactjs-popup";
import { IoMdCloudDownload } from "react-icons/io";

import SearchPlayers from "../components/searchplayers";

import lineupStyle from "../components/lineupview.module.scss";

export default function LineupView(props) {
    const lineupRef = useRef(null);
    const { players, lineup, handleLineup } = props;

    const handleClick = (slot, playerId) => handleLineup(slot, playerId, Number(slot) > 5 ? false : true);

    const saveImage = () => {
        import('dom-to-image').then(dom => {
            dom.toJpeg(lineupRef.current, { quality: 0.95 })
            .then(dataUrl => {
                const link = document.createElement('a');
                link.download = '2kdb-lineup.jpeg';
                link.crossOrigin = "anonymous";
                link.href = dataUrl;
                link.click();
            })
        }).catch(e => {console("load failed")})
    }

    const renderStarters = () => {
        let view = [];
        for(let [slot, player] of Object.entries(lineup.starters)) {
            let item;
            
            if (player == null) {
                item = (
                    <div className="column is-4-mobile" key={`starters-${slot}`}>
                        <Popup 
                            trigger={(
                                <figure className="image is-3by4" key={`starters-${slot}`}>
                                    <img src="https://2kdbimg.com/280x400/lineup_placeholder.png" />
                                </figure>
                            )}
                            contentStyle={{ width: "350px" }}
                            on="click"
                            position={["top center", "right center", "left center"]}
                            overlayStyle={{ zIndex: "1" }}
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
                                <figure className="image is-3by4" key={`bench-${slot}`}>
                                    <img src="https://2kdbimg.com/240x340/lineup_placeholder.png" />
                                </figure>
                            )}
                            contentStyle={{ width: "350px" }}
                            on="click"
                            position={["top center", "right center", "left center"]}
                            overlayStyle={{ zIndex: "1" }}
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
                            <img key={player.id} src={`https://2kdbimg.com/240x340/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                        </figure>
                    </div>
                )
            }
            view.push(item)
        }
        return view;
    }

    return (
        <div className="container">
            <p className="title has-text-centered">Lineup Builder</p>
            <div className="container">
                <button className="button is-small" onClick={() => saveImage()}>
                    <IoMdCloudDownload />
                    <span>Save Lineup as Image</span>
                </button>
                <button className="button is-small" disabled>
                    <span>Save to Profile</span>
                </button>
            </div>
            <div className="box" ref={lineupRef}>
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
            
        </div>
    )
}
