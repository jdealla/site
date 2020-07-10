import React, { useState, Fragment, useEffect } from "react";
import Head from "next/head";
import { getAllPlayers } from "../lib/players";
import { ratePlayer } from "../lib/ratings";

import Layout from "../components/layout";
import CompareTable from "../components/comparetable";
import CompareHeader from "../components/compareheader";

export default function Compare({ players }) {
    const [compare, setCompare] = useState({ player1: null, player2: null, });
    const [view, setView] = useState("stats");
    const [duoOn, setDuoOn] = useState({ player1: false, player2: false });
    const [evoLevel, setEvoLevel] = useState({ player1: -1, player2: -1 });
    const [trueRatings, setTrueRatings] = useState(false);

    useEffect(() => {
        const { player1, player2 } = compare;
        if (player1 && player2) {
            setTrueRatings({
                player1: ratePlayer(player1[0], duoOn.player1, evoLevel.player1, player1[2], player1[1]),
                player2: ratePlayer(player2[0], duoOn.player2, evoLevel.player2, player2[2], player2[1])
            })
        }
    }, [ compare, duoOn, evoLevel ]);

    const handlePlayer = (num, playerId) => {
        const fetchPlayer = async () => {
            const res = await fetch(`/api/player/${playerId}`);
            const data = await res.json();
            
            delete data["@metadata"];
            
            setCompare({...compare, [num]: data });
        }
        
        if (playerId == null) {
            setCompare({...compare, [num]: playerId });
            setDuoOn({ ...duoOn, [num]: false });
            setEvoLevel({ ...evoLevel, [num]: -1 });
        } else
            fetchPlayer();
    }

    const handleEvo = (playerId, level) => setEvoLevel({ ...evoLevel, [playerId]: level });
    const handleDuo = (playerId) => setDuoOn({ ...duoOn, [playerId]: !duoOn[playerId] });

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
                                   <CompareTable 
                                        tableName="Shooting" firstName={player1[0].info.name} firstStats={player1[0].stats.shooting} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].stats.shooting : ""}
                                        firstDuoStats={duoOn.player1 ? player1[2].stats.shooting : ""} secondName={player2[0].info.name} secondStats={player2[0].stats.shooting} 
                                        secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].stats.shooting : ""} secondDuoStats={duoOn.player2 ? player2[2].stats.shooting : ""}
                                    />
                                   <CompareTable 
                                        tableName="Inside Scoring" firstName={player1[0].info.name} firstStats={player1[0].stats.inside} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].stats.inside : ""}
                                        firstDuoStats={duoOn.player1 ? player1[2].stats.inside : ""} secondName={player2[0].info.name} secondStats={player2[0].stats.inside} 
                                        secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].stats.inside : ""} secondDuoStats={duoOn.player2 ? player2[2].stats.inside : ""}
                                    />
                                   <CompareTable 
                                        tableName="Playmaking" firstName={player1[0].info.name} firstStats={player1[0].stats.playmaking} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].stats.playmaking : ""}
                                        firstDuoStats={duoOn.player1 ? player1[2].stats.playmaking : ""} secondName={player2[0].info.name} secondStats={player2[0].stats.playmaking} 
                                        secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].stats.playmaking : ""} secondDuoStats={duoOn.player2 ? player2[2].stats.playmaking : ""}
                                   />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                  <CompareTable 
                                        tableName="Athleticism" firstName={player1[0].info.name} firstStats={player1[0].stats.athleticism} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].stats.athleticism : ""}
                                        firstDuoStats={duoOn.player1 ? player1[2].stats.athleticism : ""} secondName={player2[0].info.name} secondStats={player2[0].stats.athleticism} 
                                        secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].stats.athleticism : ""} secondDuoStats={duoOn.player2 ? player2[2].stats.athleticism : ""}
                                  />
                                  <CompareTable 
                                        tableName="Defense" firstName={player1[0].info.name} firstStats={player1[0].stats.defense} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].stats.defense : ""}
                                        firstDuoStats={duoOn.player1 ? player1[2].stats.defense : ""} secondName={player2[0].info.name} secondStats={player2[0].stats.defense} 
                                        secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].stats.defense : ""} secondDuoStats={duoOn.player2 ? player2[2].stats.defense : ""}
                                  />
                                  <CompareTable 
                                        tableName="Rebound" firstName={player1[0].info.name} firstStats={player1[0].stats.rebound} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].stats.rebound : ""}
                                        firstDuoStats={duoOn.player1 ? player1[2].stats.rebound : ""} secondName={player2[0].info.name} secondStats={player2[0].stats.rebound} 
                                        secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].stats.rebound : ""} secondDuoStats={duoOn.player2 ? player2[2].stats.rebound : ""}
                                  />
                                  <CompareTable 
                                        tableName="Potential" firstName={player1[0].info.name} firstStats={player1[0].stats.potential} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].stats.potential : ""}
                                        firstDuoStats={duoOn.player1 ? player1[2].stats.potential : ""} secondName={player2[0].info.name} secondStats={player2[0].stats.potential} 
                                        secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].stats.potential : ""} secondDuoStats={duoOn.player2 ? player2[2].stats.potential : ""}
                                  />
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
                                <CompareTable 
                                    isBadges={true} tableName="Finishing Badges" firstName={player1[0].info.name} firstStats={player1[0].badges.finishing} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].badges.finishing : ""}
                                    firstDuoStats={duoOn.player1 ? player1[2].badges.finishing : ""} secondName={player2[0].info.name} secondStats={player2[0].badges.finishing} 
                                    secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].badges.finishing : ""} secondDuoStats={duoOn.player2 ? player2[2].badges.finishing : ""}
                                />
                                <CompareTable 
                                    isBadges={true} tableName="Playmaking Badges" firstName={player1[0].info.name} firstStats={player1[0].badges.playmaking} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].badges.playmaking : ""}
                                    firstDuoStats={duoOn.player1 ? player1[2].badges.playmaking : ""} secondName={player2[0].info.name} secondStats={player2[0].badges.playmaking} 
                                    secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].badges.playmaking : ""} secondDuoStats={duoOn.player2 ? player2[2].badges.playmaking : ""}
                                />
                              </table>
							</div>  
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable 
                                    isBadges={true} tableName="Shooting Badges" firstName={player1[0].info.name} firstStats={player1[0].badges.shooting} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].badges.shooting : ""}
                                    firstDuoStats={duoOn.player1 ? player1[2].badges.shooting : ""} secondName={player2[0].info.name} secondStats={player2[0].badges.shooting} 
                                    secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].badges.shooting : ""} secondDuoStats={duoOn.player2 ? player2[2].badges.shooting : ""}
                                />
                                <CompareTable 
                                    isBadges={true} tableName="Defensive Badges" firstName={player1[0].info.name} firstStats={player1[0].badges.defensive} firstEvoStats={evoLevel.player1 != -1 ? player1[1][evoLevel.player1].badges.defensive : ""}
                                    firstDuoStats={duoOn.player1 ? player1[2].badges.defensive : ""} secondName={player2[0].info.name} secondStats={player2[0].badges.defensive} 
                                    secondEvoStats={evoLevel.player2 != -1 ? player2[1][evoLevel.player2].badges.defensive : ""} secondDuoStats={duoOn.player2 ? player2[2].badges.defensive : ""}
                                />
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
                                <CompareTable tableName="Inside" firstName={player1[0].info.name} firstStats={player1[0].tendencies.inside} secondName={player2[0].info.name} secondStats={player2[0].tendencies.inside} />
                                <CompareTable tableName="Iso" firstName={player1[0].info.name} firstStats={player1[0].tendencies.iso} secondName={player2[0].info.name} secondStats={player2[0].tendencies.iso} />
                                <CompareTable tableName="Defense" firstName={player1[0].info.name} firstStats={player1[0].tendencies.defense} secondName={player2[0].info.name} secondStats={player2[0].tendencies.defense} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Shooting" firstName={player1[0].info.name} firstStats={player1[0].tendencies.shooting} secondName={player2[0].info.name} secondStats={player2[0].tendencies.shooting} />
                                <CompareTable tableName="Drive" firstName={player1[0].info.name} firstStats={player1[0].tendencies.drive} secondName={player2[0].info.name} secondStats={player2[0].tendencies.drive} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Post" firstName={player1[0].info.name} firstStats={player1[0].tendencies.post} secondName={player2[0].info.name} secondStats={player2[0].tendencies.post} />
                                <CompareTable tableName="Freelance" firstName={player1[0].info.name} firstStats={player1[0].tendencies.freelance} secondName={player2[0].info.name} secondStats={player2[0].tendencies.freelance} />
                                <CompareTable tableName="Passing" firstName={player1[0].info.name} firstStats={player1[0].tendencies.passing} secondName={player2[0].info.name} secondStats={player2[0].tendencies.passing} />
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
                                <CompareTable tableName="Shooting" firstName={player1[0].info.name} firstStats={player1[0].animations.shooting} secondName={player2[0].info.name} secondStats={player2[0].animations.shooting} diff={false} />
                                <CompareTable tableName="Post" firstName={player1[0].info.name} firstStats={player1[0].animations.post} secondName={player2[0].info.name} secondStats={player2[0].animations.post} diff={false} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Dribble Moves" firstName={player1[0].info.name} firstStats={player1[0].animations.ballhandle} secondName={player2[0].info.name} secondStats={player2[0].animations.ballhandle} diff={false} />
                                <CompareTable tableName="Handedness" firstName={player1[0].info.name} firstStats={player1[0].animations.hands} secondName={player2[0].info.name} secondStats={player2[0].animations.hands} diff={false} />
                              </table>
							</div>
                            <div className="column">
							  <table className="table is-striped is-fullwidth">
                                <CompareTable tableName="Layups / Dunks" firstName={player1[0].info.name} firstStats={player1[0].animations.layup} secondName={player2[0].info.name} secondStats={player2[0].animations.layup} diff={false} />
                              </table>
							</div>
                        </Fragment>
                    )
            }
            case "trueRatings": {
                if (player1 == null || player2 == null || typeof player1 === "string" || typeof player2 === "string" || !trueRatings)
                    return heroView;
                else 
                    return (
                        <Fragment>
                            <div className="column">
                                <table className="table is-striped is-fullwidth">
                                    <CompareTable 
                                        tableName={player1[0].info.name} firstName={trueRatings.player1[0].position} firstStats={{"overall": trueRatings.player1[0].overall, ...trueRatings.player1[0].sections}} secondName={trueRatings.player1.length > 1 ? trueRatings.player1[1].position : false} secondStats={trueRatings.player1.length > 1 ? {"overall": trueRatings.player1[1].overall, ...trueRatings.player1[1].sections} : false} diff={false}
                                        thirdName={trueRatings.player1.length > 2 ? trueRatings.player1[2].position : false} thirdStats={trueRatings.player1.length > 2? {"overall": trueRatings.player1[2].overall, ...trueRatings.player1[2].sections} : false} isTrueRating={true}
                                        />
                                </table>
                            </div>
                            <div className="column">
                            <table className="table is-striped is-fullwidth">
                                    <CompareTable 
                                        tableName={player2[0].info.name} firstName={trueRatings.player2[0].position} firstStats={{"overall": trueRatings.player2[0].overall, ...trueRatings.player2[0].sections}} secondName={trueRatings.player2.length > 1 ? trueRatings.player2[1].position : false} secondStats={trueRatings.player2.length > 1 ? {"overall": trueRatings.player2[1].overall, ...trueRatings.player2[1].sections} : false} diff={false}
                                        thirdName={trueRatings.player2.length > 2 ? trueRatings.player2[2].position : false} thirdStats={trueRatings.player2.length > 2? {"overall": trueRatings.player2[2].overall, ...trueRatings.player2[2].sections} : false} isTrueRating={true}
                                        />
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
            <div className="container compare-header">
                <CompareHeader players={players} handlePlayer={handlePlayer} compare={compare} duoOn={duoOn} evoLevel={evoLevel} handleEvo={handleEvo} handleDuo={handleDuo} />

                <div className="container">
                    <div className="tabs is-boxed is-centered">
                        <ul>
                            <li className={view === "stats" ? "is-active" : ""} onClick={() => setView("stats")}><a>Stats</a></li>
                            <li className={view === "badges" ? "is-active" : ""} onClick={() => setView("badges")}><a>Badges</a></li>
                            <li className={view === "tendencies" ? "is-active" : ""} onClick={() => setView("tendencies")}><a>Tendencies</a></li>
                            <li className={view === "animations" ? "is-active" : ""} onClick={() => setView("animations")}><a>Animations</a></li>
                            <li className={view === "trueRatings" ? "is-active" : ""} onClick={() => setView("trueRatings")}><a>True Ratings</a></li>
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
    const players = await getAllPlayers().catch(console.error);
  
    for(let i = 0; i < players.length; i++) {
      delete players[i]["@metadata"]
    }
  
    return {
      props: {
        players,
      },
      unstable_revalidate: 300
    }
}