import { Link } from 'react-router-dom';
import useFetchMovies from '../hooks/useFetchMovies';
import PropTypes from 'prop-types';

const HomeViews = () => {
  const { movies } = useFetchMovies();

  return (
    <main>
      <h1>Trending today</h1>

      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: '/' }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default HomeViews;

HomeViews.propTypes = {
  movies: PropTypes.array,
  movie: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string,
  useFetchMovies: PropTypes.func,
};
