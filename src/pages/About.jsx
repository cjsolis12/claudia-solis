import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2'; 

export default function About() {
  return (
    
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Button variant="contained">About</Button>
      </Grid>
    
  );
}