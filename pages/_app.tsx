// https://nextjs.org/docs/advanced-features/custom-app
import React from 'react'

import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import { AppTheme } from 'themes/default'

// import App from "next/app";
import 'normalize.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Adrian De Lisle</title>
      </Head>
      <ThemeProvider theme={AppTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
