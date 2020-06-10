import React from "react";
import ImageCloud from "./imagecloud";

export default function OverallImage(props) {
    const { overall, size } = props;

    const renderOverall = () => {
        let tier = "";
        let color = "";

        switch(true) {
            case (overall <= 69): tier = "bronze"; color = "#B2725C"; break; 
            case (overall <= 75): tier = "silver"; color = "#9A9A9A"; break;
            case (overall <= 79): tier = "gold"; color = "#EBE513"; break;
            case (overall <= 83): tier = "emerald"; color = "#5AC573"; break;
            case (overall <= 86): tier = "sapphire"; color = "#498AE8"; break;
            case (overall <= 89): tier = "ruby"; color = "#EF5A5D"; break;
            case (overall <= 92): tier = "amethyst"; color = "#CF67D7"; break;
            case (overall <= 95): tier = "diamond"; color = "#22D2F2"; break;
            case (overall <= 98): tier = "pink_diamond"; color = "#FF96DF"; break;
            case (overall == 99): tier = "galaxy_opal"; color = "#D389D7"; break;
        }

        return (
            <figure className={`image is-${size}`} style={{ filter:`drop-shadow(0px 0px 4px ${color})` }}>
                <ImageCloud src={`icons/icon_${tier}.png`} width={48} />
            </figure>
        )
    }

    return renderOverall();
}