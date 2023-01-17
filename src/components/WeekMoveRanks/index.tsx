import { useWeekRanks } from 'components/WeekMoveRanks/useWeekMovieRanks';
import Ranks from 'components/atom/Ranks';
import styled from 'styled-components';

function WeekMovieRanks() {
   const weekRanks = useWeekRanks();
   const { data, status } = weekRanks;

   if (status === 'loading') return <div>Loading....</div>;
   return (
      <TableStyle>
         <THEAD>
            <TR>
               <TH>
                  <H1>Rank</H1>
               </TH>
               <TH>
                  <H1>mocieNm</H1>
               </TH>
               <TH>
                  <H1>audiAcc</H1>
               </TH>
               <TH>
                  <H1>openDt</H1>
               </TH>
               <TH>
                  <H1>rankInten</H1>
               </TH>
            </TR>
         </THEAD>
         <tbody>
            {data?.boxOfficeResult.weeklyBoxOfficeList.map((movie: any) => {
               return (
                  <Ranks
                     key={movie.rank}
                     rank={movie.rank}
                     rankInten={movie.rankInten}
                     openDt={movie.openDt}
                     audiAcc={movie.audiAcc}
                     movieNm={movie.movieNm}
                  />
               );
            })}
         </tbody>
      </TableStyle>
   );
}

export default WeekMovieRanks;

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
