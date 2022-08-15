import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from 'Redux/auth/auth-operations';
import styles from '../components/Form/Form.module.css';
import { getisLogin } from 'Redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = evt => {
    evt.preventDefault();

    const user = { name, email, password };

    dispatch(signIn(user));
    setName('');
    setEmail('');
    setPassword('');
  };

  const isLogin = useSelector(getisLogin);

  return (
    <>
      {!isLogin && (
        <>
          <h2>Registration</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Enter your Name"
                type="name"
              />
            </label>
            <label className={styles.label}>
              Email
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
                  border: '1px solid #e9967a',
                },
              }}
              variant="contained"
              endIcon={<AppRegistrationIcon />}
            >
              Register
            </Button>
          </form>
        </>
      )}
    </>
  );
};
