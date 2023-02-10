import Ranks from 'components/atom/Ranks';
import { queryClient } from 'Reacy-Query/queryClient';
import styled from 'styled-components';
import { queryKeysMovie } from 'Reacy-Query/queryKeys';
import { DayConfig } from 'Type';
import { TrStyle, H1, THEAD, TableStyle, TdStyle, TR, TH } from 'style/tableStyle';
function DayMovieRanks() {
   const query: DayConfig = queryClient.getQueryData([queryKeysMovie.movieDayRanks]);
   return (
      <TableStyle>
         <THEAD>
            <TR>
               <TH>
                  <H1>순위</H1>
               </TH>
               <TH>
                  <H1>영화이름</H1>
               </TH>
               <TH>
                  <H1>누적관객</H1>
               </TH>
               <TH>
                  <H1>개봉일</H1>
               </TH>
               <TH>
                  <H1>업다운</H1>
               </TH>
            </TR>
         </THEAD>
         <tbody>
            {query?.boxOfficeResult.dailyBoxOfficeList.map((movie: any) => {
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

export default DayMovieRanks;
