import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getisLogin, getUserName } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operations';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import HomeWorkTwoToneIcon from '@mui/icons-material/HomeWorkTwoTone';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
//------------------------------------------------------//

function LayOut() {
  const isLogin = useSelector(getisLogin);
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <AppBar position="static" sx={{ width: '100vw' }}>
        <Toolbar
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#9fe74d',
          }}
        >
          {isLogin && (
            <>
              <p>{name}</p>

              <button onClick={handlerLogout}>
                <LogoutOutlinedIcon sx={{ fontSize: 60, color: 'black' }} />
              </button>
              <NavLink to={'/goit-react-hw-08-phonebook/contacts'}>
                <ImportContactsRoundedIcon
                  sx={{ fontSize: 60, color: 'black' }}
                />
              </NavLink>
            </>
          )}
          <NavLink to={'/goit-react-hw-08-phonebook/'}>
            <HomeWorkTwoToneIcon sx={{ fontSize: 80, color: 'black' }} />
          </NavLink>

          {!isLogin && (
            <>
              <NavLink to={'/goit-react-hw-08-phonebook/register'}>
                <ExitToAppIcon sx={{ fontSize: 80, color: 'black' }} />
              </NavLink>
              <NavLink to={'/goit-react-hw-08-phonebook/login'}>
                <MeetingRoomIcon sx={{ fontSize: 80, color: 'black' }} />
              </NavLink>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          width: 600,
          height: 60,
          backgroundColor: '#8bc34a5a',
          borderRadius: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}

export { LayOut };
