import React from 'react';
import axios from 'axios';
import { MovieList } from 'MocieList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
<MovieList/>
<ReactQueryDevtools/>
    </QueryClientProvider>
  );
}




export default App;
