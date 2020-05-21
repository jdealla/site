import { useRouter } from "next/router";

export default function UpdatedList(props) {
    const { players, amount } = props;
    const router = useRouter();

    const renderPlayerCards = () => {
        let playersToRender = players;

        if (players.length > amount) {
            playersToRender = players.slice(0, amount);
        }
        
        let newPlayers = playersToRender.map((player, i) => {
            return (
                <td className="is-paddingless" key={i} onClick={() => router.push(`/players/${player.id}`)}>
                    <img style={{ maxWidth: "50px", cursor: "pointer" }} src={`/images/players/${player.name.replace(/ /g, "_").toLowerCase()}_${player.id}.jpg`} />
                </td>
            )
        })

        if (players.length > amount) {
            let lastItem = (
                <td key={amount + 1} >
                    <a className="heading" href={`/updates/${players[0].date}`} > +{players.length - amount} more players </a>
                </td>
            )
            newPlayers.push(lastItem);
        }

        return newPlayers;
    }

    return renderPlayerCards()
}