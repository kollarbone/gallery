import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}
h1,h2,h3,h4,h5,h6{
    display: inline-block;
}
body{
    margin: 0 ;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro',sans-serif;
    background: ${({ theme }) => theme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;
}
`;
export const lightTheme = {
  body: "#FCF6F4"
};

export const DarkTheme = {
  body: "#000000"
};

export default GlobalStyle;
