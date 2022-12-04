import { axiosGetMovieList } from 'API';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'Reacy-Query/queryKeys';
import { MovieListConfig } from 'Type';
interface UseMovieList {
   data: MovieListConfig;
   status: string;
}

export const useMovieList = (): UseMovieList => {
   const { data, status } = useQuery([queryKeys.movieList], axiosGetMovieList);
   return { data, status };
};
