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
                <div className="column is-4-mobile is-1-desktop" key={i} onClick={() => router.push(`/players/${player.id}`)}>
                    <img style={{ maxWidth: "100px", cursor: "pointer" }} src={require(`images/players/${player.name.replace(/ /g, "_").toLowerCase()}_${player.id}.jpg`)} />
                </div>
            )
        })

        if (players.length > amount) {
            let lastItem = (
                <div className="column is-4-mobile is-2-desktop" key={11} >
                    <p className="subtitle"> +{players.length - amount} more players </p>
                </div>
            )
            newPlayers.push(lastItem);
        }

        return newPlayers;
    }

    return (
        <div className="columns is-multiline is-mobile">
            {renderPlayerCards()}
        </div>
    )
}