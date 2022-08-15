import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Form.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from 'redux/contacts/contscts-actions';
import { itemsSelector } from 'redux/contacts/contacts-selectors';
import { toast } from 'react-toastify';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { NavLink } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    if (!name || !number) {
      toast.alert('Please, fill all fields');
      return;
    }
    const inContacts = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (inContacts) {
      toast.alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addUser({ name, number, id }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handlerSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input1}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handlerChange}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input2}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handlerChange}
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
      <NavLink to="/goit-react-hw-08-phonebook/contacts">
        <KeyboardArrowUpIcon sx={{ fontSize: 60, color: 'blue' }} />
      </NavLink>
    </form>
  );
};

export { Form };
