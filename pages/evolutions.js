import { getAllEvos } from "../lib/evos";

export default function Evolutions({ players }) {
    return (
        <>
            <Head>
                <title>2KDB All Evolution Cards</title>
                <meta name="description" content="NBA 2K20 MyTeam Database page showing all evolution cards" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="container">
                <div className="box">

                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {
    const players = await getAllEvos()
                          .catch(console.error)
  
    for(let i = 0; i < players.length; i++) {
      delete players[i]["@metadata"]
    }
  
    return {
      props: {
        players,
      },
      unstable_revalidate: 1
    }
}