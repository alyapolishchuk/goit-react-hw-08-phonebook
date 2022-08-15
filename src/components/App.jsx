import { Route, Routes } from 'react-router-dom';
import { LogIn } from 'pages/LogIn';
import { Registration } from '../pages/Registration';
import { AppBar } from './UserMenu/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRefresh } from 'Redux/auth/auth-operations';
import { Contacts } from '../pages/Contacts';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import { getToken } from 'Redux/auth/auth-selectors';
import { getisRefreshed } from 'Redux/auth/auth-selectors';
import { Loader } from './Loader/Loader';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const isRefreshed = useSelector(getisRefreshed);

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch, token]);

  return (
    <>
      {isRefreshed ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute>
                  <Registration />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LogIn />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </>
      )}
    </>
  );
};
