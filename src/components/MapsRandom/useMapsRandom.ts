import { useState } from 'react';
import { latValidation, lngValidation } from './RandomNumber';
export const useMapRandomData = () => {
   const [random, setRandom] = useState({
      center: { lat: 35.560606, lng: 129.231068 },
      isPanto: false,
   });

   const RandomPoint = (): void => {
      let latData = latValidation();
      let lngData = lngValidation();
      console.log(latData, lngData);
      if (latData === undefined || lngData === undefined) {
         RandomPoint();
      } else if (latData !== undefined && lngData !== undefined) {
         setRandom({ ...random, center: { lat: latData, lng: lngData } });
      }
   };

   return { random, setRandom, RandomPoint };
};
