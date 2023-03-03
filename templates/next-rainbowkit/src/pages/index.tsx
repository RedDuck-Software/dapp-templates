import Head from 'next/head';
import React from 'react';
import { NextPage } from 'next';
import { withLayout } from '@/hocs/withLayout';
import { Dashboard } from '@templates/shared';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Next + RainbowKit</title>
      </Head>
      <Dashboard ssr />
    </>
  );
};

export default withLayout(Home);
