import { useState } from 'react';
import { MapMarker, Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import KakaoMaps from 'components/MapsRandom/MapsRandom';
interface RandomConfig {
   lat: number;
   lng: number;
}
export default function RandomMaps() {
   return (
      <>
         <KakaoMaps />
      </>
   );
}
