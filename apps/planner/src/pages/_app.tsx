import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, Button } from '@mantine/core'; 
import Botao from '../components/botao'; 
import "../styles/styles.css";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to planner!</title>
      </Head>
      <MantineProvider>
        <div>
          <h1>Bem-vindo</h1>
        </div>
        <div>
          <p>Isso é uma App</p>
          <Button variant="filled">Button</Button>
        </div>        
      </MantineProvider>
    </>
  );
}

export default CustomApp;
