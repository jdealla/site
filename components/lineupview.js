import React from "react";
import Popover from "react-tiny-popover";

export default function LineupView(props) {
    const { lineup, handleLineup } = props;

    const renderStartingLineup = () => {
        let view = [];
        for(let player of Object.values(lineup.starters)) {
            let item;
            if (player == null) {
                item = (
                    <img src="https://2kdbimg.com/240x340/no_image.png" />
                )
            } else {
                item = (
                    <img src={`https://2kdbimg.com/240x340/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} />
                )
            }
            view.push(item)
        }
        return view;
    }

    const renderBench = () => {
        let view = [];
        for(let player of Object.values(lineup.bench)) {
            let item;
            if (player == null) {
                item = (
                    <img src="https://2kdbimg.com/240x340/no_image.png" />
                )
            } else {
                item = (
                    <img src={`https://2kdbimg.com/240x340/${playerData.info.name.replace(/( |')/g, "_").toLowerCase()}_${playerData.info.id}.jpg`} />
                )
            }
            view.push(item)
        }
        return view;
    }

    return (
        <div className="box">
            <div className="columns">
                <div className="column is-full">
                    {renderStartingLineup()}
                </div>
                <div className="column is-full">
                    {renderBench()}
                </div>
            </div>
        </div>
    )
}
