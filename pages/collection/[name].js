import { useRouter } from "next/router";
import { getCollections, getPlayersByPropValue } from "../../lib/players";

import SiteHead from "../../components/sitehead";
import Layout from "../../components/layout";
import UpdatesList from "../../components/updateslist";
import Spinner from "../../components/spinner";

export default function Collection({ players }) {
    const router = useRouter();

    if (router.isFallback) {
        return <Spinner />
    }

    return (
        <Layout>
            <SiteHead title={`${players[0].collection} | 2KDB`} description={`NBA 2K20 MyTeam ${players[0].collection} collection of player cards`} />
            <div className="container">
                <p className="title is-size-5">{players[0].collection}</p>
                <UpdatesList players={players} amount={players.length} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getCollections();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let nameArray = params.name.split("-");
    let formatted = "";

    if (nameArray.length === 1)
        formatted = nameArray[0].charAt(0).toUpperCase() + nameArray[0].substring(1);

    formatted = nameArray.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");

    const players = await getPlayersByPropValue("collection", formatted);

    await players.sort((a, b) => a.theme < b.theme);

    return {
        props: {
            players
        }
    }
}