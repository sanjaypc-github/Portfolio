import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Brush, Psychology, Speed } from '@mui/icons-material';

const MotionBox = motion(Box);
const MotionPaper = motion(Paper);

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: <Psychology sx={{ fontSize: 40, color: '#4a90e2' }} />,
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'Natural Language Processing'],
    },
    {
      title: 'Design & Creative',
      icon: <Brush sx={{ fontSize: 40, color: '#4a90e2' }} />,
      skills: ['Adobe Creative Suite', 'UI/UX Design', 'Poster Design', 'Brand Identity'],
    },
    {
      title: 'Development',
      icon: <Code sx={{ fontSize: 40, color: '#4a90e2' }} />,
      skills: ['React.js', 'Python', 'Node.js', 'RESTful APIs'],
    },
    {
      title: 'Tools & Workflow',
      icon: <Speed sx={{ fontSize: 40, color: '#4a90e2' }} />,
      skills: ['Git', 'Figma', 'Jira', 'Adobe XD'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box
      component={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            color: 'white',
            mb: 8,
            fontWeight: 700,
            position: 'relative',
            '&:after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 4,
              background: 'linear-gradient(45deg, #4a90e2 30%, #64b5f6 90%)',
            }
          }}
        >
          Skills & Expertise
        </Typography>

        <Grid container spacing={4}>
          {skillCategories.map((category, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <MotionPaper
                variants={itemVariants}
                component={motion.div}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                }}
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 3 }}>
                  {category.icon}
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      color: 'white',
                      mt: 2,
                      fontWeight: 600,
                    }}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <Box component="ul" sx={{ 
                  listStyle: 'none', 
                  p: 0, 
                  m: 0,
                  '& li': {
                    color: 'rgba(255,255,255,0.7)',
                    py: 1,
                    display: 'flex',
                    alignItems: 'center',
                    '&:before': {
                      content: '""',
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: '#4a90e2',
                      mr: 2,
                    }
                  }
                }}>
                  {category.skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      {skill}
                    </motion.li>
                  ))}
                </Box>
              </MotionPaper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills;
