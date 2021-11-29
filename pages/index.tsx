import 'tailwindcss/tailwind.css'
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import { About, Accommodation, Covid, Photos, Program, Registry, Rsvp, Transportation } from "../components";

const Home: NextPage = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<Head>
				<title>Maryse et Adrien</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex flex-col items-center w-full px-20 text-center bg-beige-200 text-beige-800">
                <Header />
                <main className="h-full">
                    <About />
                    <Program />
                    <Transportation />
                    <Accommodation />
                    <Registry />
                    <Rsvp />
                    <Photos />
                    <Covid />
                </main>
                <Footer />
			</div>
		</div>
	);
};

export default Home;
