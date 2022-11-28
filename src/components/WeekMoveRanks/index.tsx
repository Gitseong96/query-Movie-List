import React from 'react';
import axios from 'axios';
import { useQueryClient, useQuery } from '@tanstack/react-query';
// import { Movies } from 'API';
// import { axiosGetWeekMoviesRanks } from 'API';
import Ranks from 'components/atom/Ranks/Ranks';
import { axiosGetWeekMoviesRanks } from '../../API';

function WeekMovieRanks() {
   const { data, status } = useQuery(['MoivesWeekRank'], axiosGetWeekMoviesRanks);

   if (status === 'loading') return <div>Loading....</div>;
   return (
      <>
         <h1>{data?.boxOfficeResult.boxofficeType}</h1>
         <h2>{data?.boxOfficeResult.showRange}</h2>
         <div>
            {data.boxOfficeResult.weeklyBoxOfficeList.map((movie: any) => {
               return (
                  <Ranks
                     key={movie.rank}
                     rank={movie.rank}
                     rankInten={movie.rankInten}
                     openDt={movie.openDt}
                     audiAcc={movie.audiAcc}
                     movieNm={movie.movieNm}
                  />
               );
            })}
         </div>
      </>
   );
}

export default WeekMovieRanks;
