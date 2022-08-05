import { useEffect, useState } from 'react';
import * as API from '../services/app';
import PropTypes from 'prop-types';

function useFetchMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await API.getMovies();
        setMovies(movies.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMovies();
  }, []);
  return { movies };
}
export default useFetchMovies;

useFetchMovies.PropTypes = {
  fetchMovies: PropTypes.func,
  movies: PropTypes.array,
};
