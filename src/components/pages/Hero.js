import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Button, useMediaQuery } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@mui/material/styles";

// Using Unsplash placeholder images with IT/tech themes
const slides = [
  {
    title: "Innovative IT Solutions for a Smarter Tomorrow",
    subtitle: "Custom Software. Scalable Cloud. Strategic IT Consulting.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    buttonText: "Explore Services",
    buttonLink: "#services"
  },
  {
    title: "Transform Your Business with Cutting-Edge Technology",
    subtitle: "AI Solutions. Data Analytics. Digital Transformation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    buttonText: "Learn More",
    buttonLink: "#about"
  },
  {
    title: "Secure and Reliable Cloud Infrastructure",
    subtitle: "Migration. Optimization. 24/7 Support.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    buttonText: "View Cloud Solutions",
    buttonLink: "#cloud"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Auto-advance slides only when not hovered
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1],
        scale: { duration: 1.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
      transition: { 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1] 
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.4, 
        duration: 0.8, 
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hover: {
      y: -3,
      boxShadow: "0 10px 25px rgba(33, 150, 243, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: isMobile ? "60vh" : "90vh",
        display: "flex",
        alignItems: "center"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {/* Background image with parallax effect */}
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
              scale: 1.1
            }}
            animate={{
              scale: 1
            }}
            transition={{
              duration: 10,
              ease: "linear"
            }}
          />
          
          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%)",
              zIndex: 2
            }}
          />

          <Container maxWidth="md" sx={{ position: "relative", zIndex: 3 }}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={contentVariants}
            >
              <motion.div variants={itemVariants}>
                <Typography
                  variant={isMobile ? "h4" : "h2"}
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    color: "#fff",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                    lineHeight: 1.2,
                    mb: 2
                  }}
                >
                  {slides[currentSlide].title}
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography
                  variant={isMobile ? "body1" : "h5"}
                  color="rgba(255,255,255,0.9)"
                  paragraph
                  sx={{
                    mb: 4,
                    textShadow: "0 1px 5px rgba(0,0,0,0.5)",
                    maxWidth: "80%"
                  }}
                >
                  {slides[currentSlide].subtitle}
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover="hover"
                  whileTap="tap"
                  variants={buttonVariants}
                >
                  <Button
                    variant="contained"
                    size="large"
                    href={slides[currentSlide].buttonLink}
                    sx={{
                      mt: 3,
                      px: 4,
                      py: 1.5,
                      fontSize: isMobile ? "0.875rem" : "1rem",
                      fontWeight: 600,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      background: "linear-gradient(45deg, #2196F3 0%, #21CBF3 100%)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #1976D2 0%, #1E88E5 100%)"
                      },
                      transition: "all 0.3s ease"
                    }}
                  >
                    {slides[currentSlide].buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </Container>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {!isMobile && (
        <>
          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            style={{
              position: "absolute",
              left: 40,
              zIndex: 10,
              color: "white",
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}
          >
            <Typography variant="h5" component="span" sx={{ fontWeight: "bold" }}>
              &lt;
            </Typography>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            style={{
              position: "absolute",
              right: 40,
              zIndex: 10,
              color: "white",
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(5px)",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
            }}
          >
            <Typography variant="h5" component="span" sx={{ fontWeight: "bold" }}>
              &gt;
            </Typography>
          </motion.div>
        </>
      )}

      {/* Dots indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
          zIndex: 10
        }}
      >
        {slides.map((_, index) => (
          <motion.div
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: currentSlide === index ? 24 : 12,
              height: 12,
              borderRadius: "6px",
              backgroundColor: currentSlide === index ? "#2196F3" : "rgba(255,255,255,0.5)",
              cursor: "pointer"
            }}
            animate={{
              width: currentSlide === index ? 24 : 12,
              backgroundColor: currentSlide === index ? "#2196F3" : "rgba(255,255,255,0.5)"
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </Box>

      {/* Decorative floating elements */}
      {!isMobile && (
        <>
          <motion.div
            style={{
              position: "absolute",
              top: "20%",
              left: "5%",
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: "rgba(33, 150, 243, 0.4)",
              zIndex: 2,
              filter: "blur(2px)"
            }}
            animate={{
              y: [0, 30, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{
              position: "absolute",
              bottom: "25%",
              right: "10%",
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              zIndex: 2,
              filter: "blur(1px)"
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}
    </Box>
  );
}