import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { axiosGetMoviePeople } from 'API';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { queryKeysMovie } from 'Reacy-Query/queryKeys';
import { PeopleConfig } from 'Type';

// type PageString = '다음' | '이전' | '처음';
interface UseMoviePeople {
   data: PeopleConfig;
   status: string;
   currentPage: number;
   setCurrentPage: Dispatch<SetStateAction<number>>;
   pageNum?: number[];
   setPageNum?: Dispatch<SetStateAction<number[]>>;
   pageStr?: string;
   setPageStr?: Dispatch<SetStateAction<string>>;
}
export const useMoviePeople = (): UseMoviePeople => {
   const [currentPage, setCurrentPage] = useState(1);
   //  const [pageNum, setPageNum] = useState([1, 2, 3, 4, 5]);
   //  const [pageStr, setPageStr] = useState('처음');
   const queryClient = useQueryClient();
   useEffect(() => {
      const nextPage = currentPage + 1;
      queryClient.prefetchQuery([queryKeysMovie.moviePeoples, nextPage], () => axiosGetMoviePeople(nextPage));
   }, [currentPage, queryClient]);

   const { data, status } = useQuery([queryKeysMovie.moviePeoples, currentPage], () =>
      axiosGetMoviePeople(currentPage),
   );

   return { data, status, currentPage, setCurrentPage };
};
