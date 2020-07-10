import React, { useEffect } from "react";
import Router from "next/router";
import * as gtag from "../lib/gtag";

import "../styles/global.scss";

import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/animations/shift-away.css";

export default function App({ Component, pageProps }) {
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }

        Router.events.on('routeChangeComplete', handleRouteChange)
        
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [])

    return (
        <Component {...pageProps} />
    )
}


