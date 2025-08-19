import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Montserrat', 'Arial', sans-serif;
    background-color: #f8fbf8;
    color: #2c3e50;
    line-height: 1.6;
  }

  h1, h2, h3, h4 {
    font-family: 'Poppins', 'Arial', sans-serif;
    color: #1a5632;
    font-weight: 600;
  }
`;