import BusRanks from 'components/atom/BusRanks';
import { queryClient } from 'Reacy-Query/queryClient';
import { queryKeysBus } from 'Reacy-Query/queryKeys';
import { BusConfig } from 'Type';
import { TableStyle, TH, TR, H1, THEAD } from 'components/DayMovieRanks';
function BusRankGWD() {
   const query: any = queryClient.getQueriesData([queryKeysBus.busGWD]);

   return (
      <TableStyle>
         <THEAD>
            <TR>
               <TH>
                  <H1>Rank</H1>
               </TH>
               <TH>
                  <H1>지역</H1>
               </TH>
               <TH>
                  <H1>정류장명</H1>
               </TH>
               <TH>
                  <H1>승차인원</H1>
               </TH>
               <TH>
                  <H1>하차인원</H1>
               </TH>
            </TR>
         </THEAD>
         <tbody>
            {query[0][1].data.map((bus: any) => {
               return (
                  <BusRanks
                     key={bus['순위']}
                     rank={bus['순위']}
                     map={bus['지역']}
                     busStop={bus['정류장명']}
                     busUp={bus['승차']}
                     busDwon={bus['하차']}
                  />
               );
            })}
         </tbody>
      </TableStyle>
   );
}

// console.log(query1[0][1].data[0]['승차']);
export default BusRankGWD;
