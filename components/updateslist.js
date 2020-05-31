import React from "react";
import { useRouter } from "next/router";
import ImageCloud from "./imagecloud";

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
            return (
                <td className="is-paddingless" key={i} onClick={() => router.push(`/player/${player.id}`)}>
                    <ImageCloud src={`players/${player.name.replace(/( |')/g, "_").toLowerCase()}_${player.id}.jpg`} width={120} />
                </td>
            )
        })

        if (players.length > amount) {
            let lastItem = (
                <td className="is-size-7-mobile is-size-6-tablet" key={amount + 1} >
                    <a className="heading" href={`/updates/${date}`} > +{players.length - amount} more players </a>
                </td>
            )
            newPlayers.push(lastItem);
        }

        return newPlayers;
    }

    return renderPlayerCards();
}