import { useWeekRanks } from 'Hooks/useWeekMovieRanks';
import Ranks from 'components/atom/Ranks/Ranks';

function WeekMovieRanks() {
   const weekRanks = useWeekRanks();
   const { data, status } = weekRanks;

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
