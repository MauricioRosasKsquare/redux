import { Link } from 'react-router-dom';
import LayoutContainer from '../components/LayoutContainer'

const NotFound = () => {
  return (
    <LayoutContainer>
      <div>
        <h1>Page Not Found!</h1>
        <Link to='/'>Back</Link>
      </div>
    </LayoutContainer>
  );
};

export default NotFound;
