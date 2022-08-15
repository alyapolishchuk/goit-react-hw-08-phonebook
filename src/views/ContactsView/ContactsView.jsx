import ContactList from '../../components/ContactList/ContactList';
import Section from '../../components/Section/Section';

import { NavLink, Outlet } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function ContactsView(){
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/goit-react-hw-08-phonebook/contacts/add">
            <AddCircleIcon sx={{ fontSize: 75, color: 'blue' }} />
          </NavLink>
        </li>
        <li>
          <NavLink to="/goit-react-hw-08-phonebook/contacts/search">
            <SearchIcon sx={{ fontSize: 75, color: 'blue' }} />
          </NavLink>
        </li>
      </ul>
      <Outlet />
      <Section title="Contacts">
        <ContactList />
      </Section>
    </div>
  );
};
