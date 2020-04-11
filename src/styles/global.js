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
    background-image: url(${background});
    background-position: cover;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button {
    font-family: Roboto, sans-serif;
    font-size: 14px;
  }
`

export default GlobalStyle;