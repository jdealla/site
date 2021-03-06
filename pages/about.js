import React from "react";
import Head from "next/head";
import { getAllPlayers } from "../lib/players";

import Layout from "../components/layout";

export default function About({ players }) {

  return (
    <Layout players={players} searchOn={true}>
      <Head>
        <title>2KDB About Page</title>
        <meta name="description" content="NBA 2K20 MyTeam Database About Page" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container">
            <div className="content">
                <p className="has-text-weight-semibold"> 
                  Created by <a href="https://2kgamer.com/u/kennymck69">KennyMcK69</a> and <a href="https://2kgamer.com/u/chknwaffles">chknwaffles</a>
                </p>
                <p className="has-text-weight-semibold">
                  Huge credit to <a href="https://2kgamer.com/u/jdealla/">jdealla</a> for helping out with the site too!
                </p>
                <p>
                  If you want to give us feedback or suggestions on new features or report on any bugs let us know on <a href="https://2kgamer.com/t/2kdb-kennys-website/90748">2KGamer</a>
                </p>
                <p> Also, if you like our site and would like to help keep the site up, you can donate by clicking the donate button below. Thank you! </p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="AU9DPNYHSU3ZG" />
                    <input type="hidden" name="item_name" value="For site operations" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
    const players = await getAllPlayers().catch(console.error);
  
    return {
      props: {
        players,
      },
      unstable_revalidate: 300
    }
  }
  

