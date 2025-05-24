import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        py: 10,
        textAlign: "center",
        background: "linear-gradient(to right, #2b5876, #4e4376)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Innovative IT Solutions for a Smarter Tomorrow
        </Typography>
        <Typography variant="h6" color="white" paragraph>
          Custom Software. Scalable Cloud. Strategic IT Consulting.
        </Typography>
        <Button variant="contained" size="large" href="#services" sx={{ mt: 3 }}>
          Explore Services
        </Button>
      </Container>
    </Box>
  );
}
