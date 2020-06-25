import { createGlobalStyle } from 'styled-components'
import background from '../assets/background.jpg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
  }
  body {
    background: url(${background}) no-repeat center center fixed;
    -webkit-font-smoothing: antialiased !important;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }
`

export default GlobalStyle;
