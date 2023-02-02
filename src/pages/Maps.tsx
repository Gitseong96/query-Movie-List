import { useState } from 'react';
import { MapMarker, Map, MarkerClusterer } from 'react-kakao-maps-sdk';

interface RandomConfig {
   lat: number;
   lng: number;
}
export default function Maps() {
   const [isRandom, setIsRandom] = useState<number>();
   const [isRandom1, setIsRandom1] = useState<number>();
   const [isRandom2, setIsRandom2] = useState<number>();
   const [isRandomData, setIsRandomData] = useState<RandomConfig>();
   const [state, setState] = useState({
      // 지도의 초기 위치
      center: { lat: 35.560606, lng: 129.231068 },
      // 지도 위치 변경시 panto를 이용할지에 대해서 정의
      isPanto: false,
   });
   const latData = () => Math.random();
   const lat = () => Math.floor(Math.random() * (38 - 33 + 1) + 33);
   const lng = () => Math.floor(Math.random() * (130 - 125 + 1) + 125);
   //   33.169550 ~38.599814
   //  125.202760~130.939545
   const pointRandom = (value: number, exp: number) => {
      exp = Number(exp);
      value = Number(value);
      if (exp % 1 !== 0 || Number.isNaN(value)) {
         return NaN;
      } else if (exp === 0) {
         return Math.round(value);
      }
      const magnitude = value.toString().split('e');
      const adjustedValue = Math.round(Number(`${magnitude}e${0 - exp}`));
      // Shift back
      const [newMagnitude, newExponent = 0] = adjustedValue.toString().split('e');
      return Number(`${newMagnitude}e${+newExponent + exp}`);
   };
   const pointData = () => Math.random();
   const validation = () => {
      let latData = lat();
      let lngData = lng();
      let Randompoint = pointData();
      let data = pointRandom(Randompoint, -6);
      let result = latData + data;
      console.log(result);
      if (!(result > 33.16955 && result < 38.599814)) {
         validation();
      } else {
         // state에 저장 하나
         return result;
      }
   };

   const OnClick = () => {
      let result;
      let result1;
      let result2;
      let result3;
      console.log(validation());
      result = lat();
      result1 = lng();
      result3 = latData();
      console.log(result3);
      result2 = pointRandom(result3, -6);
      setIsRandom2(result2);
      setIsRandom1(result1);
      setIsRandom(result);
      console.log(isRandom);
      console.log(isRandom1);
      console.log(isRandom2);
   };
   return (
      <>
         <Map // 지도를 표시할 Container
            center={{
               // 지도의 중심좌표
               lat: state.center.lat,
               lng: state.center.lng,
            }}
            style={{
               // 지도의 크기
               width: '100%',
               height: '450px',
            }}
            level={3} // 지도의 확대 레벨
         />
         <button onClick={OnClick}>Change</button>
      </>
   );
}
