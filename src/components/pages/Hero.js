import React from "react";
import { Box, Button, Typography, Grid, Paper, Stack } from "@mui/material";
import banner from '../../assets/banner.png';
const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${banner})`,
        py: { xs: 8, md: 12 },
        color: "white",
      }}
      id="home"
    >
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        sx={{ maxWidth: "1200px", mx: "auto", px: 2 }}
      >
        <Grid item xs={12} md={6}>
          <Box zIndex={2}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Transform Your Digital Presence
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.2rem", mb: 3, opacity: 0.9, maxWidth: 500 }}
            >
              Full-service web development agency creating stunning,
              high-performance websites that drive results and accelerate your
              business growth.
            </Typography>
            <Button
              href="#contact"
              variant="contained"
              sx={{
                backgroundColor: "#ff6b6b",
                color: "white",
                px: 5,
                py: 1.5,
                fontSize: "1.1rem",
                borderRadius: "30px",
                fontWeight: 600,
                mt: 2,
                "&:hover": {
                  backgroundColor: "#ff5252",
                  transform: "translateY(-3px)",
                },
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
            >
              Start Your Project Today
            </Button>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              mt={5}
             
            >
              <StatCard number="500+" text="Projects Completed" />
              <StatCard number="98%" text="Client Satisfaction" />
              <StatCard number="24/7" text="Support Available" />
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box textAlign="center" zIndex={2}>
            <img
              src="https://via.placeholder.com/600x400"
              alt="Web Development Illustration"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 15,
                boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const StatCard = ({ number, text }) => (
  <Paper
    elevation={0}
    sx={{
      backgroundColor: "rgba(255,255,255,0.1)",
      padding: 3,
      borderRadius: 2,
      backdropFilter: "blur(5px)",
      textAlign: "center",
      minWidth: 120,
      color: "white",
    }}
  >
    <Typography variant="h5" fontWeight={700}>
      {number}
    </Typography>
    <Typography variant="body2" sx={{ opacity: 0.8 }}>
      {text}
    </Typography>
  </Paper>
);

export default HeroSection;
