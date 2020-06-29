import React from "react";
import NavBar from "./navbar";

const Loader = () => (
<>
<NavBar />
<div className="container">
    <nav className="panel">
        <p className="panel-heading mb-1">Loading...</p>
        <div className="box">
            <div className="columns is-multiline is-mobile">
                <div className="column is-1-desktop is-2-widescreen is-half-mobile">
                    <figure className="image is-3by4 tag is-light loading loading-updates" />
                </div>
                <div className="column is-1-desktop is-2-widescreen is-half-mobile">
                    <figure className="image is-3by4 tag is-light loading loading-updates" />
                </div>
                <div className="column is-1-desktop is-2-widescreen is-half-mobile">
                    <figure className="image is-3by4 tag is-light loading loading-updates" />
                </div>
                <div className="column is-1-desktop is-2-widescreen is-half-mobile">
                    <figure className="image is-3by4 tag is-light loading loading-updates" />
                </div>
                <div className="column is-1-desktop is-2-widescreen is-half-mobile">
                    <figure className="image is-3by4 tag is-light loading loading-updates" />
                </div>
            </div>
        </div>
    </nav>
</div>
<footer className="footer">
    <div className="container has-text-centered">
        <p>
            © 2020 <strong>2KDB</strong> | All image assets are property of 2K Sports.
        </p>
    </div>
</footer>
</>
)

export default Loader;