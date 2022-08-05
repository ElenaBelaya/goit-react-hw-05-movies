import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../services/app';
import Loader from '../components/Loader/Loader';

const Cast = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchMoviesForCast() {
      setLoading(true);
      try {
        const movie = await API.getMoviesForCast(moviesId);
        setMovie(movie);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchMoviesForCast();
  }, [moviesId]);

  return (
    <main>
      {loading && <Loader />}
      {movie !== '' && (
        <div>
          <ul>
            {movie.cast.map(mov => (
              <li key={mov.id}>
                {mov.profile_path && (
                  <img
                    src={`http://image.tmdb.org/t/p/w200${mov.profile_path}`}
                    alt={mov.original_name}
                  />
                )}

                <p>{mov.original_name}</p>
                <p>Character: {mov.character}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Cast;
