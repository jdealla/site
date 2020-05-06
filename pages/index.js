import Head from 'next/head'
import SearchBar from "../components/searchbar";
import NavBar from "../components/navbar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>2KDB Homepage</title>
      </Head>
      <NavBar index={true} />
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">
              NBA 2K MyTeam Database
            </p>
            <SearchBar />
          </div>
        </div>
      </section>
    </div>
  )
}
