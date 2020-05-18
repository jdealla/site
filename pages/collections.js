import { groupedPlayersByProp } from "../lib/players";

import Layout from "../components/layout";
import UpdatedList from "../components/updatedlist";
import SiteHead from "../components/sitehead";

export default function Collections({ groupedByCollection }) {
    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [collection, players] of Object.entries(groupedByCollection)) {
            let collectionObj = (
                <div className="notification" key={i++}>
                    <a className="title is-4" href={`/collection/${collection.toLowerCase().replace(/ /g, "-")}`}>
                        {collection}
                    </a>
                    <UpdatedList players={players} amount={10} />
                </div>
            )
            updates.push(collectionObj);
        }
        return updates;
    }

    return (
        <Layout>
            <SiteHead title="NBA2K20 MyTeam Collections | 2KDB" description="NBA 2K20 MyTeam collections page including every collection in the game" />
            <div className="container">
                <p className="title is-size-4"> MyTeam Collections</p>
                {renderUpdates()}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    let groupedByCollection = await groupedPlayersByProp("collection");

    return {
        props: {
            groupedByCollection
        }
    }
}