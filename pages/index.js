import { Fragment } from "react";
import { useRouter } from "next/router";

import SiteHead from "../components/sitehead";
import SearchBar from "../components/searchbar";
import NavBar from "../components/navbar"

export default function Home() {
  const router = useRouter();

  const handleClick = (playerId) => router.push(`/players/${playerId}`);

  return (
    <Fragment>
      <SiteHead title="2KDB Homepage" description="NBA 2K20 MyTeam Database Index Page" />
      <section className="hero is-fullheight-with-navbar with-bg">
        <div className="hero-head">
          <NavBar index={true} />
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title has-text-white">
              NBA2K MyTeam Database
            </p>
            <SearchBar handleClick={handleClick} />
          </div>
        </div>

        <div className="hero-footer">
          <div className="container has-text-centered">
            <p className="has-text-white">
              © {new Date().getFullYear()} <strong>2KDB</strong> | All image assets are property of 2K Sports.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
