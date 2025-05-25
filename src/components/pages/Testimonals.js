import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import {
  Star as StarIcon,
  ChatBubbleOutline as ChatIcon,
} from "@mui/icons-material";

const testimonials = [
  {
    id: 1,
    quote:
      "Trinetr Tech delivered a stunning website for our SaaS product — on time and under budget. Their team is highly professional and technically skilled.",
    name: "Anjali Mehta",
    role: "SaaS Founder",
    initials: "AM",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their cloud infrastructure setup has made our system scalable and more reliable. We’ve seen a 30% drop in downtime since implementation.",
    name: "Rohit Patel",
    role: "CTO, Logistics Platform",
    initials: "RP",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Thanks to Trinetr Tech’s custom CRM system, we’ve streamlined our workflow and improved client response time dramatically.",
    name: "Neha Shah",
    role: "Operations Manager",
    initials: "NS",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "From UX design to backend integration, their full-stack team handled our mobile app project smoothly. Highly recommended for startups.",
    name: "Arun Verma",
    role: "Startup Co-founder",
    initials: "AV",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Trinetr’s team went above and beyond during our e-commerce launch. Their SEO and performance optimizations helped us double our traffic.",
    name: "Priya Desai",
    role: "E-commerce Manager",
    initials: "PD",
    rating: 5,
  },
  {
    id: 6,
    quote:
      "The API integrations were complex, but Trinetr made it feel effortless. Reliable, responsive, and technically excellent.",
    name: "Karan Malhotra",
    role: "Product Manager",
    initials: "KM",
    rating: 5,
  },
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.grey[50],
      }}
    >
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: theme.palette.grey[900],
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: theme.palette.grey[600],
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            Hear from companies and entrepreneurs who partnered with Trinetr Tech
            to launch, scale, and transform their digital platforms.
          </Typography>
        </Box>

        {/* Carousel */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            id="testimonials-container"
            sx={{
              display: "flex",
              animation: "scroll 30s linear infinite",
              "&:hover": {
                animationPlayState: "paused",
              },
              width: isMobile ? "400%" : "200%",
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Box
                key={`${testimonial.id}-${index}`}
                sx={{
                  width: { xs: "100%", md: "33.333%" },
                  flexShrink: 0,
                  px: 2,
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 2,
                    boxShadow: 1,
                    border: `1px solid ${theme.palette.grey[200]}`,
                    p: 3,
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <IconButton sx={{ mb: 2, color: theme.palette.grey[900] }}>
                      <ChatIcon fontSize="large" />
                    </IconButton>

                    <Box mb={3}>
                      <Box sx={{ display: "flex", mb: 1 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon
                            key={i}
                            sx={{ color: theme.palette.warning.main }}
                          />
                        ))}
                      </Box>
                      <Typography
                        variant="body1"
                        fontStyle="italic"
                        sx={{ color: theme.palette.grey[700] }}
                      >
                        "{testimonial.quote}"
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        sx={{
                          mr: 2,
                          width: 48,
                          height: 48,
                          bgcolor: theme.palette.grey[200],
                          color: theme.palette.grey[700],
                          fontWeight: 600,
                          fontSize: "1.25rem",
                        }}
                      >
                        {testimonial.initials}
                      </Avatar>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.grey[900],
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: theme.palette.grey[500],
                            fontSize: "0.875rem",
                          }}
                        >
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>

        {/* CTA Button */}
        <Box mt={8} textAlign="center">
          <Button
            variant="contained"
            component={Link}
            to="/contact"
            sx={{
              px: 4,
              py: 2,
              borderRadius: 1,
              fontWeight: 600,
              fontSize: "1.125rem",
              backgroundColor: theme.palette.grey[900],
              "&:hover": {
                backgroundColor: theme.palette.grey[800],
              },
              transition: "background-color 0.3s",
            }}
          >
            Share Your Experience
          </Button>
        </Box>
      </Container>

      {/* Global CSS for scroll animation */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Testimonials;
