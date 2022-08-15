// import { Outlet } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { AuthNav } from './AuthNav';
import { useSelector } from 'react-redux';
import { getisLogin } from 'redux/auth/auth-selectors';

export const AppBar = () => {
  const isLogin = useSelector(getisLogin);
  return (
    <>
      <header>
        {isLogin ? <UserMenu /> : <AuthNav />}
        {/* <Outlet /> */}
      </header>
    </>
  );
};
