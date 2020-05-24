import Head from "next/head";
import NavBar from "./navbar";

export default function Layout(props) {
    return (
        <div>
            <Head>
                <html lang="en"></html>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            </Head>
            <NavBar />
            {props.children}
            <footer className="footer">
                <div className="container has-text-centered">
                    <p>
                        © {new Date().getFullYear()} <strong>2KDB</strong> | All image assets are property of 2K Sports.
                    </p>
                </div>
            </footer>
        </div>
    )
}

