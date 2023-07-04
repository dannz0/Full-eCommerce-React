import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { cart } = useSelector((state) => state.cart);

  if (!cart.length) {
    return <Navigate to={'/'} />;
  }
  return children;
};

export default ProtectedRoute;
