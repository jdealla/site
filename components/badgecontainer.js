import { formatName } from "../lib/players";

import styles from "./badgecontainer.module.css";

export default function BadgesContainer(props) {
    const { badges } = props;

    const renderBadges = () => {
        let badgeImgs = [];
        let i = 0;

        // sort before loop
        const levelToNum = (level) => {
            switch(level) {
                case 'HOF': return 4;
                case 'Gold': return 3;
                case 'Silver': return 2;
                case 'Bronze': return 1;
                case 'Yes': return 1;
                default: return 0;
            }
        }

        // let sorted = Object.entries(badges).sort((a, b) => {
        //     let aLevel = levelToNum(badges[a]);
        //     let bLevel = levelToNum(badges[b]);
            
        //     return (aLevel > bLevel) ? -1 : 1
        // }).reduce((sortedObj, key) => ({
        //     ...sortedObj,
        //     [key]: badges[key]
        // }), {})

        // console.log(sorted)

        for(const [key, value] of Object.entries(badges)) {
            let name = key.replace(/_/g, "");
            let level = value.toLowerCase();

            let imgSource = `/badges/${name}_${level}.png`;
            
            if (level === "yes")
                imgSource = "/badges/personality.png";
            if (level === "none")
                imgSource = "/badges/badge_none.png";

            let img = (
                <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge" key={i++}>
                    <div className="container is-vcentered">
                        <figure className="image is-48x48" style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <img src={imgSource} />
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