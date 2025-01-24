import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import { Email, GetApp, GitHub } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profileImage from '../assets/profile.jpg';

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);

const Hero = () => {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      sx={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        color: 'white',
        pt: { xs: 8, md: 12 },
        pb: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0,
      }}>
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            component={motion.div}
            animate={{
              y: ['0%', '100%'],
              opacity: [0.3, 0],
              scale: [1, 1.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.8,
            }}
            sx={{
              position: 'absolute',
              width: '2px',
              height: '20%',
              background: 'linear-gradient(180deg, #4a90e2 0%, transparent 100%)',
              left: `${Math.random() * 100}%`,
              top: '-20%',
            }}
          />
        ))}
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <MotionTypography
                component="h1"
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #4a90e2 30%, #64b5f6 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                }}
              >
                Sanjay PC
              </MotionTypography>
              
              <Box sx={{ height: '120px', mb: 4 }}>
                <TypeAnimation
                  sequence={[
                    'Freelancer',
                    2000,
                    'AI Enthusiast',
                    2000,
                    'Poster Designer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  style={{
                    fontSize: '2rem',
                    display: 'inline-block',
                    color: '#64b5f6',
                    fontFamily: 'monospace',
                  }}
                />
              </Box>
              
              <MotionTypography 
                variant="body1" 
                paragraph
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                sx={{ 
                  mb: 4, 
                  maxWidth: 500,
                  color: '#e0e0e0',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                Passionate about creating innovative solutions through AI and design.
                Transforming ideas into visually stunning experiences that make an impact.
              </MotionTypography>
              
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <MotionButton
                  variant="contained"
                  size="large"
                  startIcon={<Email />}
                  href="mailto:sanjay.pc2023ai-ds@gmail.com"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(74, 144, 226, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    background: 'linear-gradient(45deg, #4a90e2 30%, #64b5f6 90%)',
                    border: 'none',
                    boxShadow: '0 3px 15px rgba(74, 144, 226, 0.3)',
                  }}
                >
                  Contact Me
                </MotionButton>
                <MotionButton
                  variant="outlined"
                  size="large"
                  startIcon={<GitHub />}
                  href="https://github.com/yourusername"
                  target="_blank"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(74, 144, 226, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    borderColor: '#4a90e2',
                    color: '#4a90e2',
                    '&:hover': {
                      borderColor: '#64b5f6',
                    },
                  }}
                >
                  GitHub
                </MotionButton>
              </Box>
            </MotionBox>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <MotionBox
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              sx={{
                position: 'relative',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  right: -20,
                  bottom: -20,
                  background: 'linear-gradient(45deg, #4a90e2 30%, #64b5f6 90%)',
                  opacity: 0.3,
                  zIndex: 0,
                }
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Sanjay PC"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  position: 'relative',
                  zIndex: 1,
                  borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  filter: 'brightness(1.1) contrast(1.1)',
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
