import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useMapRandomData } from './useMapsRandom';
const KakaoMaps = () => {
   const { random, RandomPoint } = useMapRandomData();
   return (
      <>
         <Map // 지도를 표시할 Container
            center={{
               // 지도의 중심좌표
               lat: random.center.lat,
               lng: random.center.lng,
            }}
            style={{
               // 지도의 크기
               width: '100%',
               height: '450px',
            }}
            level={3} // 지도의 확대 레벨
         >
            <MapMarker // 마커를 생성합니다
               position={{
                  // 마커가 표시될 위치입니다
                  lat: random.center.lat,
                  lng: random.center.lng,
               }}>
               <div>
                  RandomPoint
                  <br />
                  {random.center.lat}
                  <br />
                  {random.center.lng}
               </div>
            </MapMarker>
         </Map>
         <button onClick={RandomPoint}>Change</button>
      </>
   );
};

export default KakaoMaps;
