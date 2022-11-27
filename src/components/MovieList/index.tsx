import { useQueryClient, useQuery } from '@tanstack/react-query';
// eslint-disable-next-line import/newline-after-import
import { Movies } from 'MocieList';

// searchDailyBoxOfficeList.json?key=bbc4c623fc0a820e7436db118bc1d95c&targetDt=20221123

function MoiveLists() {
  const axiosGetMovieList = async () => {
    const data = await Movies.getMovieList();
    return data;
  };
  const { data, status } = useQuery(['MovieList'], axiosGetMovieList);
  if (status === 'loading') return <div>Loading....</div>;
  return <div>aa</div>;
}

export default MoiveLists;
