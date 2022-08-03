import { Outlet, Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';

import * as API from '../services/app';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSeachParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    async function searchMovies() {
      if (query === '') {
        return;
      }
      setLoading(true);
      try {
        const movies = await API.getMoviesByQuery(query);
        setMovies(movies.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    searchMovies();
  }, [query]);

  const handleFilmName = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSeachParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <main>
      <form onSubmit={handleFilmName}>
        <input type="text" name="query" placeholder="Search movies" />
        <button type="submit">Search</button>
      </form>

      {loading && <Loader />}
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  );
}
export default Movies;

Movies.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool,
  searchParams: PropTypes.string,
  location: PropTypes.object,
  query: PropTypes.string,
  movie: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string,
  handleFilmName: PropTypes.func,
};
