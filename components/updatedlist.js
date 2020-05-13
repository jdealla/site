import { useRouter } from "next/router";

export default function UpdatedList(props) {
    const { players } = props;
    const router = useRouter();

    const renderPlayerCards = () => {
        let playersToRender = players;

        if (players.length > 10) {
            playersToRender = players.slice(0, 10);
        }
        
        let newPlayers = playersToRender.map((player, i) => {
            return (
                <div className="column is-4-mobile is-1-desktop" key={i} onClick={() => router.push(`/players/${player.id}`)}>
                    <img style={{ maxWidth: "100px", cursor: "pointer" }} src={`/players/${player.name.replace(/ /g, "_").toLowerCase()}_${player.id}.jpg`} />
                </div>
            )
        })

        if (players.length > 10) {
            let lastItem = (
                <div className="column is-4-mobile is-2-desktop" key={11} >
                    <p className="subtitle"> +{players.length - 10} more players </p>
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