import { useState, useEffect } from 'react';
import BusRankGWD from 'components/BUS/BusGWD';
import DayMovieRanks from 'components/DayMovieRanks';
import WeekMovieRanks from 'components/WeekMoveRanks';
import BusRankGSND from 'components/BUS/BusGSND';
import BusRankD9 from 'components/BUS/BusD9';
import BusRankDS from 'components/BUS/BusDS';
import BusRankGGD from 'components/BUS/BusGGD';
import styled from 'styled-components';

const Data: any = {
   Day: <DayMovieRanks />,
   Week: <WeekMovieRanks />,
   GWD: <BusRankGWD />,
   GGD: <BusRankGGD />,
   D9: <BusRankD9 />,
   DS: <BusRankDS />,
   GSND: <BusRankGSND />,
};
const RandomRanks = () => {
   const random = ['Day', 'Week', 'GWD', 'GGD', 'D9', 'DS', 'GSND'];
   const [isRandom, setIsRandom] = useState<string>('Day');
   const bbb = (a: number) => Math.floor(Math.random() * (a - 0 + 1) + 0);
   const OnClick = () => {
      let result;
      result = bbb(6);
      setIsRandom(random[result]);
   };

   return (
      <>
         <Container>
            <ButtonBox>
               <RandomButton onClick={OnClick}>Random</RandomButton>
            </ButtonBox>
            <div>{Data[isRandom]}</div>
         </Container>
      </>
   );
};

export default RandomRanks;
const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`;
const ButtonBox = styled.div`
   text-align: center;
`;
const RandomButton = styled.button`
   width: 5rem;
   height: 5rem;
   border: none;
   /* transition-property: all;
   transition-duration: 5s;
   transition-timing-function: ease; */
   /* :hover {
      width: 300px;
      background-color: red;
   } */
`;
