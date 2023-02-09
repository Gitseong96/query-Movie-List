// import { TrStyle, TdStyle } from './Ranks';
import { TrStyle, H1, THEAD, TableStyle, TdStyle, TR, TH } from 'style/tableStyle';
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
