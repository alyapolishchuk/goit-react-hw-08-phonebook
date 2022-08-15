import { useSelector } from 'react-redux';
import { getToken } from 'Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
  const token = useSelector(getToken);
  return token ? children : <Navigate to="/login" />;
}
