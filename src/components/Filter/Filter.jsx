import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterUser } from 'redux/contacts/contscts-actions';
import { filterSelector } from 'redux/contacts/contacts-selectors';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';

export default function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.lable}>
        Find contacts by name or phone-number
        <input
          className={css.input}
          type="text"
          name="name"
          value={filter}
          onChange={e => dispatch(filterUser(e.target.value))}
        />
      </label>
      <NavLink to="/goit-react-hw-08-phonebook/contacts">
        <KeyboardArrowUpIcon sx={{ fontSize: 60, color: 'blue' }} />
      </NavLink>
    </div>
  );
}
