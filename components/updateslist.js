import React, { Fragment } from "react";

export default function UpdatedList(props) {
    const { players, amount } = props;

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
			   <Fragment key={i}>
                    <a className="updates-cards hvr-float" href={`/player/${player.id}`}>
                        <img src={`https://2kdbimg.com/35/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} />
                    </a>
		            <span style={imgBg} className="popup-img" />
			   </Fragment>
            )
        })


        return newPlayers;
    }

    return renderPlayerCards();
}