import styled from 'styled-components';
import { color } from './theme';
import { colorFn } from './randomColor';

const TrStyle = styled.tr`
   background-color: #323c50;
`;
const TdStyle = styled.th`
   font-weight: normal;
   font-size: 1em;
   /* -webkit-box-shadow: 0 2px 2px -2px ${color.honey_suckle_3};
   -moz-box-shadow: 0 2px 2px -2px ${color.honey_suckle_3};
   box-shadow: 0 2px 2px -2px ${color.honey_suckle_3}; */
   background-color: ${color.very_peri_3};
   padding-bottom: 2%;
   padding-top: 2%;
   padding-left: 2%;

   &:hover {
      background-color: ${color.very_peri_2};
      color: #403e10;
      font-weight: bold;
      box-shadow: #7f7c21 -1px 1px, #7f7c21 -2px 2px, #7f7c21 -3px 3px, #7f7c21 -4px 4px, #7f7c21 -5px 5px,
         #7f7c21 -6px 6px;
      transform: translate3d(6px, -6px, 0);
      transition-delay: 0s;
      transition-duration: 0.4s;
      transition-property: all;
      transition-timing-function: line;
   }
`;
const TableStyle = styled.table`
   text-align: left;
   overflow: hidden;
   width: 80%;
   margin: 0 auto;
   display: table;
   padding: 0 0 8em 0;
`;
const TH = styled.th`
   padding-bottom: 2%;
   padding-top: 2%;
   padding-left: 2%;
   background-color: ${color.very_peri_2};
`;
const TR = styled.tr`
   /* &: nth-child(odd) {
      background-color: ${color.honey_suckle_2};
   }
   &: nth-child(even) {
      background-color: ${color.honey_suckle_3};
   } */
`;
const H1 = styled.h1`
   font-weight: bold;
   font-size: 1em;
   text-align: left;
   color: black;
`;
const THEAD = styled.thead``;

export { TrStyle, H1, THEAD, TableStyle, TdStyle, TR, TH };
