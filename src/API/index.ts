import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { MovieListConfig, PeopleConfig, MakerConfig, DayConfig, WeekConfig } from 'Type';

// const TargetDate = new Date();
// const year = TargetDate.getFullYear();
// const month = TargetDate.getMonth() + 1;
// const day = TargetDate.getDate() - 1;

// const targetData = year.toString() + month.toString() + day.toString();

// searchDailyBoxOfficeList.json?key=bbc4c623fc0a820e7436db118bc1d95c&targetDt=20221123

const MOVIE_API = 'bbc4c623fc0a820e7436db118bc1d95c';
const baseUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/`;
// const targetDt = TargetKey();
const targetDt = '20221201';

const instanceMovie = axios.create({
   baseURL: 'https://www.kobis.or.kr/kobisopenapi/webservice/rest',
});

const responseBody = (response: AxiosResponse) => response.data;

const Request = {
   getMovie: (url: string) => instanceMovie.get<AxiosRequestConfig>(url).then(responseBody),
};

const Api = {
   getDayMoviesRanks: (): Promise<DayConfig> =>
      Request.getMovie(`/boxoffice/searchDailyBoxOfficeList.json?key=${MOVIE_API}&targetDt=${targetDt}`),
   getWeekMoviesRanks: (): Promise<WeekConfig> =>
      Request.getMovie(`/boxoffice/searchWeeklyBoxOfficeList.json?key=${MOVIE_API}&targetDt=${targetDt}`),
   getMovieList: (): Promise<MovieListConfig> =>
      Request.getMovie(`/movie/searchMovieList.json?key=${MOVIE_API}&itemPerPage=${10}`),
   getMovieMaker: (): Promise<MakerConfig> =>
      Request.getMovie(`/company/searchCompanyList.json?key=${MOVIE_API}&itemPerPage=${10}`),
   getMoviePeople: (pagenum: number): Promise<PeopleConfig> =>
      Request.getMovie(`/people/searchPeopleList.json?key=${MOVIE_API}&itemPerPage=${10}&curPage=${pagenum}`),
};

const axiosGetMovieList = async () => {
   const data = await Api.getMovieList();
   return data;
   // 여기 리턴값중 movieCd를 통해서 상세 데이터를 가져올수 있다
};
const axiosGetDayMovieRanks = async () => {
   const data = await Api.getDayMoviesRanks();
   return data;
};
const axiosGetWeekMoviesRanks = async () => {
   const data = await Api.getWeekMoviesRanks();
   return data;
};
const axiosGetMovieMaker = async () => {
   const data = await Api.getMovieMaker();
   return data;
   // 여기서 companyCd를 통해서 영화사 세부 데이터를 확인 가능
};
const axiosGetMoviePeople = async (pagenum: number) => {
   const data = await Api.getMoviePeople(pagenum);
   return data;
   // peopleCd 를 통해서 영화인 데이터를 자세히 볼수 있다
};
export { axiosGetMovieList, axiosGetDayMovieRanks, axiosGetMoviePeople, axiosGetWeekMoviesRanks, axiosGetMovieMaker };
