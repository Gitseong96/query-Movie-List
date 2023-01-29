import { Link } from 'react-router-dom';

import {
   usePrefetchBusGWD,
   usePrefetchBusGGD,
   usePrefetchBusGSND,
   usePrefetchBusD9,
   usePrefetchBusDS,
} from 'components/BUS/useBusRanks';
import { usePrefetchDayRanks } from 'components/DayMovieRanks/useDayMovieRank';
import { usePrefetchWeekRanks } from 'components/WeekMoveRanks/useWeekMovieRanks';

const Home = () => {
   usePrefetchBusGWD();
   usePrefetchDayRanks();
   usePrefetchWeekRanks();
   usePrefetchBusGGD();
   usePrefetchBusGSND();
   usePrefetchBusD9();
   usePrefetchBusDS();
   return (
      <>
         <h1>랜덤 순위</h1>
         <Link to="/Ranks">
            <button>ㄲ</button>
         </Link>
      </>
   );
};

export default Home;
