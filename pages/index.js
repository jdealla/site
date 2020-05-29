import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import SearchBar from "../components/searchbar";

export default function Home() {
  const router = useRouter();

  const handleClick = (playerId) => router.push(`/players/${playerId}`);

  return (
    <>
      <Head>
        <title>2KDB Homepage</title>
        <meta name="description" content="NBA 2K20 MyTeam Database Index Page"></meta>
      </Head>
      <section className="hero is-fullheight-with-navbar with-bg">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-white">
              NBA2K MyTeam Database
            </p>
            {/* <SearchBar handleClick={handleClick} /> */}
          </div>
        </div>
      </section>
    </>
  )
}
