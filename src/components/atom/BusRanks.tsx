import { TrStyle, TdStyle } from './Ranks';

interface CardPros {
   rank: number;
   map: string;
   busStop: string;
   busUp: string;
   busDwon: string;
}

const BusRanks: React.FC<CardPros> = props => {
   return (
      <TrStyle>
         <TdStyle> {props.rank}</TdStyle>
         <TdStyle>{props.map}</TdStyle>
         <TdStyle>{props.busStop}</TdStyle>
         <TdStyle>{props.busUp}</TdStyle>
         <TdStyle> {props.busDwon}</TdStyle>
      </TrStyle>
   );
};

export default BusRanks;
