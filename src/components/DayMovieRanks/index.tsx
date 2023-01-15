import Ranks from 'components/atom/Ranks';

import { useDayRanks } from 'components/DayMovieRanks/useDayMovieRank';
function DayMovieRanks() {
   const dayRanks = useDayRanks();
   const { data, status } = dayRanks;
   if (status === 'loading') return <div>Loading....</div>;
   return (
      <div>
         <h1>{data?.boxOfficeResult.boxofficeType}</h1>
         <h2>{data?.boxOfficeResult.showRange}</h2>
         <div>
            {data?.boxOfficeResult.dailyBoxOfficeList.map((movie: any) => {
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
      </div>
   );
}

export default DayMovieRanks;
