/* eslint-disable react/jsx-key */
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import People from 'components/atom/People/People';
import { axiosGetMoviePeople } from 'API';

function MoviePeople() {
   const { data, status } = useQuery(['MoviePeople'], axiosGetMoviePeople);
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
