interface MovieListConfig {
   movieListResult: MovieList;
}
interface MovieList {
   totCnt: string;
   movieList: [];
}

interface PeopleConfig {
   peopleListResult: Peopleaa;
}
interface Peopleaa {
   totCnt: string;
   peopleList: [];
}

interface MakerConfig {
   companyListResult: Makeaa;
}
interface Makeaa {
   totCnt: string;
   companyList: [];
}

interface DayConfig {
   boxOfficeResult: BoxOfficeDay;
}
interface BoxOfficeDay {
   boxofficeType: string;
   showRange: string;
   dailyBoxOfficeList: [];
}

interface WeekConfig {
   boxOfficeResult: BoxOfficeWeek;
}
interface BoxOfficeWeek {
   boxofficeType: string;
   showRange: string;
   weeklyBoxOfficeList: [];
}
interface BusConfig {
   currentCount: number;
   data: any[];
   matchCount: number;
   page: number;
   perPage: number;
   totalCount: number;
}

interface BusData {
   순위: string;
   승차: string;
   정류장명: string;
   지역: string;
   총이용인원: string;
   하차: string;
}

export { BusConfig, MovieListConfig, BoxOfficeDay, PeopleConfig, MakerConfig, DayConfig, WeekConfig };
