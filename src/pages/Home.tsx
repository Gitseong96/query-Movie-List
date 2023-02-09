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
import { color } from 'style/theme';
import { colorFn } from 'style/randomColor';
import { useState } from 'react';
const Home = () => {
   usePrefetchBusGWD();
   usePrefetchDayRanks();
   usePrefetchWeekRanks();
   usePrefetchBusGGD();
   usePrefetchBusGSND();
   usePrefetchBusD9();
   usePrefetchBusDS();
   // const RandomColorNumber = () => Math.floor(Math.random() * (11 - 0 + 1) + 0);

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
   width: 500px;
   height: 600px;
   display: flex;
   padding-top: 3rem;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background-color: ${color.very_peri_2};
   border-radius: 2rem;
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
   background-color: ${color.very_peri_3};
`;
