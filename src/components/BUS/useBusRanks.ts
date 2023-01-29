import { useQuery, useQueryClient } from '@tanstack/react-query';
import {
   axiosGetBusInfoD9,
   axiosGetBusInfoDS,
   axiosGetBusInfoGGD,
   axiosGetBusInfoGSMD,
   axiosGetBusInfoGangwon_do,
} from 'API';
import { BusConfig } from 'Type';
import { queryKeysBus } from 'Reacy-Query/queryKeys';
interface UseDayBus {
   data: BusConfig;
   status: string;
}
const useBusRanksGWD = (): UseDayBus => {
   const { data, status } = useQuery([queryKeysBus.busGWD], axiosGetBusInfoGangwon_do);
   return { data, status };
};
const usePrefetchBusGWD = (): void => {
   const queryClient = useQueryClient();
   queryClient.prefetchQuery([queryKeysBus.busGWD], axiosGetBusInfoGangwon_do);
};
const usePrefetchBusGGD = (): void => {
   const queryClient = useQueryClient();
   queryClient.prefetchQuery([queryKeysBus.busGGD], axiosGetBusInfoGGD);
};
const usePrefetchBusGSND = (): void => {
   const queryClient = useQueryClient();
   queryClient.prefetchQuery([queryKeysBus.busGSND], axiosGetBusInfoGSMD);
};

const usePrefetchBusD9 = (): void => {
   const queryClient = useQueryClient();
   queryClient.prefetchQuery([queryKeysBus.busD9], axiosGetBusInfoD9);
};

const usePrefetchBusDS = (): void => {
   const queryClient = useQueryClient();
   queryClient.prefetchQuery([queryKeysBus.busDS], axiosGetBusInfoDS);
};

export { useBusRanksGWD, usePrefetchBusGWD, usePrefetchBusGGD, usePrefetchBusGSND, usePrefetchBusD9, usePrefetchBusDS };
