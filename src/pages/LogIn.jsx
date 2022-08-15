import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'Redux/auth/auth-operations';
import styles from '../components/Form/Form.module.css';
import { getisLogin } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import { Contacts } from './Contacts';

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async evt => {
    evt.preventDefault();

    const user = { email, password };
    try {
      await dispatch(logIn(user)).unwrap();
    } catch (error) {
      console.log(error);
    }
    setEmail('');
    setPassword('');
  };

  const isLogin = useSelector(getisLogin);

  return (
    <>
      {!isLogin ? (
        <div>
          <h2>Log In</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              <input
                className={styles.input}
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter Email"
                type="teemailxt"
              />
            </label>
            <label className={styles.label}>
              Password
              <input
                className={styles.input}
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Enter Password"
                type="password"
              />
            </label>
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
              type="submit"
              variant="contained"
              endIcon={<LoginIcon />}
            >
              Log In
            </Button>
          </form>
        </div>
      ) : (
        <Contacts></Contacts>
      )}
    </>
  );
};
