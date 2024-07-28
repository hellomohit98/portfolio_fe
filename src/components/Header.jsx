import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = ({portfolioData}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Mohit Kumar's Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
