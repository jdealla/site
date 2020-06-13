import React from "react";

import { formatName, numToLevel, levelToNum } from "../lib/helpers";

export default function BadgesContainer(props) {
    const { badges, evoBadges } = props;

    const renderNotification = (evod) => {
        if (evod)
            return <span className="badge is-success"></span>
        else
            return "";
    }

    const renderBadges = () => {
        let badgeImgs = [];
        let i = 0;

        for(const [key, value] of Object.entries(badges)) {
            let name = key.replace(/_/g, "");
            let level = value.toLowerCase();
            let evod = false;
            
            if (evoBadges != null || evoBadges != undefined) {
                if (evoBadges[key] != null || evoBadges[key] != undefined) {
                    level = numToLevel(levelToNum(value) + evoBadges[key]).toLowerCase();
                    if (level != value.toLowerCase())
                        evod = true;
                }
            }

            let imgSource = `${name}_${level}.png`;
            
            if (level === "yes")
                imgSource = "personality.png";
            if (level === "none")
                imgSource = "badge_none.png";

            let img = (
                <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge" key={i++}>
                    <div className="container is-vcentered">
                        <figure className="image is-48x48" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <img src={`https://2kdbimg.com/48x48/${imgSource}`} />
                        </figure>
                        {renderNotification(evod)}
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