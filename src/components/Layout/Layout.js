import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Link, Hr } from './Layout.styled';
import Loader from '../Loader/Loader';

const Layout = () => (
  <Container>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Hr />
      </nav>
    </header>
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <Outlet />
    </Suspense>
  </Container>
);

export default Layout;
