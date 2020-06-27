import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAllPlayers } from "../lib/players";

import Layout from "../components/layout";
import SearchBar from "../components/searchbar";

export default function Home({ players }) {
  const router = useRouter();

  const handleClick = (playerId) => router.push(`/player/${playerId}`);

  return (
    <Layout players={[]} searchOn={false}>
      <Head>
        <title>2KDB Homepage</title>
        <meta name="description" content="NBA 2K20 MyTeam Database Index Page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              NBA2K MyTeam Database
            </p>
            <SearchBar handleClick={handleClick} players={players} placeholder="Search players..." />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const players = await getAllPlayers()
                        .catch(console.error);

  return {
    props: {
      players,
    },
    unstable_revalidate: 10
  }
}
