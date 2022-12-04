import Ranks from 'components/atom/Ranks/Ranks';
import styles from './DayMovie.module.css';
import { useDayRanks } from 'Hooks/useDayMovieRank';
function DayMovieRanks() {
   const dayRanks = useDayRanks();
   const { data, status } = dayRanks;
   if (status === 'loading') return <div>Loading....</div>;
   return (
      <div className={styles.container}>
         a<h1 className={styles.title}>{data?.boxOfficeResult.boxofficeType}</h1>
         <h2 className={styles.title}>{data?.boxOfficeResult.showRange}</h2>
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
