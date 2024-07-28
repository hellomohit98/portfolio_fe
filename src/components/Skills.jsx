import React from 'react';
import { Typography, Paper, Box, Chip } from '@mui/material';

const skills = [
  "JavaScript", "React", "Redux", "HTML", "CSS", "Node.js", "Express"
];

const Skills = ({portfolioData}) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {skills.map(skill => (
          <Chip label={skill} key={skill} />
        ))}
      </Box>
    </Paper>
  );
};

export default Skills;
