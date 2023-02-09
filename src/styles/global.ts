import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body{
  width: 100%;
  height: 100%;
  background-color: WHITE;
}

ul, li{
  list-style: none;
}

a{
  text-decoration: none;
}

button:hover{
cursor: pointer;
}

`