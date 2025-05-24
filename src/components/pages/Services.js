import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import LanguageIcon from "@mui/icons-material/Language";
import StorageIcon from "@mui/icons-material/Storage";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const services = [
  {
    icon: <LanguageIcon fontSize="large" color="primary" />,
    title: "Business Website",
   
    features: [
      "Modern 5-Page Design",
      "Mobile Responsive",
      "SEO Basics Setup",
      "Contact & Inquiry Forms",
      "Performance Optimized",
    ],
  },
  {
    icon: <StorageIcon fontSize="large" color="primary" />,
    title: "Cloud & Hosting Setup",
   
    features: [
      "Cloud Environment Setup",
      "Secure Hosting Configuration",
      "Email & Domain Setup",
      "Auto Backup Configuration",
      "Monitoring Tools Integration",
    ],
  },
  {
    icon: <IntegrationInstructionsIcon fontSize="large" color="primary" />,
    title: "Web App Development",
    
    features: [
      "Custom Frontend & Backend",
      "User Authentication & Roles",
      "API & Third-Party Integration",
      "Database Architecture",
      "Security Best Practices",
    ],
  },
  {
    icon: <ShoppingCartCheckoutIcon fontSize="large" color="primary" />,
    title: "E-commerce Platform",
    
    features: [
      "Product & Category Management",
      "Payment Gateway Integration",
      "User Dashboard & Checkout",
      "Inventory & Order Tracking",
      "Advanced Analytics",
    ],
  },
];

export default function Services() {
  return (
    <Container sx={{ mt: 4 }} id="services">
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        Our Services
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        gutterBottom
      >
        End-to-end digital solutions tailored to scale your business
      </Typography>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <CardContent>
                <Box sx={{ mb: 2 }}>{service.icon}</Box>
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  {service.title}
                </Typography>
                <Typography
                  variant="h5"
                  color="primary"
                  fontWeight={700}
                  gutterBottom
                >
                  {service.price}{" "}
                  <Typography
                    variant="body2"
                    component="span"
                    color="text.secondary"
                    fontWeight="normal"
                  >
                    {service.subtitle}
                  </Typography>
                </Typography>
                <List dense>
                  {service.features.map((feature, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={feature} />
                    </ListItem>
                  ))}
                </List>
                <Button
                  variant="contained"
                  fullWidth
                  href="#contact"
                  sx={{
                    borderRadius: 50,
                    mt: 2,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
