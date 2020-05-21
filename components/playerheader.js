import { getAllShoes, shoeButton } from "../lib/shoes";

import ShotChart from "./shotchart";
import Dropdown from "./dropdown";
import ImageCloud from "./imagecloud";

export default function PlayerHeader(props) {
    const { playerData, shoe, handleShoe, } = props;

    const renderShoeList = () => {
        return getAllShoes().map((shoe, i) => {
            return (
                <a key={i} className="dropdown-item" onClick={() => handleShoe(shoe)} >
                    {shoe.name}
                </a>
            )
        })
    }

    return (
        <div className="columns is-mobile is-multiline is-player-card">
            <div className="is-player-card"><img src="/images/backgrounds/playercard_bg.png" /></div>
            <div className="column is-7-mobile is-one-fifth-desktop is-2-tablet ">
                <ImageCloud src={`/players/${playerData.info.name.replace(/ /g, "_").toLowerCase()}_${playerData.info.id}.jpg`} width="2000" height="432" />
            </div>
            <div className="column is-5-mobile is-5-desktop is-2-tablet has-padding-2 is-player-info">
                <p className="title is-size-3 has-text-weight-bold has-text-white">{playerData.info.name}</p>
                <p className="subtitle is-paddingless is-size-6-desktop is-size-7-mobile has-text-warning has-text-weight-semibold"> 
                    <a href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}`}>{playerData.info.collection} </a>
                    / 
                    <a href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a>
                </p>
                <div className="subtitle is-size-6 is-size-7-mobile has-text-white">
                    <nav className="level ">
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">Overall</p>
                                <p className="title is-1 title has-text-white">
                                    {playerData.info.overall}
                                </p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">Off. Overall</p>
                                <p className="title is-5 title has-text-white">{playerData.info.off_overall}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">Def. Overall</p>
                                <p className="title is-5 has-text-white">{playerData.info.def_overall}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">Position</p>
                                <p className="title is-5 has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">Height</p>
                                <p className="title is-5 has-text-white">{playerData.info.height}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">Weight</p>
                                <p className="title is-5 has-text-white">{playerData.info.weight} lbs</p>
                            </div>
                        </div>
                    </nav>
                    <nav className="level ">
                        {
                            playerData.info.nickname != " " ? (
                                <div className="level-item has-text-centered">
                                    <div>
                                        <p className="heading has-text-warning">Nickname</p>
                                        <p className="title is-4 has-text-white">{playerData.info.nickname}</p>
                                    </div>
                                </div>
                            ) : ""
                        }
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">Team</p>
                                <p className="title is-4 has-text-white">{playerData.info.team}</p>
                            </div>
                        </div>
                        <div className="level-item has-text-centered">
                            <div>
                                <p className="heading has-text-warning">From</p>
                                <p className="title is-4 has-text-white">{playerData.info.college}</p>
                            </div>
                        </div>
                    </nav>
                    <nav className="level ">
                        <div className="level-item has-text-centered">
                            <div className="columns is-centered">
                                <div className="column">
                                    <p className="heading has-text-warning">Plays</p>
                                    <div className="tags has-addons is-rounded has-text-weight-bold">
                                        <span className="tag is-dark">{playerData.info.play1}</span>
                                        <span className="tag is-dark">{playerData.info.play2}</span>
                                        <span className="tag is-dark">{playerData.info.play3}</span>
                                        <span className="tag is-dark">{playerData.info.play4}</span>
                                    </div> 

                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            {
                                shoe == null ? (
                                    <Dropdown hover={true} items={renderShoeList()} customButton={shoeButton} />
                                ) : (
                                    <article className="media">
                                        <div className="media-content">
                                            <div className="content">
                                                <p className="title">{shoe.brand}</p>
                                                <p className="subtitle">{shoe.name}</p>
                                            </div>
                                        </div>
                                        <div className="media-right">
                                            <button className="delete" onClick={handleShoe(null)}></button>
                                        </div>
                                    </article>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="column is-11-mobile is-one-fifth-desktop is-2-tablet">
            
            <p className="subtitle has-text-weight-bold is-size-6 is-size-7-mobile has-text-warning">Hot Zones:</p>
            <ShotChart hotzones={playerData.hotzones} />  
            
                <p className="subtitle has-text-weight-bold is-size-6 is-size-7-mobile has-text-warning">Badges:</p>
                <div className="level ">
                    <div className="level-item is-size-5 has-text-centered">
                        <figure className="image is-64x64">
                            <ImageCloud src="/images/icons/icon_badge_bronze.png" height="61" width="64" />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.bronzeBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <ImageCloud src="/images/icons/icon_badge_silver.png" height="61" width="64" />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.silverBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <ImageCloud src="/images/icons/icon_badge_gold.png" height="61" width="64" />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.goldBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <ImageCloud src="/images/icons/icon_badge_hof.png" height="61" width="64" />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.hofBadges}</p>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}