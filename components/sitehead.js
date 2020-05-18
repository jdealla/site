import Head from "next/head";

export default function SiteHead(props) {
    const { title, description } = props;

    return (
        <Head>
            <title>{title}</title>
            <html lang="en"></html>
            <meta name="description" content={description}></meta>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
    )
}