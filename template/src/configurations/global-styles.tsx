import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  #__APP {
    
  }

  body {
    align-items: center;
    background-color: #333;
    color:#fff;
    display: flex;
    justify-content: center;
    margin: 0;
    min-height: 100vh;
  }

  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
