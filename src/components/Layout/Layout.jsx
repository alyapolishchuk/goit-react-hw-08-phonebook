import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogin, getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
//------------------------------------------------------//

function LayOut() {
  const isLogin = useSelector(getIsLogin);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div
        sx={{
          flexDirection: 'row',
          display: 'flex',
          // minHeight: '100vh',
        }}
      >
        <AppBar
          position="fixed"
          sx={{ width: '100vw', top: 0, left: 0 }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            {isLogin && (
              <>
                <p
                >
                  {name}
                </p>

                <button onClick={handlerLogout}>
                  <LogoutIcon sx={{ fontSize: 40, color: 'white' }} />
                </button>
                <NavLink to={'/goit-react-hw-08-phonebook/contacts'}>
                  <ImportContactsRoundedIcon
                    sx={{ fontSize: 40, color: 'white' }}
                  />
                </NavLink>
              </>
            )}
            <NavLink to={'/goit-react-hw-08-phonebook/'}>
              <HomeRoundedIcon sx={{ fontSize: 40, color: 'white' }} />
            </NavLink>

            {!isLogin && (
              <>
                <NavLink to={'/goit-react-hw-08-phonebook/register'}>
                  <AppRegistrationIcon sx={{ fontSize: 40, color: 'white' }} />
                </NavLink>
                <NavLink to={'/goit-react-hw-08-phonebook/login'}>
                  <LoginIcon sx={{ fontSize: 40, color: 'white' }} />
                </NavLink>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
      </div>
    </>
  );
}

export { LayOut };
