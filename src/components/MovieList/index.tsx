/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-useless-fragment */
import { useQuery } from '@tanstack/react-query';
// eslint-disable-next-line import/newline-after-import
// import ListMovie from 'components/atom/ListMovie';
import { axiosGetMovieList } from '../../API';

// searchDailyBoxOfficeList.json?key=bbc4c623fc0a820e7436db118bc1d95c&targetDt=20221123

function MoiveList() {
   const { data, status } = useQuery(['MovieList'], axiosGetMovieList);
   if (status === 'loading') return <div>Loading....</div>;

   return <div>미정</div>;
   //   return (
   //     <>
   //       <div>{data.movieListResult.totCnt}</div>
   //       {data.movieListResult.movieList.map((list: any) => {
   //         return (
   //           <ListMovie
   //             movieNm={list.movieNm}
   //             prdtStatNm={list.prdtStatNm}
   //             repGenreNm={list.prdtStatNm}
   //           />
   //         );
   //       })}
   //     </>
   //   );
}

export default MoiveList;
