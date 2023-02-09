import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useMapRandomData } from './useMapsRandom';
import { color } from 'style/theme';
import styled from 'styled-components';
const KakaoMaps = () => {
   const { random, RandomPoint } = useMapRandomData();
   return (
      <Container>
         <MapContainer>
            <TitleBox>
               <h1>Random Point</h1>
            </TitleBox>
            <Map
               center={{
                  lat: random.center.lat,
                  lng: random.center.lng,
               }}
               style={{
                  width: '100%',
                  height: '450px',
               }}
               level={5}>
               <MapMarker
                  position={{
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
         </MapContainer>
         <RandomButton onClick={RandomPoint}>Change</RandomButton>
      </Container>
   );
};

export default KakaoMaps;
const RandomButton = styled.button`
   width: 5rem;
   height: 5rem;
   border: none;
   border-radius: 1rem;
   margin-top: 0.5rem;
   background-color: ${color.sand_dollar_3};
   /* transition-property: all;
   transition-duration: 5s;
   transition-timing-function: ease; */
   /* :hover {
      width: 300px;
      background-color: red;
   } */
`;
const Container = styled.div`
   display: flex;
   flex-direction: column;
   width: 45rem;
   align-items: center;
   background-color: ${color.sand_dollar_1};
   padding-top: 2rem;
   padding-bottom: 3rem;
   border: none;
   border-radius: 2rem;
`;
const MapContainer = styled.div`
   width: 30rem;
   position: center;
`;
const TitleBox = styled.div`
   text-align: center;
`;
