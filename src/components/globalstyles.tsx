import { createGlobalStyle } from 'styled-components'
import { Poppins } from '@next/font/google'

const poppins = Poppins({
  weight: ['500', '600', '400']
})

const GlobalStyle = createGlobalStyle`
  html,
  body {    
    padding: 0;
    margin: 0;    
    ${poppins.style}       
    background:  ${({ theme }) => theme.colors.body};    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
