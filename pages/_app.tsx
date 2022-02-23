import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../src/presentation/styles/globals'
import theme from '../src/presentation/styles/theme'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider session={session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
