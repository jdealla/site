import React from "react";
import { useRouter } from "next/router";
import ImageCloud from "./imagecloud";

export default function UpdatedList(props) {
    const { date, players, amount } = props;
    const router = useRouter();

    const renderPlayerCards = () => {
        let playersToRender = players;

        if (players.length > amount) {
            playersToRender = players.slice(0, amount);
        }
        
        let newPlayers = playersToRender.map((player, i) => {
            return (
                <td className="is-paddingless" key={i} onClick={() => router.push(`/players/${player.id}`)}>
                    <figure className="image is-3by4">
                        <ImageCloud src={`players/${player.name.replace(/ /g, "_").toLowerCase()}_${player.id}.jpg`} width={150} height={200} alt={player.name} />
                    </figure>
                </td>
            )
        })

        if (players.length > amount) {
            let lastItem = (
                <td key={amount + 1} >
                    <a className="heading" href={`/updates/${date}`} > +{players.length - amount} more players </a>
                </td>
            )
            newPlayers.push(lastItem);
        }

        return newPlayers;
    }

    return renderPlayerCards()
}