import { useMovieList } from 'Hooks/useMovieList';
function MoiveList() {
   const movieList = useMovieList();
   const { data, status } = movieList;
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
