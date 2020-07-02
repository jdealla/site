import NavBar from "./navbar";

export default function Layout(props) {
    const { searchOn, players } = props;
    return (
        <>
            <NavBar players={players} searchOn={searchOn} />
            {props.children}
            <footer className="footer">
                <div className="container has-text-centered">
                    <p>
                        © {new Date().getFullYear()} <strong>2KDB</strong> | All image assets are property of 2K Sports.
                    </p>
                </div>
            </footer>
        </>
    )
}

