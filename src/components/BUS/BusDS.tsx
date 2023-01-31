import BusRanks from 'components/atom/BusRanks';
import { queryClient } from 'Reacy-Query/queryClient';
import { queryKeysBus } from 'Reacy-Query/queryKeys';
import { TrStyle, H1, THEAD, TableStyle, TdStyle, TR, TH } from 'style/tableStyle';
function BusRankDS() {
   const query: any = queryClient.getQueriesData([queryKeysBus.busDS]);

   return (
      <TableStyle>
         <THEAD>
            <TR>
               <TH>
                  <H1>순위</H1>
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

export default BusRankDS;
