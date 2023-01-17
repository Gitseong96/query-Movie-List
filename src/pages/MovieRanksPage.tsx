import DayMovieRanks from 'components/DayMovieRanks';
import WeekMovieRanks from 'components/WeekMoveRanks';
import { useState } from 'react';
const MovieRanksPage = () => {
   const [isopen, setIsopen] = useState<string>('Day');
   return (
      <>
         <div>
            <button onClick={() => setIsopen('Day')}>Day</button>
            <button onClick={() => setIsopen('Week')}>week</button>
         </div>
         <div>{isopen === 'Day' ? <DayMovieRanks /> : <WeekMovieRanks />}</div>
      </>
   );
};

export default MovieRanksPage;
