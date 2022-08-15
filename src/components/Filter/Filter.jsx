import { useDispatch, useSelector } from 'react-redux';
import styles from '../Form/Form.module.css';
import { filterContacts } from 'Redux/Contacts/contacts-actions';

export const Filter = () => {
  const name = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handlerInput = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <form className={styles.form}>
      <label className={styles.label}>
        Find Contacts by name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handlerInput}
        />
      </label>
    </form>
  );
};
