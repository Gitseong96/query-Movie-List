import { useQuery } from '@tanstack/react-query';
import { axiosGetDayMovieRanks, axiosGetMoviesRank } from 'API';
import { queryKeys } from 'Reacy-Query/queryKeys';

export const useDayRanks = () => {
   const { data, status } = useQuery([queryKeys.movieDayRanks], axiosGetMoviesRank);
   return { data, status };
};
