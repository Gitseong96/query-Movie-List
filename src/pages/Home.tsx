import { Link } from 'react-router-dom';
import DayMovieRanks from 'components/DayMovieRanks';
import WeekMovieRanks from 'components/WeekMoveRanks';
const Home = () => {
   return (
      <>
         <Link to="/Ranks">
            <button>1</button>
         </Link>
         <DayMovieRanks />
         <WeekMovieRanks />
      </>
   );
};

export default Home;