import React from "react";
import Layout from "../components/layout";
import "../styles/global.scss"

export default ({ Component, pageProps }) => (
    <>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
)


