import { useSelector } from 'react-redux';
import { getisLogin } from 'Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children }) {
  const isLogin = useSelector(getisLogin);
  return isLogin ? <Navigate to="/contacts" /> : children;
}
