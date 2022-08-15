import { NavLink } from 'react-router-dom';
import styles from '../UserMenu/UserMenu.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.header}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};
