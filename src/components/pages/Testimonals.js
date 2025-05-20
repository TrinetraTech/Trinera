import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Avatar, 
  IconButton,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  FormatQuote as QuoteIcon,
  Star as StarIcon,
  ChatBubbleOutline as ChatIcon
} from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    quote: "Working with Tranquil Estates was a game-changer. They found us our dream home in just two weeks, handling every detail with professionalism and care.",
    name: "James Davis",
    role: "First-time Homebuyer",
    initials: "JD",
    rating: 5
  },
  {
    id: 2,
    quote: "Their market knowledge is unmatched. We sold our property above asking price in just 10 days. The entire process was smooth and stress-free.",
    name: "Sarah Miller",
    role: "Property Seller",
    initials: "SM",
    rating: 5
  },
  {
    id: 3,
    quote: "As a commercial property investor, I appreciate their attention to detail and market analysis. They've helped me secure three profitable investments.",
    name: "Robert Johnson",
    role: "Commercial Investor",
    initials: "RJ",
    rating: 5
  },
  {
    id: 4,
    quote: "Relocating to a new city was daunting, but they made it seamless. Their virtual tours and local insights were invaluable in our decision-making.",
    name: "Emily Lee",
    role: "Long-distance Buyer",
    initials: "EL",
    rating: 5
  },
  {
    id: 5,
    quote: "The property management services are exceptional. Our rental properties have never been in better hands, with higher occupancy rates and returns.",
    name: "David Thompson",
    role: "Property Owner",
    initials: "DT",
    rating: 5
  },
  {
    id: 6,
    quote: "Their financing guidance was crucial in helping us navigate the complex mortgage process. We secured a great rate thanks to their connections.",
    name: "Michael Rodriguez",
    role: "First-time Homebuyer",
    initials: "MR",
    rating: 5
  }
];

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  
  return (
    <Box 
      id="testimonials" 
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.grey[50]
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
              color: theme.palette.grey[900]
            }}
          >
            Testimonials
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: theme.palette.grey[600],
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Hear what our satisfied clients have to say about their experience with us.
          </Typography>
        </Box>

        {/* Testimonials Carousel */}
        <Box 
          sx={{ 
            position: 'relative',
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <Box 
            id="testimonials-container"
            sx={{
              display: 'flex',
              animation: 'scroll 30s linear infinite',
              '&:hover': {
                animationPlayState: 'paused'
              },
              width: isMobile ? '400%' : '200%'
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Box 
                key={`${testimonial.id}-${index}`}
                sx={{
                  width: { xs: '100%', md: '33.333%' },
                  flexShrink: 0,
                  px: 2
                }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    borderRadius: 2,
                    boxShadow: 1,
                    border: `1px solid ${theme.palette.grey[200]}`,
                    p: 3
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <IconButton sx={{ mb: 2, color: theme.palette.grey[900] }}>
                      <ChatIcon fontSize="large" />
                    </IconButton>
                    
                    <Box mb={3}>
                      <Box sx={{ display: 'flex', mb: 1 }}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} sx={{ color: theme.palette.warning.main }} />
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
                    
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar 
                        sx={{ 
                          mr: 2,
                          width: 48, 
                          height: 48,
                          bgcolor: theme.palette.grey[200],
                          color: theme.palette.grey[700],
                          fontWeight: 600,
                          fontSize: '1.25rem'
                        }}
                      >
                        {testimonial.initials}
                      </Avatar>
                      <Box>
                        <Typography 
                          variant="subtitle1" 
                          sx={{ fontWeight: 600, color: theme.palette.grey[900] }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography 
                          variant="body2" 
                          sx={{ color: theme.palette.grey[500], fontSize: '0.875rem' }}
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
        
        {/* Testimonial Video CTA */}
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
              fontSize: '1.125rem',
              backgroundColor: theme.palette.grey[900],
              '&:hover': {
                backgroundColor: theme.palette.grey[800]
              },
              transition: 'background-color 0.3s'
            }}
          >
            Share Your Experience
          </Button>
        </Box>
      </Container>
      
      {/* Animation styles */}
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