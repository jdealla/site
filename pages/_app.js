import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
import "../styles/global.scss"

export default ({ Component, pageProps }) => (
    <>
        <Head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','UA-169217612-1');
                    `,
                }}
            />
        </Head>
        <noscript dangerouslySetInnerHTML={{__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-169217612-1" height="0" width="0" style="display:none;visibility:hidden;"></iframe>`}} />
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </>
)


