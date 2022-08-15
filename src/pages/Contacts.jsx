import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Form from 'components/Form/Form';
import { useSelector } from 'react-redux';
import { getisLogin } from 'Redux/auth/auth-selectors';
import styles from '../pages/Pages.module.css';

export const Contacts = () => {
  const isLogin = useSelector(getisLogin);

  return (
    <>
      <div className={styles.container}>
        <h2>Add new contact</h2>
        <Form></Form>
        <Filter></Filter>
        <h3 className={styles.text}>Contacts</h3>
        {isLogin && <ContactList></ContactList>}
      </div>
    </>
  );
};
