import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'Redux/auth/auth-operations';
import { getUserName } from 'Redux/auth/auth-selectors';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';

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
          color: '#e9967a',
          backgroundColor: '#fff0f5',
          border: '1px solid #e9967a ',
          '&:hover': {
            color: '#fff8dc',
            background: '#e9967a',
          },
        }}
        type="button"
        onClick={() => {
          dispatch(logOut());
          return navigate('/login');
        }}
        variant="contained"
        endIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </div>
  );
};
