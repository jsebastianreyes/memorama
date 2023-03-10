import { createGlobalStyle } from 'styled-components'

const GlobalStylesStyled = createGlobalStyle`
  :root{
    --white: #ffffff; 
    --black-1: #202020; 
    --primary: #289144; 
    --grey: #929292; 
    --blue: #00afc7; 
    --yellow: #f4ed1f; 
    --headline1: 700 2.5rem/normal Roboto Condensed; 
    --subtitle1: 700 1.625rem/1.5rem Roboto Condensed; 
    --button: 700 .9rem/1rem Roboto; 
    --headline2: 700 1.5rem/normal Roboto; 
    --body1-regular: 400 0.875rem/1.5rem Roboto; 
    --body1-bold: 700 0.875rem/1rem Roboto; 
  }

  body{
    font: var(--body1-regular);
    margin: 0;
    padding: 0;
    background-color: var(--black-1);
  }
`



export default GlobalStylesStyled