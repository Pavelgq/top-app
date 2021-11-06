import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.css'
import Head from 'next/head'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>MyTop - мой лучший топ</title>
        <link ref="icon" href="/favicon.ico"></link>
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link> 
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;700;900&display=swap" rel="stylesheet"></link> 
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
