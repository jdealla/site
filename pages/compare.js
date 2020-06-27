import React, { useState, Fragment } from "react";
import Head from "next/head";
import { getAllPlayers } from "../lib/players";

import Layout from "../components/layout";
import CompareTable from "../components/comparetable";
import CompareHeader from "../components/compareheader";

export default function Compare({ players }) {
    const [compare, setCompare] = useState({ player1: null, player2: null, });
    const [view, setView] = useState("stats");

    const handlePlayer = (num, playerId) => {
        const fetchPlayer = async () => {
            const res = await fetch(`/api/player/${playerId}`);
            const data = await res.json();
            
            delete data["@metadata"];
            
            setCompare({...compare, [num]: data });
        }
        
        if (playerId == null)
            setCompare({...compare, [num]: playerId });
        else
            fetchPlayer();
    }

    const renderView = () => {
        const { player1, player2 } = compare;

        const heroView = (
            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body">
                    <div className="container has-text-centered">
                    </div>
                </div>
            </section>
        )

        switch(view) {
            case "stats": {
                if (player1 == null || player2 == null || typeof player1 === "string" || typeof player2 === "string")
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                   <CompareTable tableName="Shooting" firstName={player1.info.name} firstStats={player1.stats.shooting} secondName={player2.info.name} secondStats={player2.stats.shooting} />
                                   <CompareTable tableName="Inside Scoring" firstName={player1.info.name} firstStats={player1.stats.inside} secondName={player2.info.name} secondStats={player2.stats.inside} />
                                   <CompareTable tableName="Playmaking" firstName={player1.info.name} firstStats={player1.stats.playmaking} secondName={player2.info.name} secondStats={player2.stats.playmaking} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                  <CompareTable tableName="Athleticism" firstName={player1.info.name} firstStats={player1.stats.athleticism} secondName={player2.info.name} secondStats={player2.stats.athleticism} />
                                  <CompareTable tableName="Defense" firstName={player1.info.name} firstStats={player1.stats.defense} secondName={player2.info.name} secondStats={player2.stats.defense} />
                                  <CompareTable tableName="Rebound" firstName={player1.info.name} firstStats={player1.stats.rebound} secondName={player2.info.name} secondStats={player2.stats.rebound} />
                                  <CompareTable tableName="Potential" firstName={player1.info.name} firstStats={player1.stats.potential} secondName={player2.info.name} secondStats={player2.stats.potential} />
                              </table>
							</div>
                        </Fragment>
                    )
            }
            case "badges": {
                if (player1 == null || player2 == null || typeof player1 === "string" || typeof player2 === "string")
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable isBadges={true} tableName="Finishing Badges" firstName={player1.info.name} firstStats={player1.badges.finishing} secondName={player2.info.name} secondStats={player2.badges.finishing} />
                                <CompareTable isBadges={true} tableName="Playmaking Badges" firstName={player1.info.name} firstStats={player1.badges.playmaking} secondName={player2.info.name} secondStats={player2.badges.playmaking} />
                              </table>
							</div>  
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable isBadges={true} tableName="Shooting Badges" firstName={player1.info.name} firstStats={player1.badges.shooting} secondName={player2.info.name} secondStats={player2.badges.shooting} />
                                <CompareTable isBadges={true} tableName="Defensive Badges" firstName={player1.info.name} firstStats={player1.badges.defensive} secondName={player2.info.name} secondStats={player2.badges.defensive} />
                              </table>
							</div>
						</Fragment>
                    )
            }
            case "tendencies": {
                if (player1 == null || player2 == null || typeof player1 === "string" || typeof player2 === "string")
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Inside" firstName={player1.info.name} firstStats={player1.tendencies.inside} secondName={player2.info.name} secondStats={player2.tendencies.inside} />
                                <CompareTable tableName="Iso" firstName={player1.info.name} firstStats={player1.tendencies.iso} secondName={player2.info.name} secondStats={player2.tendencies.iso} />
                                <CompareTable tableName="Defense" firstName={player1.info.name} firstStats={player1.tendencies.defense} secondName={player2.info.name} secondStats={player2.tendencies.defense} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Shooting" firstName={player1.info.name} firstStats={player1.tendencies.shooting} secondName={player2.info.name} secondStats={player2.tendencies.shooting} />
                                <CompareTable tableName="Drive" firstName={player1.info.name} firstStats={player1.tendencies.drive} secondName={player2.info.name} secondStats={player2.tendencies.drive} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Post" firstName={player1.info.name} firstStats={player1.tendencies.post} secondName={player2.info.name} secondStats={player2.tendencies.post} />
                                <CompareTable tableName="Freelance" firstName={player1.info.name} firstStats={player1.tendencies.freelance} secondName={player2.info.name} secondStats={player2.tendencies.freelance} />
                                <CompareTable tableName="Passing" firstName={player1.info.name} firstStats={player1.tendencies.passing} secondName={player2.info.name} secondStats={player2.tendencies.passing} />
                              </table>
							</div>
                        </Fragment>
                    )
            }
            case "animations": {
                if (player1 == null || player2 == null || typeof player1 === "string" || typeof player2 === "string")
                    return heroView;
                else
                    return (
                        <Fragment>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Shooting" firstName={player1.info.name} firstStats={player1.animations.shooting} secondName={player2.info.name} secondStats={player2.animations.shooting} diff={false} />
                                <CompareTable tableName="Post" firstName={player1.info.name} firstStats={player1.animations.post} secondName={player2.info.name} secondStats={player2.animations.post} diff={false} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Dribble Moves" firstName={player1.info.name} firstStats={player1.animations.ballhandle} secondName={player2.info.name} secondStats={player2.animations.ballhandle} diff={false} />
                                <CompareTable tableName="Handedness" firstName={player1.info.name} firstStats={player1.animations.hands} secondName={player2.info.name} secondStats={player2.animations.hands} diff={false} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Layups / Dunks" firstName={player1.info.name} firstStats={player1.animations.layup} secondName={player2.info.name} secondStats={player2.animations.layup} diff={false} />
                              </table>
							</div>
                        </Fragment>
                    )
            }
        };
    };

    return (
        <Layout players={players} searchOn={true}>
            <Head>
                <title>Compare NBA 2K20 MyTeam Players Page | 2KDB</title>
                <meta name="description" content="Compare 2 NBA 2K20 MyTeam player cards for their stats, badges, tendencies, and animations"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div className="container" style={{ marginTop: '10px' }}>
                <CompareHeader players={players} handlePlayer={handlePlayer} compare={compare} />

                <div className="container">
                    <div className="tabs is-boxed is-centered">
                        <ul>
                            <li className={view === "stats" ? "is-active" : ""} onClick={() => setView("stats")}><a>Stats</a></li>
                            <li className={view === "badges" ? "is-active" : ""} onClick={() => setView("badges")}><a>Badges</a></li>
                            <li className={view === "tendencies" ? "is-active" : ""} onClick={() => setView("tendencies")}><a>Tendencies</a></li>
                            <li className={view === "animations" ? "is-active" : ""} onClick={() => setView("animations")}><a>Animations</a></li>
                        </ul>
                    </div>
                </div>
                <div className="columns">
                    {renderView()}
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const players = await getAllPlayers()
                        .catch(console.error);
  
    for(let i = 0; i < players.length; i++) {
      delete players[i]["@metadata"]
    }
  
    return {
      props: {
        players,
      },
      unstable_revalidate: 10
    }
}