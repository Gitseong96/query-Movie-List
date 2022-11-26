import React from 'react';
import axios from 'axios';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { Movies } from 'MocieList';

function WeekMovieRanks() {
  const axiosGetWeekMoviesRanks = async () => {
    const data = await Movies.getWeekMoviesRanks();
    return data;
  };
  const { data, status, error } = useQuery(
    ['MoivesWeekRank'],
    axiosGetWeekMoviesRanks,
  );
  console.log(error);
  if (status === 'loading') return <div>Loading....</div>;
  return <div>aa</div>;
  //   (
  //     <>
  //       <h1>{data.boxOfficeResult.boxofficeType}</h1>
  //       <h2>{data.boxOfficeResult.showRange}</h2>
  //       {data.boxOfficeResult.dailyBoxOfficeList.map((movie: any) => {
  //         return (
  //           <>
  //             <div>{movie.rank}</div>
  //             <div>{movie.movieNm}</div>
  //             <div>{movie.openDt}</div>
  //           </>
  //         );
  //       })}
  //     </>
  //   );
}

export default WeekMovieRanks;
