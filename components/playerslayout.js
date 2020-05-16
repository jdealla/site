export default function PlayersLayout(props) {
    const { players } = props;

    const renderPlayers = () => {
        return players.map((player, i) => {
            return (
                <div className="column is-2-desktop is-half-mobile" key={i}>
                    <a href={`/players/${player.id}`}>
                        <img style={{ maxWidth: "200px", cursor: "pointer" }} src={require(`images/players/${player.name.replace(/ /g, "_").toLowerCase()}_${player.id}.jpg`)} />
                    </a>
                </div>
            )
        })
    }

    return (
        <div className="box is-flex">
            <div className="columns is-multiline is-mobile">
                {renderPlayers()}
            </div>
        </div>
    )
}