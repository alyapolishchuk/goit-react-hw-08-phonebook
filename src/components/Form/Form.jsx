import { useState } from 'react';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'Redux/Contacts/contacts-operations';
import Button from '@mui/material/Button';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const contactFilter = contacts?.some(
      option => option.name.toLowerCase() === name.toLowerCase()
    );

    if (contactFilter) {
      alert(`${name} is already in contacts.`);
      return;
    }
    const user = { name, number };

    dispatch(addContacts(user));
    setName('');
    setNumber('');
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button
          sx={{
            fontFamily: 'inherit',
            color: '#d7a7ed',
            backgroundColor: '#a5cae8',
            border: '1px solid #3677d7 ',
            '&:hover': {
              color: '#fff8dc',
              background: '#e47ae9',
              border: '1px solid #d444b0',
            },
          }}
          type="submit"
          variant="contained"
          endIcon={<AddBoxOutlinedIcon />}
        >
          Add contact
        </Button>
      </form>
    </>
  );
}
