import NavBar from "./navbar";

export default function Layout(props) {
    const { searchOn } = props;
    return (
        <>
            <NavBar players={props.players} searchOn={searchOn} />
            {props.children}
            <footer className="footer">
                <div className="container has-text-centered">
                    <p>
                        © {new Date().getFullYear()} <strong>2KDB.pw</strong> | All image assets are property of 2K Sports.
                    </p>
                </div>
            </footer>
        </>
    )
}

