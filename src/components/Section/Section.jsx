import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';


export default function Section({ title, children }) {
  return (
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" gutterBottom component="h2">
        {title}
      </Typography>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
