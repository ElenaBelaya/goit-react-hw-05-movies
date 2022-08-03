import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const createViews = pathName => {
  return lazy(() => {
    return import(`${pathName}`);
  });
};

const Layout = createViews('./Layout/Layout');
const HomeViews = createViews('./views/HomeViews');
const Movies = createViews('./movieList/MovieList');
const MovieDetails = createViews('./views/MovieDetails');
const Cast = createViews('./Cast');
const Reviews = createViews('./Reviews');
const NotFoundView = createViews('./views/NotFoundView');

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeViews />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};

export default App;
