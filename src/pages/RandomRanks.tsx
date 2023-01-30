import { useState, useEffect } from 'react';
import BusRankGWD from 'components/BUS/BusGWD';
import DayMovieRanks from 'components/DayMovieRanks';
import WeekMovieRanks from 'components/WeekMoveRanks';
import BusRankGSND from 'components/BUS/BusGSND';
import BusRankD9 from 'components/BUS/BusD9';
import BusRankDS from 'components/BUS/BusDS';
import BusRankGGD from 'components/BUS/BusGGD';
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
   const bbb = () => Math.floor(Math.random() * (6 - 0 + 1) + 0);
   const OnClick = () => {
      let result;
      result = bbb();
      setIsRandom(random[result]);
   };

   return (
      <>
         <div>
            <button onClick={OnClick}>Random</button>
         </div>
         {Data[isRandom]}
      </>
   );
};

export default RandomRanks;
