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
// console.log(query1[0][1].data[0]['승차']);

export default BusRanks;
