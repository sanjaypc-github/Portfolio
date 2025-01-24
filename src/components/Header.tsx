import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton, Container } from '@mui/material';
import { Email, GitHub, LinkedIn, Folder } from '@mui/icons-material';
import { motion, useScroll, useTransform } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const MotionAppBar = motion(AppBar);
const MotionBox = motion(Box);

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0.8]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:sanjaypc007@gmail.com';
  };

  const handleDriveClick = () => {
    window.open('https://drive.google.com/drive/folders/1-0oZJYjbZvwwWLVXqaLBpw8kp8-UoGM6', '_blank');
  };

  return (
    <MotionAppBar
      style={{ opacity }}
      position="fixed"
      sx={{
        background: isScrolled 
          ? 'rgba(0, 0, 0, 0.8)'
          : 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6))',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <MotionBox
            style={{ scale }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Avatar
                src={profileImage}
                sx={{
                  width: 50,
                  height: 50,
                  border: '2px solid #4a90e2',
                  boxShadow: '0 0 20px rgba(74, 144, 226, 0.3)',
                }}
              />
            </motion.div>
            <Typography
              variant="h6"
              sx={{
                background: 'linear-gradient(45deg, #4a90e2, #64b5f6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontWeight: 700,
              }}
            >
              Sanjay Portfolio
            </Typography>
          </MotionBox>

          <Box sx={{ display: 'flex', gap: 2 }}>
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmailClick}
              sx={{ color: '#4a90e2' }}
            >
              <Email />
            </IconButton>
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDriveClick}
              sx={{ color: '#4a90e2' }}
            >
              <Folder />
            </IconButton>
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/sanjaypc007"
              target="_blank"
              sx={{ color: '#4a90e2' }}
            >
              <GitHub />
            </IconButton>
            <IconButton
              component={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/sanjaypc007"
              target="_blank"
              sx={{ color: '#4a90e2' }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </MotionAppBar>
  );
};

export default Header;
