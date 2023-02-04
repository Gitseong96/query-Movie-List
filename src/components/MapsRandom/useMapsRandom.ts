import { useState } from 'react';
import { latValidation, lngValidation } from './RandomNumber';
export const useMapRandomData = () => {
   const [random, setRandom] = useState({
      // 지도의 초기 위치
      center: { lat: 35.560606, lng: 129.231068 },
      // 지도 위치 변경시 panto를 이용할지에 대해서 정의
      isPanto: false,
   });

   const RandomPoint = (): void => {
      setRandom({ ...random, center: { lat: latValidation(), lng: lngValidation() } });
   };

   return { random, setRandom, RandomPoint };
};
