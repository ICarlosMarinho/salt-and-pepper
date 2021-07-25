import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: none;
    font-family: Verdana, Helvetica, sans-serif;
  }

  #app-root {
    display: grid;
    grid-template-areas: "header"
                         "view-container"
                         "footer";
    grid-template-rows: 80px auto 80px;
    grid-template-columns: 100%;
    box-sizing: border-box;
    padding: 10px;
    row-gap: 20px;
    background-color: #f7f7f7;
    width: 100%;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
