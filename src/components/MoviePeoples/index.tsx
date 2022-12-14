import People from 'components/atom/People/People';
import { useMoviePeople } from 'Hooks/useMoviePeople';
function MoviePeople() {
   const PeopleData = useMoviePeople();
   const { data, status, currentPage, setCurrentPage, pageStr, setPageStr } = PeopleData;
   console.log(currentPage);
   // "다음" | "이전" |  "처음"

   if (status === 'loading') return <div>Loading....</div>;

   return (
      <>
         <div>
            <button onClick={() => setCurrentPage(currentPage - 1)}>이전</button>
            <button onClick={() => setCurrentPage(currentPage + 1)}>다음</button>
         </div>
         <div>{data.peopleListResult.totCnt}</div>
         {data.peopleListResult.peopleList.map((people: any) => {
            return <People peopleNm={people.peopleNm} repRoleNm={people.repRoleNm} filmoNames={people.filmoNames} />;
         })}
      </>
   );
}

export default MoviePeople;

// ts에서  event.target.value 값을 가져올때 HTMLInputElement 를 추가해야 값을 읽을 수 있다
