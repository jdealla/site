import Panel from "../components/panel";

export default function FilterBox(props) {
    const { handlePlayers } = props;

    return (
        <div className="container">
            <div className="columns is-mobile">
                <div className="column">
                    <Panel handlePlayers={handlePlayers} panelName="Filter" />
                </div>
                <div className="column">
                    <Panel handlePlayers={handlePlayers} panelName="Sort" />
                </div>
            </div>
        </div>
    )
}