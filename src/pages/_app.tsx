import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import Head from 'next/head'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'


const themeLight: DefaultTheme = {
  colors: {
    body: '#E4E9F7',
    sidebar: '#FFF',
    primary: '#0284c7',
    primaryLight: '#f3f4f6',
    toggle: '#f3f4f6',
    text: '#707070',
    info: 'rgb(6 182 212)',
    error: '#F56565',
    warning: '#ECC94B',
    success: '#48BB78'
  },
  transition: {
    tran02: 'all 0.2s ease',
    tran03: 'all 0.3s ease',
    tran04: 'all 0.4s ease',
    tran05: 'all 0.6s ease'
  }
}

const themeDark: DefaultTheme = {
  colors: {
    body: '#18191A',
    sidebar: '#242526',
    primary: '#3A3B3C',
    primaryLight: '#3A3B3C',
    toggle: '#FFF',
    text: '#CCC',
    info: 'rgb(6 182 212)',
    error: '#F56565',
    warning: '#ECC94B',
    success: '#48BB78'
  },
  transition: {
    tran02: 'all 0.2s ease',
    tran03: 'all 0.3s ease',
    tran04: 'all 0.4s ease',
    tran05: 'all 0.6s ease',
  }
}


export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Kontabb</title>
      </Head>
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  )
}
