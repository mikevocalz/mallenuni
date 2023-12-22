import 'raf/polyfill'
import 'setimmediate'

import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'

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
        <link rel="icon" href="/favicon.ico" />
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
