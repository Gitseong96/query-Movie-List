import Ranks from 'components/atom/Ranks';
import { queryClient } from 'Reacy-Query/queryClient';
import styled from 'styled-components';
import { queryKeysBus, queryKeysMovie } from 'Reacy-Query/queryKeys';
import { DayConfig } from 'Type';
function DayMovieRanks() {
   // const dayRanks = useDayRanks();
   // const { data, status } = dayRanks;
   // if (status === 'loading') return <div>Loading....</div>;
   // const query = quertCache.find([queryKeysBus.busGWD]);
   const query: DayConfig = queryClient.getQueryData([queryKeysMovie.movieDayRanks]);
   const query1: any = queryClient.getQueriesData([queryKeysBus.busD9]);
   const query2: any = queryClient.getQueriesData([queryKeysBus.busGGD]);
   // console.log(query);
   console.log(query1[0][1].data[0]['승차']);
   console.log(query1);
   // console.log(query2);
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
export { TableStyle, TH, TR, H1, THEAD };
