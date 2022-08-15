import ContactItem from './ContactItem';
// import css from './ContactList.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from 'redux/contacts/contscts-actions';
import {
  filterSelector,
  itemsSelector,
} from 'redux/contacts/contacts-selectors';
import {
  Table,
  Typography,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from '@mui/material';
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
    <Table>
      <TableHead>
        <TableRow sx={{ backgroundColor: 'black' }}>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              №
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Avatar
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Name
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Phone
            </Typography>
          </TableCell>
          <TableCell>
            <Typography
              variant="h3"
              gutterBottom
              component="p"
              sx={{ color: 'white' }}
            >
              Options
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
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
      </TableBody>
    </Table>
  );
}
