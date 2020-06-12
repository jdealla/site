import React from "react";

const Loader = () => (
    <section className="hero is-fullheight is-bold">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h2 className="title">
                    Loading...	
                </h2>
			    <div className="lds-dual-ring"></div>
            </div>
        </div>
    </section>
)

export default Loader;