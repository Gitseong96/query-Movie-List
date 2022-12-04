import React from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import DayMovieRanks from 'components/DayMovieRanks';
import MoviePeople from 'components/MoviePeoples';
import MovieMaker from 'components/MovieMaker';
import MovieList from 'components/MovieList';
import WeekMovieRanks from 'components/WeekMoveRanks';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Reacy-Query/queryClient';
import './App.css';

function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <div className="AppLayout">
            {/* <MovieList /> */}
            <DayMovieRanks />
            {/* <MoviePeople /> */}
            {/* <MovieMaker /> */}
            {/* <WeekMovieRanks /> */}
            <ReactQueryDevtools />
         </div>
      </QueryClientProvider>
   );
}

export default App;
