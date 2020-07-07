import React from "react";

import { formatName, numToLevel, levelToNum } from "../lib/helpers";

export default function BadgesContainer(props) {
    const { badges, evoBadges, duoBadges } = props;

    const renderNotification = (upgraded) => {
        if (upgraded)
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
            let upgraded = false;
            
            if (evoBadges != undefined || evoBadges != null) {
                if (evoBadges[key] != undefined || evoBadges[key] != null) {
                    level = numToLevel(levelToNum(value) + evoBadges[key]).toLowerCase();
                    if (level != value.toLowerCase())
                        upgraded = true;
                }
            }

            if (duoBadges != undefined || duoBadges != null) {
                if (duoBadges[key] != undefined || duoBadges[key] != null) {
                    level = numToLevel(levelToNum(value) + duoBadges[key]).toLowerCase();
                    if(level != value.toLowerCase())
                        upgraded = true;
                }
            }

            if ((duoBadges != undefined || duoBadges != null) && (evoBadges != undefined || evoBadges != null)) {
                if ((duoBadges[key] != undefined || duoBadges[key] != null) && (evoBadges[key] != undefined || evoBadges[key] != null)) {
                    level = numToLevel(levelToNum(value) + duoBadges[key] + evoBadges[key]).toLowerCase();
                    if(level != value.toLowerCase())
                        upgraded = true;
                }
            }

            let imgSource = `${name}_${level}.png`;
            
            if (level === "yes")
                imgSource = "personality.png";
            if (level === "none")
                imgSource = "badge_none.png";

            let img = (
                <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge" key={`${name}-${levelToNum(level)}`}>
                    <div className="container is-vcentered">
                        <figure className="image is-48x48" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <img src={`https://2kdbimg.com/64x64/${imgSource}`} />
                        </figure>
                        {renderNotification(upgraded)}
                        <p className="is-size-7 has-text-centered"> {formatName(key)} </p>
                    </div>
                </div>
            )
            badgeImgs.push(img)
        }

        badgeImgs.sort((a, b) => {
            let [nameA, levelA] = a.key.split("-");
            let [nameB, levelB] = b.key.split("-");
            
            if (levelA > levelB) {
                return -1;
            } else if (levelA === levelB) {
                if (nameA > nameB) {
                    return 1;
                } else {
                    return -1;
                }
            } else {
                return 1;
            }
        })
        return badgeImgs;
    }

    return (
        <div className="columns is-gapless is-mobile is-multiline">
            {renderBadges()}
        </div>
    )
}