import Head from 'next/head'
import Layout from "../components/layout";
import SearchBar from "../components/searchbar";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>2KDB Homepage</title>
      </Head>
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
    </Layout>
  )
}
