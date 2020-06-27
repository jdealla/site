import React, { useState } from "react";
import { useRouter } from "next/router";
import NavSearch from "../components/navsearch";

export default function NavBar(props) {
    const { players, searchOn } = props;
    const [view, setView] = useState(false);
    const router = useRouter();

    const handleClick = () => setView(!view);
    const handleClickPlayer = (playerId) => router.push(`/player/${playerId}`);

    return (
        <nav className="navbar is-black" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" onClick={() => router.push(`/`)}>
                    2KDB
                </a>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu is-transparent ${view ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <div className="navbar-item">
                        {searchOn ? <NavSearch handleClick={handleClickPlayer} players={players} placeholder="Search players here" /> : ""}
                    </div>
                    <a className="navbar-item hvr-underline-reveal" href="/players">All Players</a>
                    <a className="navbar-item hvr-underline-reveal" href="/compare">Compare</a>
                    <a className="navbar-item hvr-underline-reveal" href="/updates">Updates</a>
                    <a className="navbar-item hvr-underline-reveal" href="/collections">Collections</a>
                </div>
            </div>
        </nav>
    )
}