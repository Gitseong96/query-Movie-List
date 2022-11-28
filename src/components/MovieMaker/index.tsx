import { useQueryClient, useQuery } from '@tanstack/react-query';
// import { Movies } from 'API';
import Maker from 'components/atom/Maker/Maker';
import { axiosGetMovieMaker } from '../../API';

function MovieMaker() {
   const { data, status } = useQuery(['MovieMaker'], axiosGetMovieMaker);
   if (status === 'loading') return <div>Loading....</div>;
   // console.log(data.companyListResult.companyList);
   return (
      <>
         <div>{data.companyListResult.totCnt}</div>;
         {data.companyListResult.companyList.map((maker: any) => {
            return (
               <Maker
                  key={maker.companyCd}
                  companyNm={maker.companyNm}
                  ceoNum={maker.ceoNm}
                  filmNames={maker.filmNames}
               />
            );
         })}
      </>
   );
}

export default MovieMaker;
