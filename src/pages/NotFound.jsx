import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getisLogin } from 'Redux/auth/auth-selectors';

export const NotFound = () => {
  const isLogin = useSelector(getisLogin);
  const navigate = useNavigate();

  useEffect(() => {
    const test = setTimeout(() => {
      if (isLogin) {
        navigate('/contacts');
        return;
      } else {
        navigate('/login');
        return;
      }
    }, 3000);
    console.log(test);
  }, [isLogin, navigate]);

  return (
    <>
      <h1>page not found</h1>
    </>
  );
};
