import { createGlobalStyle } from "styled-components";

export const StaticImageData = {
  backgroundImage: `url(${'https://img.freepik.com/free-vector/white-abstract-background_23-2148806276.jpg?w=1380&t=st=1676242991~exp=1676243591~hmac=59b04b2250c7ac76708ffad72bfbdea02ce07bed86ca9545d7e9b36d91a46a13'})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}

export const GlobalStyles = createGlobalStyle`

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body{
  width: 100%;
  height: 100%;
  background-image: ${StaticImageData.backgroundImage};
  background-size: ${StaticImageData.backgroundSize};
  background-position: ${StaticImageData.backgroundPosition};
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
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