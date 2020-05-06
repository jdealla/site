import { Fragment } from "react";
import { useRouter } from 'next/router'

export default function PlayersList(props) {
    const { players } = props;
    const router = useRouter()

    const getPlayerHeight = (height) => {
        let heightString = "";
        let feet = height / 12;

        if (Number.isInteger(feet)) return `${feet}'`;

        heightString += parseInt(feet).toString();
        let feetInches = parseInt(feet) * 12;
        let inches = height - feetInches;

        heightString += `'${inches}"`

        return heightString;
    }
    
    const handleClick = (e, playerId) => {
        e.preventDefault();
        router.push(`/players/${playerId}`)
    }

    return players.map(player => {
        return (
            <Fragment key={player.id}>
                <div className="columns is-mobile is-gapless is-marginless" id="player-link" onClick={(e) => handleClick(e, player.id)}>
                    <div className="column is-one-fifth-mobile is-2-tablet">
                        {player.name}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.overall}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {player.position}{player.secondary_position != null ? `/${player.secondary_position}` : ""}
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        {getPlayerHeight(player.height)}
                    </div>
                    <div className="column is-one-fifth-mobile is-2-tablet">
                        <div className="tags has-addons">
                            <span className="tag HOF">{player.hof_badges}</span>
                            <span className="tag Gold">{player.gold_badges}</span>
                            <span className="tag Silver">{player.silver_badges}</span>
                            <span className="tag Bronze">{player.bronze_badges}</span>
                        </div>
                    </div>
                </div>
                <div className="divider is-right"></div>
            </Fragment>
        )
    })
}