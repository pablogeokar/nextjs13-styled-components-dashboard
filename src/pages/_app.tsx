import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import '../styles/style.css'

const themeLight: DefaultTheme = {
  colors: {
    body: '#E4E9F7',
    sidebar: '#FFF',
    primary: '#0284c7',
    primaryLight: '#f3f4f6',
    toggle: '#DDD',
    text: '#707070'
  },
  transition: {
    tran02: 'all 0.2s ease',
    tran03: 'all 0.3s ease',
    tran04: 'all 0.4s ease',
    tran05: 'all 0.25s ease'
  }
}

const themeDark: DefaultTheme = {
  colors: {
    body: '#18191A',
    sidebar: '#242526',
    primary: '#3A3B3C',
    primaryLight: '#3A3B3C',
    toggle: '#FFF',
    text: '#CCC'
  },
  transition: {
    tran02: 'all 0.2s ease',
    tran03: 'all 0.3s ease',
    tran04: 'all 0.4s ease',
    tran05: 'all 0.25s ease'
  }
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
