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
        <link rel="preconnect" href="https://fonts.gstatic.com" /> 
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
