import Head from "next/head";
import Showcase from "./components/showcase";
import Navbar from "./components/navbar";

export default function Home() {
	return (
		<main>
			<Head>
				<title>Downutz | Donuts</title>
				<meta name="description" content="A sample donut online store." />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<Navbar></Navbar>
			<Showcase></Showcase>
		</main>
	)
}