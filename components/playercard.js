import { getAllShoes, shoeButton } from "../lib/shoes";

import ShotChart from "./shotchart";
import Dropdown from "./dropdown";

export default function PlayerCard(props) {
    const { playerData } = props;

    const renderShoeList = () => {
        return getAllShoes().map((shoe, i) => {
            return (
                <a key={i} className="dropdown-item" onClick={() => setShoe(shoe)} >
                    {shoe.name}
                </a>
            )
        })
    }

    return (
        <div className="columns is-mobile is-multiline is-player-card">
            <div className="is-player-card"><img src="/playercard_bg.png" /></div>
            <div className="column is-7-mobile is-one-fifth-desktop is-2-tablet ">
                <img src={require(`images/players/${playerData.info.name.replace(/ /g, "_").toLowerCase()}_${playerData.info.id}.jpg`)} />
            </div>
            <div className="column is-centered is-5-mobile is-5-desktop is-2-tablet has-padding-2 is-player-info">
			    <div className="columns is-vcentered is-centered">
			             <div className="column is-2">
                            <p className="heading has-text-warning" style={{ marginBottom:0 }}>Overall</p>
                            <p className="title is-1 title has-text-white">
                                    {playerData.info.overall}
                            </p>
			            </div>				
					    <div className="column is-9-desktop" style={{ paddingLeft:0 }}>
			                    <p className="title is-size-3 has-text-weight-bold has-text-white">{playerData.info.name}</p>
                                <p className="subtitle is-paddingless is-size-6-desktop is-size-7-mobile has-text-weight-semibold"> 
                                          <a className="has-text-warning" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}`}>{playerData.info.collection} </a>
                                          / 
                                          <a className="has-text-warning" href={`/collection/${playerData.info.collection.toLowerCase().replace(/ /g, "-")}/theme/${playerData.info.theme.toLowerCase().replace(/ /g, "-")}`}> {playerData.info.theme} </a>
                                </p>
				        </div>
                </div>
			  
                <div className="subtitle is-size-6 is-size-7-mobile has-text-white">
					<div className="columns is-vcentered has-text-centered">
					    <div className="column">
                                <p className="heading has-text-warning">Offense</p>
                                <p className="title is-5 title has-text-white">{playerData.info.off_overall}</p>
                        </div>
                        <div className="column">
                                <p className="heading has-text-warning">Defense</p>
                                <p className="title is-5 has-text-white">{playerData.info.def_overall}</p>
                        </div>
						<div className="column">
                                <p className="heading has-text-warning">Position</p>
                                <p className="title is-5 has-text-white">{playerData.info.position}{playerData.info.secondary_position != null ? `/${playerData.info.secondary_position}` : ""}</p>
                        </div>
                        <div className="column">
                                <p className="heading has-text-warning">Height</p>
                                <p className="title is-5 has-text-white">{playerData.info.height}</p>
                        </div>
                        <div className="column">
                                <p className="heading has-text-warning">Weight</p>
                                <p className="title is-5 has-text-white">{playerData.info.weight} lbs</p>
                        </div>
                    </div>
                    <div className="columns has-text-centered"> 
                        <div className="column">
                                <p className="heading has-text-warning">Team</p>
                                <p className="title is-6 has-text-white">{playerData.info.team}</p>
                        </div>
                        <div className="column">
                                <p className="heading has-text-warning">From</p>
                                <p className="title is-6 has-text-white">{playerData.info.college}</p>
                        </div>
						
					{
                            playerData.info.nickname != " " ? (
				
                                <div className="column">
                                    <div>
                                        <p className="heading has-text-warning">Nickname</p>
                                        <p className="title is-6 has-text-white">{playerData.info.nickname}</p>
                                    </div>
                                </div>
				
                            ) : ""
                       }
					   
                    </div>
                            <div className="columns has-text-centered">
                                <div className="column">
                                    <p className="heading has-text-warning">Plays</p>
                                    <div className="tags is-centered is-rounded has-text-weight-bold">
                                        {
											playerData.info.play1 != "None" ? (
											   <span className="tag is-dark">
											             <span className="icon" style={{ color:"#aaa"}}><i className="fas fa-basketball-ball"></i></span> &nbsp;{playerData.info.play1}
											   </span> 
														 ) : ""    
										}
										
                                        {
											playerData.info.play2 != "None" ? (
											   <span className="tag is-dark">
											             <span className="icon" style={{ color:"#aaa"}}><i className="fas fa-basketball-ball"></i></span> &nbsp;{playerData.info.play2}
											   </span> 
														 ) : ""
										}
										
										{
											playerData.info.play3 != "None" ? (
											   <span className="tag is-dark">
											             <span className="icon" style={{ color:"#aaa"}}><i className="fas fa-basketball-ball"></i></span> &nbsp;{playerData.info.play3}
											   </span> 
														 ) : ""
										}
										
										{
											playerData.info.play4 != "None" ? (
											   <span className="tag is-dark">
											             <span className="icon" style={{ color:"#aaa"}}><i className="fas fa-basketball-ball"></i></span> &nbsp;{playerData.info.play4}
											   </span> 
														 ) : ""
										}
										
                                    </div>
                                </div>
                            </div>

                </div>
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-half">
                            <Dropdown hover={true} items={renderShoeList()} customButton={shoeButton} />
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
                            <img src={require("images/icons/icon_badge_bronze.png")} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.bronzeBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <img src={require("images/icons/icon_badge_silver.png")} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.silverBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <img src={require("images/icons/icon_badge_gold.png")} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.goldBadges}</p>
                        </figure>
                        <figure className="image is-64x64">
                            <img src={require("images/icons/icon_badge_hof.png")} />
                            <p className="is-overlay total_badges_style">{playerData.badges.totalBadges.hofBadges}</p>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}