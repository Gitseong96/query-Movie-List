import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
      <Container>
         <ButtonBox>
            <Link to="/Ranks">
               <ButtonStyle>랜덤 순위</ButtonStyle>
            </Link>
            <Link to="/Maps">
               <ButtonStyle>랜던 좌표찍기</ButtonStyle>
            </Link>
         </ButtonBox>
      </Container>
   );
};

export default Home;

const Container = styled.div`
   width: 100%;
   height: 100vh;
   display: flex;
   padding-top: 3rem;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`;

const ButtonBox = styled.div`
   /* display: flex;
   flex-direction: column; */
`;
const ButtonStyle = styled.button`
   display: flex;
   flex-direction: row;
   width: 15rem;
   height: 15rem;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
   text-align: center;
   border: none;
   border-radius: 2rem;
   margin-right: 1rem;
   margin-bottom: 1rem;
`;
