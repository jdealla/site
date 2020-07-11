import React, { useRef } from "react";
import Tippy from '@tippyjs/react';
import { IoMdCloudDownload } from "react-icons/io";

import SearchPlayers from "../components/searchplayers";

import lineupStyle from "../components/lineupview.module.scss";

export default function LineupView(props) {
    const lineupRef = useRef(null);
    const { players, lineup, handleLineup } = props;

    const handleClick = (slot, playerId) => handleLineup(slot, playerId, Number(slot) > 5 ? false : true);

    const saveImage = () => {
        const filter = (node) => {
            return (node.className !== "delete");
        }
        
        import('dom-to-image').then(dom => {
            dom.toJpeg(lineupRef.current, { bgcolor: "#fff", quality: 0.95, filter: filter })
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
                    <div className="column is-4-mobile lineups-styling" key={`starters-${slot}`}>
                        <Tippy maxWidth={400} animation="shift-away" inertia={true} theme="light-border" interactive={true} trigger="click" 
                            content={
                                <div className="box">
                                    <SearchPlayers players={players} handleClick={handleClick} playerInfo={slot} placeholder="Search player" styles={lineupStyle} autoFocus={true} />
                                </div> 
                            }>
                            <figure className="image" key={`starters-${slot}`}>
                                <img className="hvr-grow" src={`https://2kdbimg.com/450/lineup_placeholder_${slot}.png`} />
                            </figure>
                        </Tippy>
                    </div>
                )
            } else {
                item = (
                    <div className="column is-4-mobile " key={`starters-${slot}`}>
                        <figure className="image delete-hover">
                            <a className="delete is-medium" aria-label="delete" onClick={() => handleClick(slot, null)}></a>
                            <img src={`https://2kdbimg.com/500/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
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
                    <div className="column is-3-mobile lineups-styling" key={`bench-${slot}`}>
                        <Tippy maxWidth={400} animation="shift-away" inertia={true} theme="light-border" interactive={true} trigger="click" 
                            content={
                                <div className="box">
                                    <SearchPlayers players={players} handleClick={handleClick} playerInfo={slot} placeholder="Search player" styles={lineupStyle} autoFocus={true} />
                                </div> 
                            }>
                            <figure className="image" key={`bench-${slot}`}>
                                <img className="hvr-grow" src={`https://2kdbimg.com/350/lineup_placeholder.png`} />
                            </figure>
                        </Tippy>
                    </div>
                )
            } else {
                item = (
                    <div className="column is-3-mobile" key={`bench-${slot}`}>
                        <figure className="image delete-hover">
                            <a className="delete is-medium" aria-label="delete" onClick={() => handleClick(slot, null)}></a>
                            <img key={player.id} src={`https://2kdbimg.com/450/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
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
            <div className="container is-flex" style={{ alignItems: "flex-end" }}>
                <button className="button is-small" onClick={() => saveImage()}>
                    <IoMdCloudDownload />
                    <span>Save Lineup as Image</span>
                </button>
            </div>
            <div className="lineups-box" ref={lineupRef}>
                <div className="columns is-multiline is-mobile">
                    <div className="column is-full">
                        <div className="columns is-variable is-2 is-multiline is-mobile is-centered">
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
