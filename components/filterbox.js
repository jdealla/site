export default function FilterBox(props) {
    const { handlePlayers } = props;

    return (
        <div className="container">
            <div className="columns is-mobile">
                <div className="column">
                    <div className="box">
                        Filter
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                        Sort
                    </div>
                </div>
            </div>
        </div>
    )
}