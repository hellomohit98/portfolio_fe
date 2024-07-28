import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const experiences = [
  {
    companyName: "Mindnerve's",
    duration: "July 2022 - Current"
  },
  {
    companyName: "CharanpahariApp",
    duration: "Jan 2021 - June 2022"
  }
];

const Experience = ({portfolioData}) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>
      {portfolioData.experience.map((e, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
            {console.log('e', e)}
          <Typography variant="h6">{e.companyName}</Typography>
          <Typography variant="body2">{e.duration.startTime} - {e.duration.endTime}</Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default Experience;
