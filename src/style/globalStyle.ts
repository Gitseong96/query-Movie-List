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
`;

export default GlobalStyle;
