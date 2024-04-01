import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import "../styles/globals.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to planner!</title>
      </Head>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default CustomApp;
