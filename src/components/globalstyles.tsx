import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
  html,
  body {    
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    height: 100vh;    
    background:  ${({ theme }) => theme.colors.body};
    transition:  ${({ theme }) => theme.transition.tran04};
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
