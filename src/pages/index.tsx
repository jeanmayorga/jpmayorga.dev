import Head from 'next/head';
import React from 'react';
import { Jumbo } from '../components';

const Home = () => {
  return (
    <div className='w-screen h-screen'>
      <Head>
        <title>Jean Mayorga | Software Engineer</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Im a Quito-based software engineer who specializes in building web apps.'
        />
        <meta name='keywords' content='nextjs, react, typescript' />
        <meta property='og:locale' content='es_LA' />
        <meta property='og:title' content='Jean Mayorga' />
        <meta
          property='og:description'
          content='Im a Quito-based software engineer who specializes in building web apps.'
        />
        <meta property='og:url' content='https://www.jeanmayorga.com' />
        <meta property='og:type' content='website' />
      </Head>
      <Jumbo />
    </div>
  );
};

export default Home;
