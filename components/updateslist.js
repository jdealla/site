import React from "react";
import { useRouter } from "next/router";

export default function UpdatedList(props) {
    const { date, players, amount } = props;
    const router = useRouter();

    const renderPlayerCards = () => {
        let playersToRender = players;

        playersToRender.sort((a, b) => a.overall > b.overall ? -1 : (a.overall === b.overall) ? ((a.name > b.name) ? 1 : -1) : 1);

        if (players.length > amount) {
            playersToRender = players.slice(0, amount);
        }
        
        let newPlayers = playersToRender.map((player, i) => {
			let imgBg = {
                    backgroundImage: `url(https://2kdbimg.com/300/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg)`,
            };
            return (
			   <>
                <a className="updates-cards hvr-float" key={i} href={`/player/${player.id}`}>
                    <img src={`https://2kdbimg.com/35/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                </a>
				
		        <span style={imgBg} className="popup-img" />
			   </>
            )
        })


        return newPlayers;
    }

    return renderPlayerCards();
}