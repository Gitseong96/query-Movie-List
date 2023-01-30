import { axiosGetMovieMaker } from 'API';
import { useQuery } from '@tanstack/react-query';
import { queryKeysMovie } from 'Reacy-Query/queryKeys';
import { MakerConfig } from 'Type';

interface UseMovieMaker {
   data: MakerConfig;
   status: string;
}
export const useMovieMaker = (): UseMovieMaker => {
   const { data, status } = useQuery([queryKeysMovie.movieMaker], axiosGetMovieMaker);
   return { data, status };
};
