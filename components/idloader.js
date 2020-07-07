import React from "react";
import { FaCircleNotch } from "react-icons/fa"
import NavBar from "./navbar";

const Loader = () => (
<>
<NavBar />
<div className="is-player-card-bg is-hidden-mobile"><img src="/playercard_bg.png" alt="player card bg" /></div>
<div className="container is-fluid mobile-nopadding">
   <div className="columns is-mobile is-multiline is-player-card mobile-padding">
      <div className="column is-full-mobile is-full-desktop is-full-widescreen">
         <div className="column is-full-mobile player-column-height is-hidden-tablet">
           <figure style={{ width:"100%" }} className="image is-3by4 tag is-dark mb-1 loading header-loading"></figure>
            <div className="columns is-mobile is-centered py-5" >
              <div className="column is-narrow" style={{ padding: "0.1em"}}>
                  <div className="container">
                      <span>
                          <figure className="image tag is-dark is-24x24 loading header-loading" style={{ width:"7em" }}></figure>
                      </span>
                  </div>
               </div>
            </div>
         </div>
         <div className="columns is-mobile is-multiline">
            <div className="column is-full-mobile is-9-tablet is-four-fifths-fullhd">
               <div className="columns  is-mobile is-multiline justify-header">
                  <div className="column is-4-tablet is-3-desktop player-column-height is-hidden-mobile">
                     <figure style={{ width:"100%" }} className="image is-3by4 tag is-dark mb-1 loading header-loading"></figure>
                     <div className="columns is-mobile is-centered py-5" >
                        <div className="column is-narrow" style={{ padding: "0.1em"}}>
                           <div className="container">
                              <span>
                                 <figure className="image tag is-dark is-24x24 loading header-loading" style={{ width:"7em" }}></figure>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="column is-full-mobile is-8-tablet is-player-info">
                     <div className="columns is-mobile is-multiline">
                        <div className="column is-1-mobile is-1-tablet ovr-margin" >
                           <div className="has-text-centered no-shadow" >
                              <figure className="image is-48x48 tag is-dark loading header-loading"></figure>
                           </div>
                        </div>
                        <div className="column is-9-mobile is-10-tablet">
                           <p className="title is-size-4-mobile is-size-3-widescreen has-text-weight-bold has-text-white">Loading Player...</p>
                        </div>
                        <div className="column is-3-mobile is-2-tablet">
                           <p className="heading has-text-warning">Offense</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"3em" }}></span></p>
                        </div>
                        <div className="column is-3-mobile is-2-tablet">
                           <p className="heading has-text-warning">Defense</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"3em" }}></span></p>
                        </div>
                        <div className="column is-3-mobile is-2-tablet">
                           <p className="heading has-text-warning">Height</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"3em" }}></span></p>
                        </div>
						<div className="column is-3-mobile is-2-tablet">
                           <p className="heading has-text-warning">Wingspan</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"3em" }}></span></p>
                        </div>
                        <div className="column is-3-mobile is-3-tablet">
                           <p className="heading has-text-warning">Weight</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"3em" }}></span></p>
                        </div>
                        <div className="column is-3-mobile is-2-tablet">
                           <p className="heading has-text-warning">Position</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"4em" }}></span></p>
                        </div>
                        <div className="column is-half-mobile is-2-tablet">
                           <p className="heading has-text-warning">Team</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"8em" }}></span></p>
                        </div>
                        <div className="column is-half-mobile is-2-tablet">
                           <p className="heading has-text-warning">From</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"8em" }}></span></p>
                        </div>
                        <div className="column is-3-tablet">
                           <p className="heading has-text-warning">Nickname</p>
                           <p className="title is-size-6 has-text-white"><span className="tag is-dark loading header-loading" style={{ width:"8em" }}></span></p>
                        </div>
                        <div className="column is-hidden-mobile is-full-tablet">
                           <p className="heading has-text-warning">Plays</p>
                           <div className="tags is-left is-rounded has-text-weight-bold">
                              <span className="tag is-dark loading header-loading" style={{ width:"6em" }}>
                              </span>
                             <span className="tag is-dark loading header-loading" style={{ width:"3em" }}>
                              </span>
                            <span className="tag is-dark loading header-loading" style={{ width:"7em" }}>
                              </span>
                            <span className="tag is-dark loading header-loading" style={{ width:"7em" }}>
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="column is-3-tablet is-2-desktop">
               <div className="columns is-mobile is-multiline">
                  <div className="column is-full-mobile is-hidden-tablet">
                     <p className="heading has-text-warning">Plays</p>
                    <div className="tags is-left is-rounded has-text-weight-bold">
                        <span className="tag is-dark loading header-loading" style={{ width:"6em" }}></span>
                        <span className="tag is-dark loading header-loading" style={{ width:"3em" }}></span>
                        <span className="tag is-dark loading header-loading" style={{ width:"7em" }}></span>
                        <span className="tag is-dark loading header-loading" style={{ width:"7em" }}></span>
                    </div>
                  </div>
                  <div className="column is-full-mobile hotzone-tablet">
                     <p className="heading has-text-warning">Hot Zones</p>
                     <span className="loading tag is-dark header-loading" style={{ opacity:"0.5", width:"100%", height:"213px" }}>
                     </span>
                     <p className="title"></p>
                     <p className="heading has-text-warning">Badges</p>
                     <div className="level">
                        <div className="level-item is-size-3 transform-badges loading header-loading tag is-dark" ></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="columns ">
      <div className="column is-full">
         <div className="tabs is-boxed">
            <ul>
               <li className="is-active"><a>Stats</a></li>
               <li className=""><a>Tendencies</a></li>
               <li className=""><a>Signature/Animations</a></li>
               <li className=""><a>True Ratings</a></li>
            </ul>
         </div>
      </div>
   </div>
   <div className="columns is-multiline is-mobile is-gapless mobile-padding">
      <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
         <div className="container">
            <p className="has-text-weight-semibold "> Shooting </p>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Shot Close</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />   </span><span className="tag loading">Shot Mid</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Shot 3pt</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Shot IQ</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Free Throw</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Offensive Consistency</span></div>
         </div>
         <div className="container">
            <p className="has-text-weight-semibold "> Inside Scoring </p>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Driving Layup</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Standing Dunk</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Driving Dunk</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Draw Foul</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Post Moves</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Post Hook</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Post Fade</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Hands</span></div>
         </div>
         <div className="container">
            <p className="has-text-weight-semibold "> Playmaking </p>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Speed With Ball</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Ball Handle</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Passing Accuracy</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Passing Vision</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Passing IQ</span></div>
         </div>
      </div>
      <div className="column is-one-fifth-tablet is-half-mobile is-one-fifth-desktop">
         <div className="container">
            <p className="has-text-weight-semibold "> Athleticism </p>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Speed</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Acceleration</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Vertical</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Strength</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Stamina</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Hustle</span></div>
         </div>
         <div className="container">
            <p className="has-text-weight-semibold "> Defense </p>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Interior Defense</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Perimeter Defense</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Help Defense IQ</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Lateral Quickness</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Pass Perception</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Steal</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Block</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Defensive Consistency</span></div>
         </div>
         <div className="container">
            <p className="has-text-weight-semibold "> Rebound </p>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Offensive Rebound</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Defensive Rebound</span></div>
         </div>
         <div className="container">
            <p className="has-text-weight-semibold "> Potential </p>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Intangibles</span></div>
            <div className="tags has-addons is-marginless" ><span className="tag is-light loading"><FaCircleNotch size="1.3em" className="icon-spin" />    </span><span className="tag loading">Potential</span></div>
         </div>
      </div>
      <div className="column badges-loading">
         <div className="container">
            <p className="subtitle is-6 has-text-weight-semibold"> Finishing Badges</p>
            <div className="columns loading is-gapless is-mobile is-multiline">
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered ">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Acrobat </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Consistent Finisher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Contact Finisher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Cross Key Scorer </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Fancy Footwork </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Fastbreak Finisher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Lob City Finisher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pro Touch </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Putback Boss </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Relentless Finisher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Showtime </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Slithery Finisher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Tear Dropper </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Giant Slayer </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Backdown Punisher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Deep Hooks </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Dropstepper </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pick And Roller </p>
                  </div>
               </div>
            </div>
            <p className="subtitle is-6 has-text-weight-semibold "> Shooting Badges </p>
            <div className="columns loading is-gapless is-mobile is-multiline">
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Catch And Shoot </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Clutch Shooter </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Deadeye </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Difficult Shots </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Green Machine </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Hot Start </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Hot Zone Hunter </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Tireless Shooter </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Volume Shooter </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Corner Specialist </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pick And Popper </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Quick Draw </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Range Extender </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Slippery Off Ball </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Deep Fades </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Flexible Release </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Ice In Veins </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pump Fake Maestro </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Steady Shooter </p>
                  </div>
               </div>
            </div>
            <p className="subtitle is-6 has-text-weight-semibold "> Playmaking Badges </p>
            <div className="columns loading is-gapless is-mobile is-multiline">
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Break Starter </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Downhill </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Lob City Passer </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Quick First Step </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Space Creator </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Unpluckable </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Ankle Breaker </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Dimer </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Flashy Passer </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Floor General </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Handles For Days </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Stop And Go </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Tight Handles </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Bail Out </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Dream Shake </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Needle Threader </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pass Fake Maestro </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Post Spin Technician </p>
                  </div>
               </div>
            </div>
            <p className="subtitle is-6 has-text-weight-semibold "> Defensive Badges </p>
            <div className="columns loading is-gapless is-mobile is-multiline">
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Chase Down Artist </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Clamps </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Interceptor </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Lightning Reflexes </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Off Ball Pest </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pick Dodger </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pick Pocket </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pogo Stick </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Tireless Defender </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Trapper </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Defensive Leader </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Heart Crusher </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Intimidator </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Post Move Lockdown </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Box </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Brick Wall </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Moving Truck </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Rebound Chaser </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Rim Protector </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Worm </p>
                  </div>
               </div>
            </div>
            <p className="subtitle is-6 has-text-weight-semibold "> Personality Badges </p>
            <div className="columns loading is-gapless is-mobile is-multiline">
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Alpha Dog </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Enforcer </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Expressive </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Extremely Confident </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Friendly </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> High Work Ethic </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Keep It Real </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Laid Back </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Legendary Work Ethic </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Pat My Back </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Reserved </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Team Player </p>
                  </div>
               </div>
               <div className="column is-paddingless is-2-mobile is-one-third-tablet is-1-desktop is-badge">
                  <div className="container is-vcentered">
                     <figure className="image is-48x48" ><img src="https://2kdbimg.com/48x48/badge_none.png" /></figure>
                     <p className="is-size-7 has-text-centered"> Unpredictable </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</>
)

export default Loader;