import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const About = ({portfolioData}) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        {portfolioData.profileDescription}
      </Typography>
    </Paper>
  );
};

export default About;
