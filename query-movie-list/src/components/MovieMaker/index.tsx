import { useQueryClient, useQuery } from '@tanstack/react-query';
import { Movies } from 'MocieList';

function MovieMaker() {
  const axiosGetMovieMaker = async () => {
    const data = await Movies.getMovieMaker();
    return data;
  };
  const { data, status } = useQuery(['MovieMaker'], axiosGetMovieMaker);
  if (status === 'loading') return <div>Loading....</div>;
  return <div>aa</div>;
}

export default MovieMaker;
