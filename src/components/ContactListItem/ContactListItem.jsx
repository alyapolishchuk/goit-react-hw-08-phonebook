import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li className={styles.listItem} key={id}>
      <p>
        {name}: {number}
      </p>
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
        onClick={() => onDelete(id)}
        variant="outlined"
        endIcon={<DeleteOutlineIcon />}
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
