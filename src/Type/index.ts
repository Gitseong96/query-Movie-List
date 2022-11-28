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
export { MovieListConfig, PeopleConfig, MakerConfig, DayConfig, WeekConfig };
