import ContactItem from './ContactItem';
// import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from 'redux/contacts/contscts-actions';
import {
  filterSelector,
  itemsSelector,
} from 'redux/contacts/contacts-selectors';
import { getIsLogin } from 'redux/auth/auth-selectors';

export default function ContactList() {
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const isLogin = useSelector(getIsLogin);
  const contacts = items?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  useEffect(() => {
    isLogin && dispatch(getUsers());
  }, [dispatch, isLogin]);

  const deleteContact = id => {
    dispatch(deleteUser(id));
  };
  return (
    <table>
      <thead>
        <p>№</p>

        <p>Avatar</p>

        <p>Name</p>

        <p>Phone</p>

        <p>Options</p>
      </thead>
      <tbody>
        {contacts.map(({ id, name, number }, index) => {
          return (
            <ContactItem
              index={index}
              key={id}
              id={id}
              name={name}
              phone={number}
              onDelete={deleteContact}
            />
          );
        })}
      </tbody>
    </table>
  );
}
