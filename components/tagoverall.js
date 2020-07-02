import React from "react";

export default function TagOverall(props) {
    const { overall, hasBorder, theme } = props;

    const renderOverall = () => {
        let color = "";
        let color2 = "";
        let shadow = "none";
        let borderStyle = "none";

        switch(true) {
            case (overall <= 69): color = "#B2725C"; color2 = "#774635"; break; 
            case (overall <= 75): color = "#9A9A9A"; color2 = "#737373"; break;
            case (overall <= 79): color = "#f4d053"; color2 = "#a17e04"; break;
            case (overall <= 83): color = "#4abd65"; color2 = "#0e6923"; break;
            case (overall <= 86): color = "#498AE8"; color2 = "#275496"; break;
            case (overall <= 89): color = "#cb2d30"; color2 = "#6b1517"; break;
            case (overall <= 92): color = "#a51fff"; color2 = "#5b1c86"; break;
            case (overall <= 95): color = "#34e0ff"; color2 = "#006a7d"; break;
            case (overall <= 98): color = "#FF96DF"; color2 = "#ad388a"; break;
            case (overall == 99): color = "#18B7ED"; color2 = "#BC5BB7"; break;
        }
		
		if (theme == "Free Agent") {
            color = "#666";
            color2 = "#333"; 
        }
		
		if (overall >= 93)
            shadow = `drop-shadow(0px 0px 3px ${color2})`;
		
		if (hasBorder)
            borderStyle = `1px solid ${color}`;
		
		let TagStyle = {
            background: `linear-gradient(${color}, ${color2})`,
            position: "relative",
            filter: `${shadow}`,
            border: `${borderStyle}`
		}

        return (
            <span className="tag has-text-white px-3" style={TagStyle}>
                <p className="is-overlay is-size-6 has-text-white has-text-centered inline-number-ovr" >
                    {overall}
                </p>
            </span>
        )
    }

    return renderOverall();
}