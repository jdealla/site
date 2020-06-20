import React, { useState } from "react";
import { useRouter } from "next/router";
import SearchBar from "../components/searchbar";

export default function NavBar() {
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
                        {/* <SearchBar handleClick={handleClickPlayer} /> */}
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Players
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="/players">
                                All Players
                            </a>
                            <a className="navbar-item" href="/evolutions">
                                Evos
                            </a>
                            <a className="navbar-item" href="/dynamicduos">
                                Duos
                            </a>
                        </div>
                    </div>
                    <a className="navbar-item" href="/compare">Compare</a>
                    <a className="navbar-item" href="/updates">Updates</a>
                    <a className="navbar-item" href="/collections">Collections</a>
                </div>
            </div>
        </nav>
    )
}