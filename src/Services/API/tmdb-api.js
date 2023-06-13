const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const movies = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchAnimatino: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchTV: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  search: `/search/movie?api_key=${API_KEY}&language=en-US&query=`,
};

// search api https://api.themoviedb.org/3/search/movie?api_key=7834e7c9a549da564ee38e84ade61e97&language=en-US&query=avengers&page=1
export default movies;
