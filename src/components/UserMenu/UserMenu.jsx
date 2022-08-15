import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import MeetingRoomOutlinedIcon from '@mui/icons-material/MeetingRoomOutlined';

import styles from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const navigate = useNavigate();

  return (
    <div className={styles.user_container}>
      <span className={styles.spanchik}>Welcome, {name}</span>
      <Button
        sx={{
          fontFamily: 'inherit',
          color: '#7ab3e9',
          backgroundColor: '#eabcef',
          border: '1px solid #807ae9 ',
          '&:hover': {
            color: '#fffffe',
            background: '#e97ae7',
          },
        }}
        type="button"
        onClick={() => {
          dispatch(logOut());
          return navigate('/login');
        }}
        variant="contained"
        endIcon={<MeetingRoomOutlinedIcon />}
      >
        Log Out
      </Button>
    </div>
  );
};
