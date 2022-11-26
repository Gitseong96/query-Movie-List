import React from 'react';
import axios from 'axios';
import { useQueryClient, useQuery } from '@tanstack/react-query';
// eslint-disable-next-line import/newline-after-import
import { Movies } from 'MocieList';

// searchDailyBoxOfficeList.json?key=bbc4c623fc0a820e7436db118bc1d95c&targetDt=20221123

function DayMovieRanks() {
  const axiosGetDayMovieRanks = async () => {
    const data = await Movies.getDayMoviesRanks();
    return data;
  };
  const { data, status } = useQuery(['MoivesRank'], axiosGetDayMovieRanks);
  if (status === 'loading') return <div>Loading....</div>;
  return (
    <>
      <h1>{data.boxOfficeResult.boxofficeType}</h1>
      <h2>{data.boxOfficeResult.showRange}</h2>
      {data.boxOfficeResult.dailyBoxOfficeList.map((movie: any) => {
        return (
          <>
            <div>{movie.rank}</div>
            <div>{movie.movieNm}</div>
            <div>{movie.openDt}</div>
          </>
        );
      })}
    </>
  );
}

export default DayMovieRanks;
