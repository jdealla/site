import { useState } from "react";
import Layout from "../components/layout";

export default function Compare() {
    const [players, setPlayers] = useState({ player1: {}, player2: {}, })

    const handlePlayer = (num, playerObj) => {
        setPlayers({ ...players, [num]: playerObj })
    }

    return (
        <Layout>
            <div className="container">
                <div className="level">
                    <div className="level-item">
                        Searchbar
                    </div>    
                    <div className="level-item">
                        Searchbar
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="column is-6">
                        Stats
                    </div>
                    <div className="column is-6">
                        Stat Numbers and difference
                    </div>
                </div>
            </div>
        </Layout>
    )
}