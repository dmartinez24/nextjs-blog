import Link from "next/link";

export default function Post() {
    return (
        <>
            <h1>My first post</h1>
            <h2>
               <Link href='/'>Back to home</Link>
            </h2>
        </>
    )
}