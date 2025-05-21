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
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const services = [
  {
    icon: <LanguageIcon fontSize="large" color="primary" />,
    title: "Static Website",
    price: "$199",
    subtitle: "Starting at",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Basic SEO Optimization",
      "Contact Form",
      "Fast Loading Speed",
    ],
  },
  {
    icon: <EditIcon fontSize="large" color="primary" />,
    title: "Semi-Dynamic Website",
    price: "$499",
    subtitle: "Starting at",
    features: [
      "Up to 10 Pages",
      "CMS Integration",
      "Custom Contact Forms",
      "Social Media Integration",
      "Basic Analytics",
    ],
  },
  {
    icon: <SettingsIcon fontSize="large" color="primary" />,
    title: "Full Functional Website",
    price: "$999",
    subtitle: "Starting at",
    features: [
      "Custom Web Application",
      "User Authentication",
      "Database Integration",
      "API Integration",
      "Advanced Security",
    ],
  },
  {
    icon: <ShoppingCartIcon fontSize="large" color="primary" />,
    title: "Ecommerce Website",
    price: "$1999",
    subtitle: "Starting at",
    features: [
      "Product Management",
      "Payment Gateway",
      "Inventory System",
      "Order Tracking",
      "SSL Certificate",
    ],
  },
];

export default function Services() {
  return (
    <Container sx={{ mt: 4 }} id="services">
      <Grid container spacing={4}>
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
