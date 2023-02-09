import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-size:border-box;
    }
    table{
        width:80%
    }
    a{
        text-decoration: none;
    }
    button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
`;

export default GlobalStyle;
