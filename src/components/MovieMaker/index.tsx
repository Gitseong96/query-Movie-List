import Maker from 'components/atom/Maker';
import { useMovieMaker } from 'components/MovieMaker/useMovieMaker';
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
