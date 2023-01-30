import Link from "next/link";
import Head from "next/head";

export default function Post() {
    return (
        <>
            <Head>
                <title>My first post</title>
            </Head>

            <h1>My first post</h1>
            <h2>
               <Link href='/'>Back to home</Link>
            </h2>
        </>
    )
}