import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.listItem} key={id}>
      <p>
        {name}: {number}
      </p>
      <Button
        sx={{
          fontFamily: 'inherit',
          color: '#e9967a',
          backgroundColor: '#fff0f5',
          border: '1px solid #e9967a ',
          '&:hover': {
            color: '#fff8dc',
            background: '#e9967a',
            border: '1px solid #e9967a',
          },
        }}
        onClick={() => onDelete(id)}
        variant="outlined"
        endIcon={<DeleteForeverIcon />}
      >
        Delete
      </Button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
