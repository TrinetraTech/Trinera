import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";

const stack = ["React", "Node.js", "AWS", "Firebase", "Docker", "MongoDB"];

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
                {tech}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
