import ImageCloud from "./imagecloud";

export default function OverallImage(props) {
    const { overall } = props;

    const renderOverall = () => {
        let tier = "";

        switch(true) {
            case (overall <= 69): tier = "bronze"; break; 
            case (overall <= 75): tier = "silver"; break;
            case (overall <= 79): tier = "gold"; break;
            case (overall <= 83): tier = "emerald"; break;
            case (overall <= 86): tier = "sapphire"; break;
            case (overall <= 89): tier = "ruby"; break;
            case (overall <= 92): tier = "amethyst"; break;
            case (overall <= 95): tier = "diamond"; break;
            case (overall <= 98): tier = "pinkdiamond"; break;
            case (overall == 99): tier = "galaxyopal"; break;
        }

        return <ImageCloud src={`icons/icon_${tier}.png`} width="32" height="32" />
    }

    return renderOverall();
}