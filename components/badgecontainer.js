export default function BadgesContainer(props) {
    const { badges } = props;

    const renderBadges = () => {
        let badgeImgs = [];
        let i = 0;
        for(const [key, value] of Object.entries(badges)) {
            let name = key.replace(/_/g, "");
            let level = value.toLowerCase();

            let imgSource = `/badges/${name}_${level}.png`;
            
            if (level === "yes")
                imgSource = "/badges/personality.png";
            if (level === "none")
                imgSource = "/badges/badge_none.png";

            let img = (
                <div className="column is-paddingless">
                    <div className="container is-centered has-text-centered">
                        <figure className="image is-48x48" key={i++} style={{ marginLeft: "auto", marginRight: "auto" }}>
                            <img src={imgSource} />
                        </figure>
                        <p className="is-size-7"> {key.replace(/_/g, " ")} </p>
                    </div>
                </div>
            )
            badgeImgs.push(img)
        }
        return badgeImgs;
    }

    return (
        <div className="columns is-gapless">
            {renderBadges()}
        </div>
    )
}