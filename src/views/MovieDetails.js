import {
  useParams,
  Outlet,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import * as API from '../services/app';
import Loader from '../components/Loader/Loader';
import { BiCaretLeft } from 'react-icons/bi';
import { FilmCard, Description, Button } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState('');
  const { moviesId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const backLinkHref = location?.state?.from;

  useEffect(() => {
    async function fetchMoviesById() {
      try {
        const movie = await API.getMoviesById(moviesId);
        setMovie(movie);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchMoviesById();
  }, [moviesId]);

  const onGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  const { poster_path, title, release_date, overview, vote_average } = movie;

  return (
    <>
      {!movie && <Loader />}
      {movie && (
        <div>
          <Button type="button" onClick={onGoBack}>
            <BiCaretLeft /> Go back
          </Button>

          <FilmCard>
            <img
              src={`http://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
            />
            <Description>
              <h2>
                {title} ({release_date.substr(0, 4)})
              </h2>
              <p>User score: {Math.round(vote_average * 10)} %</p>
              <h3>Overview:</h3>
              <p> {overview}</p>
              <h3>Genres:</h3>
              <p>
                {movie &&
                  movie.genres.map(item => (
                    <span key={item.id}> {item.name} </span>
                  ))}
              </p>
            </Description>
          </FilmCard>
        </div>
      )}
      <hr />
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <hr />
      <Suspense
        fallback={
          <div>
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
