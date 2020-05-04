import { useState } from "react";
import Layout from "../components/layout";
import { getPlayersData } from "../lib/players";

export default function Players({ allPlayers }) {
    const [page, setPage] = useState(1)

    const handlePage = (dir) => {
        if (dir === "prev") {

        } else {
            
        }
    }

    const renderPlayerData = () => {
        
    }

    return (
        <Layout>
            <div className="container is-fluid">
                <div className="notification">
                    <div className="">

                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Overall</th>
                                <th>Position</th>
                                <th>Height</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderPlayerData()}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const allPlayers = getPlayersData();

    return {
        props: {
            allPlayers
        }
    }
}