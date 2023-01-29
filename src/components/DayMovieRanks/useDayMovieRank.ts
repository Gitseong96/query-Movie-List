import { useQuery, useQueryClient } from '@tanstack/react-query';
import { axiosGetDayMovieRanks } from 'API';
import { queryKeysMovie } from 'Reacy-Query/queryKeys';
import { DayConfig } from 'Type';
interface UseDayRanks {
   data: DayConfig;
   status: string;
}

export const useDayRanks = (): UseDayRanks => {
   const { data, status } = useQuery([queryKeysMovie.movieDayRanks], axiosGetDayMovieRanks);
   return { data, status };
};

export const usePrefetchDayRanks = (): void => {
   const queryClient = useQueryClient();
   queryClient.prefetchQuery([queryKeysMovie.movieDayRanks], axiosGetDayMovieRanks);
};
