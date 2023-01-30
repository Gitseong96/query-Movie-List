import React from 'react';
import styled from 'styled-components';
interface CardPros {
   rank?: string;
   rankInten: string;
   openDt: string;
   audiAcc: string;
   movieNm: string;
}

const Ranks: React.FC<CardPros> = props => {
   return (
      <TrStyle>
         <TdStyle> {props.rank}</TdStyle>
         <TdStyle>{props.movieNm}</TdStyle>
         <TdStyle>{props.audiAcc}</TdStyle>
         <TdStyle>{props.openDt}</TdStyle>
         {Number(props.rankInten) === 0 ? (
            <TdStyle> {props.rankInten}</TdStyle>
         ) : Number(props.rankInten) < 0 ? (
            <TdStyle>▼ {props.rankInten}</TdStyle>
         ) : (
            <TdStyle>▲{props.rankInten}</TdStyle>
         )}
      </TrStyle>
   );
};

export default Ranks;

export const TrStyle = styled.tr`
   background-color: #323c50;
`;
export const TdStyle = styled.th`
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
