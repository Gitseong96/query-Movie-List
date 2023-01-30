import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         //  staleTime: Infinity,
         cacheTime: 5 * 60 * 1000,
      },
   },
});
