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
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
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
    icon: <AndroidIcon fontSize="large" color="primary" />,
    title: "Android App Development",
    features: [
      "Custom Native App Design",
      "Kotlin & Java Development",
      "Responsive UI with Jetpack Compose",
      "API Integration & Data Handling",
      "App Store Deployment (Google Play)",
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));

  return (
    <Container
      sx={{
        mt: 8,
        mb: 8,
        py: isMobile ? 4 : 6,
        position: "relative",
        overflow: "hidden",
      }}
      id="services"
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: theme.palette.primary.light,
          opacity: 0.2,
          zIndex: -1,
          animation: "float 15s infinite ease-in-out",
          "@keyframes float": {
            "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
            "50%": { transform: "translate(-20px, 20px) rotate(5deg)" },
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: theme.palette.secondary.light,
          opacity: 0.1,
          zIndex: -1,
          animation: "float2 20s infinite ease-in-out",
          "@keyframes float2": {
            "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
            "50%": { transform: "translate(20px, -20px) rotate(-5deg)" },
          },
        }}
      />

      {/* Title section */}
      <Box
        sx={{
          opacity: 0,
          animation: "fadeIn 0.8s forwards",
          animationDelay: "0.2s",
          "@keyframes fadeIn": {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        <Typography
          variant="h3"
          align="center"
          fontWeight={700}
          gutterBottom
          sx={{
            background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2,
          }}
        >
          Our Services
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          gutterBottom
          sx={{ maxWidth: "700px", mx: "auto", mb: 4 }}
        >
          End-to-end digital solutions tailored to scale your business
        </Typography>
      </Box>

      {/* Services grid with fixed card dimensions */}
      <Grid 
        container 
        spacing={isMobile ? 2 : 4} 
        sx={{ 
          mt: 2,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch", // Ensures all cards stretch to same height
        
        }}
      >
        {services.map((service, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={6} 
            lg={3} 
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              width:"350px"
            }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                height: "100%", // Takes full height of grid item
                minHeight: "420px", // Fixed minimum height
                
                display: "flex",
                flexDirection: "column",
                flexGrow: 1, // Ensures equal height
                background: "linear-gradient(145deg, #ffffff, #f8f9fa)",
                opacity: 0,
                animation: `cardEntrance 0.6s forwards`,
                animationDelay: `${index * 0.1 + 0.3}s`,
                "@keyframes cardEntrance": {
                  "0%": { 
                    opacity: 0, 
                    transform: "translateY(40px) scale(0.95)",
                  },
                  "100%": { 
                    opacity: 1, 
                    transform: "translateY(0) scale(1)",
                  },
                },
                "&:hover": {
                  transform: "translateY(-10px) scale(1.02)",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                  "& .service-icon": {
                    transform: "rotate(10deg) scale(1.1)",
                    background: theme.palette.primary.main,
                    color: "#fff",
                  },
                },
              }}
            >
              <CardContent sx={{ 
                flexGrow: 1, 
                display: "flex", 
                flexDirection: "column",
                height: "100%",
                boxSizing: "border-box"
              }}>
                <Box
                  className="service-icon"
                  sx={{
                    mb: 3,
                    display: "flex",
                    justifyContent: "center",
                    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
                    "& svg": {
                      fontSize: "3rem",
                      background: theme.palette.primary.light,
                      padding: "14px",
                      borderRadius: "50%",
                      color: theme.palette.primary.main,
                      transition: "all 0.3s ease",
                    },
                  }}
                >
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                  align="center"
                  sx={{ 
                    color: theme.palette.text.primary,
                    minHeight: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {service.title}
                </Typography>
                <List dense sx={{ mb: 2, flexGrow: 1 }}>
                  {service.features.map((feature, i) => (
                    <ListItem 
                      key={i} 
                      sx={{ 
                        py: 0.5,
                        opacity: 0,
                        animation: `fadeIn 0.4s forwards`,
                        animationDelay: `${index * 0.1 + 0.5 + i * 0.05}s`,
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: "36px" }}>
                        <CheckIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                        primaryTypographyProps={{
                          variant: "body2",
                          color: "text.secondary",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Box sx={{ mt: "auto", pt: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    href="#contact"
                    sx={{
                      borderRadius: 50,
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "0.9rem",
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                        boxShadow: `0 6px 16px ${theme.palette.primary.light}`,
                      },
                    }}
                  >
                    Get Started
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}