import { type AppType } from "next/app";
import Head from "next/head";
import { Header } from "~/components/Header";
import { Analytics } from '@vercel/analytics/react';

import "~/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps,
}) => {
  return (
    <>
      <Head>
        <title>Zico Montibeller - Portfolio</title>
        <meta name="description" content="Zico Montibeller's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main>
        <Component {...pageProps} />
      </main>

      <footer className="bg-gray-800 text-center text-gray-400 p-4">
        <p>© { new Date().getUTCFullYear() } Zico Montibeller</p>
        <p className="text-sm">This work is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0" rel="noopener noreferrer" target="_blank">CC BY NC ND 4.0</a>. Feel free to copy or adapt according to your interest </p>
      </footer>

      <Analytics />
    </>
  );
};

export default MyApp;
