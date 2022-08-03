import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const BASE_KEY = '3c9b3437ebab156a512248e157c99300';

export const getMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${BASE_KEY}`);
  return response.data;
};

export const getMoviesByQuery = async query => {
  const response = await axios.get(
    `search/movie?api_key=${BASE_KEY}&query=${query}`
  );
  return response.data;
};

export const getMoviesById = async moviesId => {
  const response = await axios.get(`movie/${moviesId}?api_key=${BASE_KEY}`);
  return response.data;
};

export const getMoviesForCast = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/credits?api_key=${BASE_KEY}`
  );
  return response.data;
};

export const getMoviesForReviews = async moviesId => {
  const response = await axios.get(
    `/movie/${moviesId}/reviews?api_key=${BASE_KEY}`
  );
  return response.data;
};
