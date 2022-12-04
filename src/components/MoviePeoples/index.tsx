import People from 'components/atom/People/People';
import { useMoviePeople } from 'Hooks/useMoviePeople';
function MoviePeople() {
   const PeopleData = useMoviePeople();
   const { data, status } = PeopleData;

   if (status === 'loading') return <div>Loading....</div>;

   return (
      <>
         <div>{data.peopleListResult.totCnt}</div>
         {data.peopleListResult.peopleList.map((people: any) => {
            return <People peopleNm={people.peopleNm} repRoleNm={people.repRoleNm} filmoNames={people.filmoNames} />;
         })}
      </>
   );
}

export default MoviePeople;
