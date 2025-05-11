import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link as MuiLink,
  TextField,
  Button,
  Card, 
  CardMedia,
  Icon
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Swal from 'sweetalert2';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);

  // Footer sections data
  const footerSections = [
    {
      title: 'LuxEstate',
      content: (
        <>
         <Typography 
  variant="body2" 
  color="grey.400" 
  mb={2}
>
  Providing exceptional real estate
  services <br /> with a focus on luxury
  properties and <br />personalized client experiences.
</Typography>
          <Box display="flex" gap={1}>
            {[Facebook, Twitter, Instagram, LinkedIn].map((SocialIcon, index) => (
              <IconButton key={index} color="inherit" size="small">
                <SocialIcon fontSize="small" />
              </IconButton>
            ))}
          </Box>
        </>
      )
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '#' },
        { text: 'Properties', href: '#featured-properties' },
        { text: 'Why Choose Us', href: '#why-choose-us' },
        { text: 'Testimonials', href: '#testimonials' },
        { text: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Our Services',
      links: [
        { text: 'Luxury Property Listings', href: '#' },
        { text: 'Property Management', href: '#' },
        { text: 'Investment Consulting', href: '#' },
        { text: 'Market Analysis', href: '#' }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Address',
      text: '123 Luxury Lane, New York, NY 10001'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      text: '+91999999999'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      text: 'info@luxestate.com'
    }
  ];

  const footerImages = [
    {
      url: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMGZvb3RlciUyMGVsZWdhbnQlMjB2ZWN0b3IlMjBtaW5pbWFsfGVufDB8MHx8fDE3NDY3OTY1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Elegant plant in vase"
    },
    {
      url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMGZvb3RlciUyMGVsZWdhbnQlMjB2ZWN0b3IlMjBtaW5pbWFsfGVufDB8MHx8fDE3NDY3OTY1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Rubber plant"
    }
  ];

  const footerLinks = [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Terms of Service', href: '#' },
    { text: 'Sitemap', href: '#' }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      Swal.fire({
        icon: 'success',
        title: 'Subscribed!',
        text: 'Thank you for subscribing to our newsletter.',
        confirmButtonColor: '#3085d6',
      });
      setEmail('');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid email address.',
        confirmButtonColor: '#d33',
      });
    }
  };

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Box sx={{ bgcolor: 'grey.900', color: 'white', py: 8, overflowX: 'hidden' }}>
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between" sx={{ flexWrap: 'wrap', px: { xs: 2, sm: 4, md: 6 } }}>
          {/* Render footer sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Typography variant={index === 0 ? "h5" : "h6"} fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              {section.content || (
                <Box display="flex" flexDirection="column" gap={1}>
                  {section.links.map((link, linkIndex) => (
                    <MuiLink key={linkIndex} href={link.href} color="grey.400" underline="hover">
                      {link.text}
                    </MuiLink>
                  ))}
                </Box>
              )}
            </Grid>
          ))}

          {/* Newsletter Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, bgcolor: 'grey.800', p: 3, borderRadius: 2, height: '100%' }}>
              <Box>
                <Typography variant="h6" gutterBottom color="grey.200">
                  Subscribe to Our Newsletter
                </Typography>
                <Typography variant="body2" color="grey.400">
                  Stay updated with our latest properties and real estate insights.
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSubscribe} display="flex" gap={2} flexWrap="wrap">
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{ bgcolor: 'white', borderRadius: 1, minWidth: '220px' }}
                />
                <Button type="submit" variant="contained" sx={{ bgcolor: 'primary.main' }}>
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Image Cards */}
        <Box sx={{ mb: 4, mt: 12 }}>
          <Grid container spacing={4} sx={{ px: 10 }}>
            {footerImages.map((image, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ position: 'relative', overflow: 'hidden', width: 600, height: 200 }}>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={image.url}
                    alt={image.alt}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
        
        {/* Contact Info */}
        <Box sx={{ px: 12, py: 4, borderTop: '1px solid #2e2e2e' }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {contactInfo.map((info, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 4, marginLeft: 20 }}>
                    <Box sx={{ flexShrink: 0, mt: 1 }}>
                      <Icon sx={{ fontSize: 24, color: 'neutral.400' }}>{info.icon}</Icon>
                    </Box>
                    <Box sx={{ ml: 3 }}>
                      <Typography variant="body1" sx={{ fontWeight: 'medium', color: 'white' }}>
                        {info.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'neutral.400' }}>
                        {info.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Footer Bottom */}
        <Box sx={{ py: 4, mt: 4, borderTop: '1px solid #2e2e2e', px: { xs: 2, md: 6 }, 
          display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', 
          justifyContent: 'space-between', rowGap: 2 }}>
          
          <Typography variant="body2" sx={{ color: '#B0B0B0', fontSize: 14, textAlign: 'left' }}>
            &copy; 2023 LuxEstate. All rights reserved.
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' } }}>
            {footerLinks.map((link, index) => (
              <MuiLink key={index} href={link.href} underline="none" 
                sx={{ color: '#B0B0B0', fontSize: 14, '&:hover': { color: 'white' } }}>
                {link.text}
              </MuiLink>
            ))}
          </Box>

          {/* Back to Top Button */}
          {visible && (
            <IconButton
              onClick={scrollToTop}
              sx={{
                position: 'fixed',
                bottom: 16,
                right: 16,
                backgroundColor: '#2e2e2e',
                color: 'white',
                width: 48,
                height: 48,
                borderRadius: '50%',
                boxShadow: 3,
                transition: 'all 0.3s',
                '&:hover': { backgroundColor: '#444' },
              }}
              aria-label="Back to top"
            >
              <ArrowUpwardIcon />
            </IconButton>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;