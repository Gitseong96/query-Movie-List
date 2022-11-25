import React from "react";
import { useQueryClient ,useQuery  } from "@tanstack/react-query";
import axios from "axios";
import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const TargetKey =  ():string =>{
     const TargetDate = new Date();
    const year = TargetDate.getFullYear();
 const month = TargetDate.getMonth()+1;
const day = TargetDate.getDate();

return year.toString()+month.toString()+day.toString()
}
// searchDailyBoxOfficeList.json?key=bbc4c623fc0a820e7436db118bc1d95c&targetDt=20221123

const MOVIE_API ="bbc4c623fc0a820e7436db118bc1d95c"
const baseUrl =`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice`
const targetDt = "20221123"


interface MovieConfig {
    MOVIE_API:string;
    targetDt:string;
}
 const instance = axios.create({
     baseURL :"http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice"
 })
 
const responseBody = (response : AxiosResponse) =>response.data

const MovieRequest = {
    get: (url:string) => instance.get<MovieConfig>(url).then(responseBody)
}

export const Movies = {
    getMovies : () : Promise<MovieConfig> =>MovieRequest.get(`/searchDailyBoxOfficeList.json?key=${MOVIE_API}&targetDt=${targetDt}`)
    
}
export  function MovieList() {
    // const MOVIE_API ="bbc4c623fc0a820e7436db118bc1d95c"
    // const targetDt = TargetKey()
const axiosGetMovieList = async() =>{
    const data = await Movies.getMovies()
    console.log(data)
    return data
}
axiosGetMovieList()
const {data,error} =useQuery(["MovieList"],axiosGetMovieList)
// const data:[] = []
console.log(error)
    return (<div>
            <h1>1</h1>
        </div>)

}