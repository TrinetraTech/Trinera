import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import CloudIcon from "@mui/icons-material/Cloud";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LayersIcon from "@mui/icons-material/Layers";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const stack = [
  { name: "React", icon: <CodeIcon fontSize="large" color="primary" /> },
  { name: "Node.js", icon: <IntegrationInstructionsIcon fontSize="large" color="success" /> },
  { name: "AWS", icon: <CloudIcon fontSize="large" sx={{ color: "#FF9900" }} /> },
  { name: "Firebase", icon: <WhatshotIcon fontSize="large" sx={{ color: "#FFCA28" }} /> },
  { name: "Docker", icon: <LayersIcon fontSize="large" sx={{ color: "#0db7ed" }} /> },
  { name: "MongoDB", icon: <StorageIcon fontSize="large" sx={{ color: "#47A248" }} /> },
];

export default function TechStack() {
  return (
    <Box sx={{ py: 8, bgcolor: "#f0f0f0" }}>
      <Container>
        <Typography variant="h4" fontWeight={700} align="center" gutterBottom>
          Technology We Use
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {stack.map((tech, i) => (
            <Grid item xs={4} sm={2} key={i}>
              <Box
                sx={{
                  borderRadius: 2,
                  p: 2,
                  textAlign: "center",
                  bgcolor: "white",
                  boxShadow: 1,
                }}
              >
                <Box sx={{ mb: 1 }}>{tech.icon}</Box>
                <Typography variant="subtitle1">{tech.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
