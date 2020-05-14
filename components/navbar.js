import { useRouter } from "next/router";
import { useState } from "react";
import SearchBar from "../components/searchbar";

export default function NavBar(props) {
    const { index } = props;
    const [view, setView] = useState(false);
    const router = useRouter();

    const handleClick = () => setView(!view);
    const handleClickPlayer = (playerId) => router.push(`/players/${playerId}`);

    return (
        <nav className={`navbar is-black ${index ? "is-fixed-top" : ""}`} role="navigation" aria-label="main navigation">
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
                    {index ? (
                        <></>
                    ) : (
                        <div className="navbar-item">
                            <SearchBar handleClick={handleClickPlayer} />
                        </div>
                    )}
                    <a className="navbar-item" onClick={() => router.push(`/players`)}>Players</a>
                    <a className="navbar-item" onClick={() => router.push(`/compare`)}>Compare</a>
                    <a className="navbar-item" onClick={() => router.push(`/updated`)}>Updates</a>
                </div>
            </div>
        </nav>
    )
}