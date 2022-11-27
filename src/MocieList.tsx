import React, { useState, useEffect } from 'react';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { ReactNode } from 'react';

const TargetKey = (): string => {
  const TargetDate = new Date();
  const year = TargetDate.getFullYear();
  const month = TargetDate.getMonth() + 1;
  const day = TargetDate.getDate();

  return year.toString() + month.toString() + day.toString();
};
// searchDailyBoxOfficeList.json?key=bbc4c623fc0a820e7436db118bc1d95c&targetDt=20221123

const MOVIE_API = 'bbc4c623fc0a820e7436db118bc1d95c';
const baseUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice`;
const targetDt = '20221123';

interface MovieConfig {
  movieCd?: string;
  companyCd?: string;
  peopleCd?: string;
  boxOfficeResutl: BoxOfficeResutl;
}
interface ResponseData {
  boxOfficeResult: BoxOfficeResutl;
}
interface BoxOfficeResutl {
  boxofficeType: string;
  showRange: string;
  dailyBoxOfficeList: [];
}
const instance = axios.create({
  baseURL: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest',
});

const responseBody = (response: AxiosResponse) => response.data;

const MovieRequest = {
  get: (url: string) =>
    instance.get<AxiosRequestConfig>(url).then(responseBody),
};

export const Movies = {
  getDayMoviesRanks: (): Promise<ResponseData> =>
    MovieRequest.get(
      `/boxoffice/searchDailyBoxOfficeList.json?key=${MOVIE_API}&targetDt=${targetDt}`,
    ),
  getWeekMoviesRanks: (): Promise<MovieConfig> =>
    MovieRequest.get(
      `/boxofficesearchWeeklyBoxOfficeList.json?key=${MOVIE_API}&targetDt=${targetDt}`,
    ),
  getMovieList: (): Promise<MovieConfig> =>
    MovieRequest.get(
      `/movie/searchMovieList.json?key=${MOVIE_API}&itemPerPage=${100}`,
    ), // 무한 스크롤 구현 ㄱ
  getMovieMaker: (): Promise<MovieConfig> =>
    MovieRequest.get(
      `/company/searchCompanyList.json?key=${MOVIE_API}&itemPerPage=${100}`,
    ), // 무한 스크롤 구현 ㄱ
  getMoviePeople: (): Promise<MovieConfig> =>
    MovieRequest.get(
      `/people/searchPeopleList.json?key=${MOVIE_API}&itemPerPage=${100}`,
    ), // 무한스크롤 구현 ㄱ
};
export function MovieList() {
  // const MOVIE_API ="bbc4c623fc0a820e7436db118bc1d95c"
  // const targetDt = TargetKey()
  const queryClient = useQueryClient();
  const axiosGetMovieList = async () => {
    const data = await Movies.getMovieList();
    return data;
    // 여기 리턴값중 movieCd를 통해서 상세 데이터를 가져올수 있다
  };
  const axiosGetDayMovieRanks = async () => {
    const data = await Movies.getDayMoviesRanks();
    return data;
  };
  const axiosGetWeekMoviesRanks = async () => {
    const data = await Movies.getWeekMoviesRanks();
    return data;
  };
  const axiosGetMovieMaker = async () => {
    const data = await Movies.getMovieMaker();
    return data;
    // 여기서 companyCd를 통해서 영화사 세부 데이터를 확인 가능
  };
  const axiosGetMoviePeople = async () => {
    const data = await Movies.getMoviePeople();
    return data;
    // peopleCd 를 통해서 영화인 데이터를 자세히 볼수 있다
  };
  // const {data,error} =useQuery(["DayMovieRank"],axiosGetDayMovieRanks);
  const { data, status } = useQuery(['MovieRank'], axiosGetDayMovieRanks);
  // const data:[] = []
  console.log(data?.boxOfficeResult.boxofficeType);
  if (status === 'loading') return <div>aa</div>;
  return (
    <>
      <div>a</div>
      <div>{data?.boxOfficeResult.boxofficeType}</div>
    </>
  );
}
