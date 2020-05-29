import React from "react";
import ImageCloud from "./imagecloud";
import { formatName } from "../lib/helpers";

export default function BadgesContainer(props) {
    const { badges } = props;

    const renderBadges = () => {
        let badgeImgs = [];
        let i = 0;

        for(const [key, value] of Object.entries(badges)) {
            let name = key.replace(/_/g, "");
            let level = value.toLowerCase();

            let imgSource = `badges/${name}_${level}.png`;
            
            if (level === "yes")
                imgSource = "badges/personality.png";
            if (level === "none")
                imgSource = "badges/badge_none.png";

            let img = (
                <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge" key={i++}>
                    <div className="container is-vcentered">
                        <figure className="image is-48x48" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <ImageCloud src={`${imgSource}`} width={48} height={48} alt={name} />
                        </figure>
                        <p className="is-size-7 has-text-centered"> {formatName(key)} </p>
                    </div>
                </div>
            )
            badgeImgs.push(img)
        }
        return badgeImgs;
    }

    return (
        <div className="columns is-gapless is-mobile is-multiline">
            {renderBadges()}
        </div>
    )
}