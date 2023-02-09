import React from 'react';
import styled from 'styled-components';
import { TrStyle, H1, THEAD, TableStyle, TdStyle, TR, TH } from 'style/tableStyle';
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
