import { useState } from "react";
import Link from "next/link";
import SearchBar from "../components/searchbar";

export default function NavBar() {
    const [view, setView] = useState(false);

    const handleClick = () => setView(!view);

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item">
                        2KDB
                    </a>
                </Link>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handleClick}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className={`navbar-menu is-transparent ${view ? "is-active" : ""}`}>
                <div className="navbar-start">
                    <Link href="/players" passHref>
                        <a className="navbar-item" href="/players">Players</a>
                    </Link>
                    <Link href="/compare" passHref>
                        <a className="navbar-item">Compare</a>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </nav>
    )
}