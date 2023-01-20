import { axiosGetWeekMoviesRanks, axiosGetBusInfoGangwon_do } from 'API';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'Reacy-Query/queryKeys';

export const useWeekRanks = () => {
   const { data, status } = useQuery([queryKeys.movieWeekRanks], axiosGetWeekMoviesRanks);
   return { data, status };
};

export const useBuseData = () => {
   const { data, status } = useQuery(['da'], axiosGetBusInfoGangwon_do);
   return { data, status };
};
