import { useSelector, useDispatch } from 'react-redux';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';
import { useEffect } from 'react';
import { getContacts } from 'Redux/Contacts/contacts-operations';
import { deleteContacts } from 'Redux/Contacts/contacts-operations';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const handlerDelete = id => {
    dispatch(deleteContacts(id));
  };

  const getContactList = () => {
    return contacts.filter(user =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul className={styles.list}>
      {getContactList()?.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onDelete={handlerDelete}
          id={id}
        />
      ))}
    </ul>
  );
};
