import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DayMovieRanks from 'components/DayMovieRanks';
import MoviePeople from 'components/MoviePeoples';
import MovieMaker from 'components/MovieMaker';
import MovieLists from 'components/MovieList';
import WeekMovieRanks from 'components/WeekMoveRanks';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MovieLists />
      {/* <MovieList /> */}
      {/* <DayMovieRanks /> */}
      {/* <MoviePeople /> */}
      {/* <MovieMaker /> */}
      {/* <WeekMovieRanks /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
