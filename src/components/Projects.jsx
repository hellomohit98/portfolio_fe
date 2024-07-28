import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const projects = [
  {
    name: "Benevolve",
    description: "Benevolve is a software as a service (SaaS) based insurance management system used by insurance companies to create and manage insurances.",
    keyPoints: [
      "Worked as a key developer to initialize the project from the start.",
      "Followed agile methodology.",
      "Handled backend tasks to create and fix RestAPIs."
    ],
    timeSpent: "16 months"
  },
  {
    name: "Medibuddy",
    description: "Medibuddy is an application used by organizations and enterprises to manage its employees' collaborations, feedback, and appraisal.",
    keyPoints: [
      "Worked as a key developer to initialize the project from the start.",
      "Followed agile methodology.",
      "Handled backend tasks to create and fix RestAPIs."
    ],
    timeSpent: "4 months"
  },
  {
    name: "CharanpahariApp",
    description: "Created reusable UI components and functionalities.",
    keyPoints: [
      "Designed models.",
      "Integrated new components.",
      "Wrote scalable and maintainable code.",
      "Built reusable components in React.",
      "Gained good knowledge of the e-commerce domain.",
      "Experienced in developing customer-facing UI components.",
      "Built a dynamic website with Axios API (v2.2)."
    ],
    timeSpent: "18 months",
    url: "https://apps.shopify.com/smart-combo-generator"
  }
];

const Projects = ({portfolioData}) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      {portfolioData.projects.map((project, index) => (
        <Box key={index} sx={{ marginBottom: 2 }}>
          <Typography variant="h6">{project.name}</Typography>
          <Typography variant="body2">{project.description}</Typography>
          <ul>
            {project.keyPoints.map((point, i) => (
              <li key={i}>
                <Typography variant="body2">{point}</Typography>
              </li>
            ))}
          </ul>
          {project.url && (
            <Typography variant="body2">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url}
              </a>
            </Typography>
          )}
        </Box>
      ))}
    </Paper>
  );
};

export default Projects;
