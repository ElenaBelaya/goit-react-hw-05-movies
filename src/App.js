import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';

const createViews = componentName => {
  return lazy(() => {
    return import(`./views/${componentName}`);
  });
};

const HomeViews = createViews('HomeViews');
const Movies = createViews('MovieList');
const MovieDetails = createViews('MovieDetails');
const Cast = createViews('Cast');
const Reviews = createViews('Reviews');
const NotFoundView = createViews('NotFoundView');

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
