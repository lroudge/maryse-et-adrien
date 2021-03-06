import 'tailwindcss/tailwind.css';
import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { About, Accommodation, Covid, Photos, Program, Registry, Rsvp, Directions, Thanks } from '../components';

type Props = {
  isIE: boolean;
  userAgent?: string;
};

const Home: NextPage<Props> = ({ isIE, userAgent }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-hidden">
      <Head>
        <title>Maryse et Adrien</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isIE ? (
        <h1 className="text-3xl text-center font-bold font-title">
          Votre navigateur n'est pas supporté, veuillez nous excuser pour la gêne occasionnée
        </h1>
      ) : (
        <div className="flex flex-col items-center w-full text-center bg-emerald-100 text-emerald-600">
          <Header />
          <main className="h-full w-full md:px-10">
            <About userAgent={userAgent} />
            <Program />
            <Directions />
            <Accommodation />
            <Rsvp />
            <Registry />
            <Photos />
            <Covid />
            <Thanks />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

Home.getInitialProps = async ({ req }): Promise<Props> => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  const isIE = userAgent ? /MSIE|Trident/.test(userAgent) : false;

  return { userAgent, isIE };
};

export default Home;
