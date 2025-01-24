import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import racingImage from '../assets/AK racing 2.png';
import benzImage from '../assets/Benz-mocks.png';
import pizzaImage from '../assets/pizza ad -template.png';
import gpayImage from '../assets/gpay home 2.png';
import zomatoImage from '../assets/zomato -2.png';

const MotionBox = motion(Box);

interface ImageData {
  src: string;
  title: string;
  description: string;
}

const images: ImageData[] = [
  {
    src: racingImage,
    title: 'AJK Race Car Design',
    description: 'Professional racing poster design featuring dynamic composition and bold typography',
  },
  {
    src: benzImage,
    title: 'Mercedes AMG GT C',
    description: 'Luxury automotive advertisement with technical specifications and elegant design',
  },
  {
    src: pizzaImage,
    title: "Mario's Pizza",
    description: 'Modern restaurant advertisement featuring appetizing visuals and creative layout',
  },
  {
    src: gpayImage,
    title: 'UPI Payment App',
    description: 'Clean and intuitive mobile payment interface design',
  },
  {
    src: zomatoImage,
    title: 'Zonato Sports Wear',
    description: 'Minimalist sports apparel design with dynamic split pattern',
  },
];

const ImageCarousel = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
        overflow: 'hidden',
        position: 'relative',
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
          Featured Designs
        </Typography>

        <MotionBox
          sx={{
            display: 'flex',
            gap: 4,
            py: 4,
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing',
            },
          }}
          drag="x"
          dragConstraints={{
            left: -1200,
            right: 0,
          }}
          initial={{ x: 0 }}
          animate={{
            x: [-1200, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {images.map((image, index) => (
            <MotionBox
              key={index}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              sx={{
                minWidth: 400,
                borderRadius: '15px',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease-in-out',
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.title}
                sx={{
                  width: '100%',
                  height: 300,
                  objectFit: 'cover',
                }}
              />
              <Box sx={{ p: 3 }}>
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    mb: 1,
                    fontWeight: 600,
                  }}
                >
                  {image.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {image.description}
                </Typography>
              </Box>
            </MotionBox>
          ))}
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ImageCarousel;
