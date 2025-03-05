import React from 'react';
import Grid from '@mui/material/Grid2';

const LayoutGrid = ({ children, style, onClick }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{ border: '1px solid black', marginBottom: 2, ...style }}
      minHeight={'100px'}
      onClick={onClick} // Tambahkan event handler klik
    >
      {children}
    </Grid>
  );
};

export default LayoutGrid;
