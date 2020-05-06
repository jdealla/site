import Panel from "../components/panel";

export default function FilterBox(props) {
    const { handlePlayers } = props;

    return (
        <div className="container">
            <div className="columns is-mobile">
                <div className="column is-full">
                    <Panel handlePlayers={handlePlayers} />
                </div>
            </div>
        </div>
    )
}