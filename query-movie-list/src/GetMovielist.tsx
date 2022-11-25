import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import axios from 'axios'


const MovieGetQueryFn = async()=>{
    const {data} = await axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=bbc4c623fc0a820e7436db118bc1d95c&targetDt=20221123")
return data
}