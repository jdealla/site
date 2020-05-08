import Head from "next/head";
import { useRouter } from "next/router";

import SearchBar from "../components/searchbar";
import NavBar from "../components/navbar"

export default function Home() {
  const router = useRouter()

  const handleClick = (playerId) => router.push(`/players/${playerId}`)

  return (
    <div>
      <Head>
        <title>2KDB Homepage</title>
      </Head>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-head">
          <NavBar index={true} />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              NBA2K MyTeam Database
            </p>
            <SearchBar handleClick={handleClick} />
          </div>
        </div>

        <div className="hero-footer">
          <div className="container has-text-centered">
            <p>
              © {new Date().getFullYear()} <strong>2KDB</strong> | All image assets are property of 2K Sports.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
