import { Link } from 'react-router-dom';

const NotFoundView = () => {
  return (
    <h2>
      404 Page is not found. Follow this link {''}
      <Link to="/">Home</Link>.
    </h2>
  );
};

export default NotFoundView;
