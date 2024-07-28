import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const Education = ({portfolioData}) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        Education
      </Typography>
      <Box>
        <Typography variant="h6">{portfolioData.education.degreeType}</Typography>
        <Typography variant="body2">{portfolioData.education.collegeName}</Typography>
        <Typography variant="body2">{portfolioData.education.duration.startDate} - {portfolioData.education.duration.endDate}</Typography>
        <Typography variant="body2">Marks: {portfolioData.education.marks}</Typography>
      </Box>
    </Paper>
  );
};

export default Education;
