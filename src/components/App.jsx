import { Form } from './Form/Form';
import Section from './Section/Section';
// import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import {
//   errorSelector,
//   loadingSelector,
// } from 'redux/contacts/contacts-selectors';
// import { MutatingDots } from 'react-loader-spinner';
import { Route, Routes } from 'react-router-dom';
import { getRefresh } from '../redux/auth/auth-operations';
import ContactsView from '../views/ContactsView/ContactsView';
import LoginView from '../views/LoginView/LoginView';
import RegistrationView from '../views/RegistrationView/RegistrationView';
import { LayOut } from '../components/Layout/Layout';
import { getToken } from '../redux/auth/auth-selectors';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.min.css';
// import { Box } from '@mui/material';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import PublicRoute from '../components/PublicRoute/PublicRoute';
// import HomeView from '../views/HomeView/HomeView';
import NotFound from '../components/NotFound/NotFound';





const App = () => {
  const dispatch = useDispatch();
  const accountToken = useSelector(getToken);

  useEffect(() => {
    dispatch(getRefresh());
  }, [dispatch, accountToken]);

  return (
    <>
      <div
        // sx={{
        //   height: '100vh',
        //   width: '100vw',
        //   display: 'flex',
        //   flexDirection: 'column',
        //   gap: '45px',
        //   marginTop: '100px',
        //   margin: '0 auto',
        // }}
      >
        <Routes>
          <Route path="/goit-react-hw-08-phonebook/" element={<LayOut />}>
            {/* <Route index element={<HomeView />} /> */}
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegistrationView />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginView />
                </PublicRoute>
              }
            ></Route>
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            >
              <Route
                path="add"
                element={
                  <Section title="Add contact">
                    <Form />
                  </Section>
                }
              ></Route>
              <Route path="search" element={<Filter />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        {/* <ToastContainer autoClose={2000} theme="colored" /> */}
      </div>
    </>
  );
};

export { App };
