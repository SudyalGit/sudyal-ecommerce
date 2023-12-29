import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Reset default css */
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}
body {
  overflow-x: hidden;
}
li {
  list-style: none;
}
a {
  color: black;
  text-decoration: none;
}
`;

export default GlobalStyle;