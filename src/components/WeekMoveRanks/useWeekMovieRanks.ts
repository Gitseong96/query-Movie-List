import { axiosGetWeekMoviesRanks } from 'API';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'Reacy-Query/queryKeys';

export const useWeekRanks = () => {
   const { data, status } = useQuery([queryKeys.movieWeekRanks], axiosGetWeekMoviesRanks);
   return { data, status };
};
