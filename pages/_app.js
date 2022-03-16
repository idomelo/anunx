import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import CheckAuth from '../src/components/CheckAuth'
import { ToastyProvider } from '../src/contexts/Toasty'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SessionProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <ToastyProvider>
            <CssBaseline />
            {/* if requireAuth property is present, protect the page */}
            {
              Component.requireAuth
                ? <CheckAuth Component={Component} pageProps={pageProps}/>
                : <Component {...pageProps} />
            }
          </ToastyProvider>
        </ThemeProvider>
      </SessionProvider>
    </CacheProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}
