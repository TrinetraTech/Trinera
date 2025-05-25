import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

export default function CallToAction() {
  return (
    <Box sx={{ py: 8, textAlign: "center", backgroundColor: "#4e4376", color: "white" }}>
      <Container>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Ready to build your next big thing?
        </Typography>
        <Typography variant="body1" mb={3}>
          Let’s turn your ideas into intelligent technology.
        </Typography>
        <Button variant="contained" color="secondary" size="large" href="#contact">
          Get Started
        </Button>
      </Container>
    </Box>
  );
}
