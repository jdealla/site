import Head from "next/head";
import { useRouter } from "next/router";
import { groupedPlayersByProp } from "../lib/players";

import Layout from "../components/layout";
import UpdatedList from "../components/updatedlist";

export default function Collections({ groupedByCollection }) {
    const router = useRouter();

    const renderUpdates = () => {
        let updates = [], i = 0;
        for(let [collection, players] of Object.entries(groupedByCollection)) {
            let collectionObj = (
                <div className="notification" key={i++}>
                    <p className="title is-4" onClick={() => router.push(`/collection/${collection.toLowerCase().replace(/ /g, "-")}`)} >{collection}</p>
                    <UpdatedList players={players} amount={10} />
                </div>
            )
            updates.push(collectionObj);
        }
        return updates;
    }

    return (
        <Layout>
            <Head>
                <title>2KDB | NBA2K20 MyTeam Collections</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <p className="title is-size-4"> MyTeam Collections</p>
                {renderUpdates()}
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    let groupedByCollection = groupedPlayersByProp("collection");

    return {
        props: {
            groupedByCollection
        }
    }
}