import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/global.scss"

export default ({ Component, pageProps }) => (
    <>
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <html lang="en"></html>
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
)


