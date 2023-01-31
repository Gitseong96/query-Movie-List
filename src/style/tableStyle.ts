import styled from 'styled-components';

const TrStyle = styled.tr`
   background-color: #323c50;
`;
const TdStyle = styled.th`
   font-weight: normal;
   font-size: 1em;
   -webkit-box-shadow: 0 2px 2px -2px #0e1119;
   -moz-box-shadow: 0 2px 2px -2px #0e1119;
   box-shadow: 0 2px 2px -2px #0e1119;
   padding-bottom: 2%;
   padding-top: 2%;
   padding-left: 2%;

   &:hover {
      background-color: #fff842;
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
   background-color: #1f2739;
`;
const TR = styled.tr`
   /* &: nth-child(odd) {
      background-color: #323c50;
   }
   &: nth-child(even) {
      background-color: #1f2739;
   } */
`;
const H1 = styled.h1`
   font-weight: bold;
   font-size: 1em;
   text-align: left;
   color: #185875;
`;
const THEAD = styled.thead``;

export { TrStyle, H1, THEAD, TableStyle, TdStyle, TR, TH };
