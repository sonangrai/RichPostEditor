import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,body {
      font-family: fantasy ;
      font-size: 20px;
  }

  body{
    margin: 0;
    padding:0;
  }

  *{
    box-sizing: border-box
  }
`;

export default GlobalStyle;