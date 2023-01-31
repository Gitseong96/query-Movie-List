import { useWeekRanks } from 'components/WeekMoveRanks/useWeekMovieRanks';
import Ranks from 'components/atom/Ranks';
import styled from 'styled-components';
import { queryKeysMovie } from 'Reacy-Query/queryKeys';
import { WeekConfig } from 'Type';
import { queryClient } from 'Reacy-Query/queryClient';
import { TrStyle, H1, THEAD, TableStyle, TdStyle, TR, TH } from 'style/tableStyle';
function WeekMovieRanks() {
   const query: WeekConfig = queryClient.getQueryData([queryKeysMovie.movieWeekRanks]);

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
            {query?.boxOfficeResult.weeklyBoxOfficeList.map((movie: any) => {
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
