import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Movies } from 'MocieList';

function MoviePeople() {
  const axiosGetMoviePeople = async () => {
    const data = await Movies.getMoviePeople();
    return data;
  };
  const { data, status } = useQuery(['MoviePeople'], axiosGetMoviePeople);
  if (status === 'loading') return <div>Loading....</div>;

  return <div>aa</div>;
}

export default MoviePeople;
