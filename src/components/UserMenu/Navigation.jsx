import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="help">
      <NavLink to="/">Main</NavLink>
      <NavLink to="/contacts">Contacts</NavLink>
    </nav>
  );
};
