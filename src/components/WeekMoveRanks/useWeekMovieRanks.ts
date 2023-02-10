import { axiosGetWeekMoviesRanks, axiosGetBusInfoGangwon_do } from 'API';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeysMovie } from 'Reacy-Query/queryKeys';

export const useWeekRanks = () => {
   const { data, status } = useQuery([queryKeysMovie.movieWeekRanks], axiosGetWeekMoviesRanks);
   return { data, status };
};
export const usePrefetchWeekRanks = (): void => {
   const queryClient = useQueryClient();
   queryClient.prefetchQuery([queryKeysMovie.movieWeekRanks], axiosGetWeekMoviesRanks);
};
