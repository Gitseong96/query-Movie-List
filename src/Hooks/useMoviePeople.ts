import { axiosGetMoviePeople } from 'API';
import { useQuery } from '@tanstack/react-query';
import { queryKeys } from 'Reacy-Query/queryKeys';
import { PeopleConfig } from 'Type';

interface UseMoviePeople {
   data: PeopleConfig;
   status: string;
}
export const useMoviePeople = (): UseMoviePeople => {
   const { data, status } = useQuery([queryKeys.movieWeekRanks], axiosGetMoviePeople);
   return { data, status };
};
