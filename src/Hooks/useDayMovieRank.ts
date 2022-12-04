import { useQuery } from '@tanstack/react-query';
import { axiosGetDayMovieRanks } from 'API';
import { queryKeys } from 'Reacy-Query/queryKeys';
import { DayConfig } from 'Type';
interface UseDayRanks {
   data: DayConfig;
   status: string;
}

export const useDayRanks = (): UseDayRanks => {
   const { data, status } = useQuery([queryKeys.movieDayRanks], axiosGetDayMovieRanks);
   console.log(data, status);
   return { data, status };
};
