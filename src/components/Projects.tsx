import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Launch, GitHub } from '@mui/icons-material';

const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

const Projects = () => {
  const projects = [
    {
      title: 'AI Image Generator',
      description: 'A deep learning project using DALL-E API to generate creative images from text descriptions.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
      tags: ['AI', 'React', 'API Integration'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Event Poster Series',
      description: 'Collection of dynamic event posters designed for tech conferences and music festivals.',
      image: 'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b',
      tags: ['Poster Design', 'Adobe Creative Suite'],
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Social Media Campaign',
      description: 'Comprehensive social media design package including stories, posts, and promotional content.',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
      tags: ['Social Media', 'Marketing', 'Design'],
      demoLink: '#',
      githubLink: '#',
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
        <MotionTypography
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
          Featured Projects
        </MotionTypography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={4}>
              <MotionCard
                variants={itemVariants}
                sx={{
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)',
                    }}
                  />
                </Box>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{
                      color: 'white',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      mb: 2,
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {project.tags.map((tag, i) => (
                      <Typography
                        key={i}
                        variant="caption"
                        sx={{
                          px: 1.5,
                          py: 0.5,
                          borderRadius: '15px',
                          background: 'linear-gradient(45deg, #4a90e2 30%, #64b5f6 90%)',
                          color: 'white',
                        }}
                      >
                        {tag}
                      </Typography>
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button
                      variant="contained"
                      endIcon={<Launch />}
                      href={project.demoLink}
                      target="_blank"
                      sx={{
                        background: 'linear-gradient(45deg, #4a90e2 30%, #64b5f6 90%)',
                        boxShadow: '0 3px 15px rgba(74, 144, 226, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #64b5f6 30%, #4a90e2 90%)',
                        },
                      }}
                    >
                      View Project
                    </Button>
                    <IconButton
                      href={project.githubLink}
                      target="_blank"
                      sx={{ color: 'white' }}
                    >
                      <GitHub />
                    </IconButton>
                  </Box>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
