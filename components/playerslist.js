import { Fragment } from "react";

export default function PlayersList(props) {
    const { players } = props;

    return players.map(player => {
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
    })
}