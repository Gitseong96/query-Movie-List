import Maker from 'components/atom/Maker/Maker';
import { useMovieMaker } from 'Hooks/useMovieMaker';
function MovieMaker() {
   const movieMaker = useMovieMaker();
   const { data, status } = movieMaker;

   if (status === 'loading') return <div>Loading....</div>;

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
