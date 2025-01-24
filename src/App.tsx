import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Projects from './components/Projects.tsx';
import Skills from './components/Skills.tsx';
import ImageCarousel from './components/ImageCarousel.tsx';
import { AnimatePresence } from 'framer-motion';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4a90e2',
    },
    secondary: {
      main: '#64b5f6',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
    button: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontSize: '0.95rem',
          height: 36,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimatePresence mode="wait">
        <Box sx={{ 
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default'
        }}>
          <Header />
          <Hero />
          <ImageCarousel />
          <Projects />
          <Skills />
        </Box>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
