import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 
  body {
    align-items: center;
    background-color: #333;
    color:#fff;
    margin: 0;
    min-height: 100vh;
  }

  #__APP {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
