import Link from "next/link"
import SearchBar from "../components/searchbar"

export default function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/" passHref>
                    <a className="navbar-item">
                        2KDB
                    </a>
                </Link>

                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/players">Players</a>
                    <a className="navbar-item">Compare</a>
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