import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from './services/app';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieForReviews() {
      setLoading(true);
      try {
        const movie = await API.getMoviesForReviews(moviesId);
        setMovie(movie);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieForReviews();
  }, [moviesId]);

  return (
    <main>
      {loading && <Loader />}
      {movie && (
        <ul>
          {movie.results.map(mov => (
            <li key={mov.id}>
              <b>{mov.author}</b>
              <p>{mov.content}</p>
            </li>
          ))}
        </ul>
      )}
      {movie.total_results === 0 && (
        <p>We don't have any reviews for this movie</p>
      )}
    </main>
  );
};

export default Reviews;
