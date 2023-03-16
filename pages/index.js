import Head from "next/head";

import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Secure Track</title>
                <meta name="description" content="My page description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"bg-[url('../public/background.jpg')] bg-cover bg-no-repeat h-full"}>
                <Navbar />
                <Dashboard />
            <br />
            <br />
            <br />
            </main>
            <Footer />
        </>
    )
}