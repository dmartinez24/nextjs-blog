import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function Post() {
    return (
        <>
            <Layout>
                <Head>
                    <title>My first post</title>
                </Head>
                <Script
                    src='https://connect.facebook.net/en_US/sdk.js'
                    strategy='lazyOnload'
                    onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
                >

                </Script>

                <h1>My first post</h1>

            </Layout>
        </>
    )
}