import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { About, Accommodation, Covid, Photos, Program, Registry, Rsvp, Directions } from '../components';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Head>
        <title>Maryse et Adrien</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center w-full text-center bg-emerald-100 text-emerald-600">
        <Header />
        <main className="h-full w-full md:px-10">
          <About />
          <Program />
          <Directions />
          <Accommodation />
          <Rsvp />
          <Registry />
          <Photos />
          <Covid />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
