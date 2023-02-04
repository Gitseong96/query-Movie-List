import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RandomRanks from 'pages/RandomRanks';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './Reacy-Query/queryClient';
import './App.css';
import Home from 'pages/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from 'style/globalStyle';
import RandomMaps from 'pages/RandomMaps';
function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <GlobalStyle />
         <div className="AppLayout">
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/Ranks" element={<RandomRanks />}></Route>
                  <Route path="/Maps" element={<RandomMaps />}></Route>
               </Routes>
            </BrowserRouter>
            <ReactQueryDevtools />
         </div>
      </QueryClientProvider>
   );
}

export default App;
