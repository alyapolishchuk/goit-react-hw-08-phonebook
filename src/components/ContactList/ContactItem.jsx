import PropTypes from 'prop-types';
// import css from './ContactItem.module.css';
// import { Button, Divider, TableCell, TableRow } from '@mui/material';
import Avatar from 'react-avatar';

export default function ContactItem({ name, phone, onDelete, id, index }) {
  return (
    <div>
      <p>{index + 1}</p>

      <Avatar name={name} size={60} round={true} />

      <p>{name}</p>

      <p>{phone}</p>

      <button type="button" onClick={() => onDelete(id)}>
        <img src="https://www.pngall.com/wp-content/uploads/5/Delete-Transparent.png" alt="delete" width="50px"/>
      </button>
    </div>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
