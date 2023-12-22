import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React, { useEffect } from 'react'

import '../global.css'
import { AppProps } from 'next/app'
import WebLayout from 'app/layout/web'
import WebFooter from 'app/components/WebFooter'

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <Head>
        <title>5th Galaxy Studios</title>
        <meta
          name="description"
          content="Unlock innovation with 5th Galaxy Studio's, your trusted partner in software development. Our skilled team specializes in crafting cutting-edge iOS, Android, and web applications that redefine user experiences. From seamless cross-platform solutions to tailored app experiences, we deliver excellence in every line of code. Collaborate with us to turn your digital vision into reality."
        />
        <meta name="theme-color" content="#a78bfa" media="(prefers-color-scheme: dark)" />
        <meta content="#a78bfa" name='theme-color' />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="transparent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
      </Head>
      <Provider>
        <WebLayout>
          <Component {...pageProps} />
        </WebLayout>
      </Provider>
    </>
  )
}

export default MyApp
