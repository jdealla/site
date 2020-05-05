import { Fragment, useState } from "react";
import { useRouter } from 'next/router'
import Layout from "../components/layout";
import { getPlayersData, getPlayersByPage } from "../lib/players";

export default function Players({ allPlayers, length }) {
    const [page, setPage] = useState(1)
    const [players, setPlayers] = useState(getPlayersByPage(1));
    const router = useRouter()

    const handlePage = (dir) => {
        if (dir === "prev") {
            setPage(page - 1);
        } else {
            setPage(page + 1);
        }
        setPlayers(getPlayersByPage(page))
    }

    const handleClick = (e, playerId) => {
        e.preventDefault();
        router.push(`/players/${playerId}`)
    }

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

    const renderPlayerData = () => {
        return players.map(player => {
            return (
                <Fragment>
                    <div className="columns is-mobile is-gapless is-marginless" onClick={(e) => handleClick(e, player.id)} key={player.id} id="player-link">
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
        });
    }

    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-full">
                        Filter component
                    </div>
                </div>
                <div className="divider is-right"></div>
                <div className="columns is-mobile is-gapless">
                    <div className="column is-one-fifth-mobile is-2-tablet">
                        <p className="has-text-weight-semibold "> Name </p>
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        <p className="has-text-weight-semibold "> Overall </p>
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        <p className="has-text-weight-semibold "> Position </p>
                    </div>
                    <div className="column is-one-fifth-mobile is-1-tablet">
                        <p className="has-text-weight-semibold "> Height </p>
                    </div>
                    <div className="column is-one-fifth-mobile is-2-tablet">
                        <p className="has-text-weight-semibold "> Badges </p>
                    </div>
                </div>
                <div className="divider is-right"></div>
                {renderPlayerData()}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPlayers = getPlayersData();
    const length = allPlayers.length;

    return {
        props: {
            allPlayers,
            length
        }
    }
}