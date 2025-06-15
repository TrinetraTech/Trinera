import React, { useState, useEffect } from "react";
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
  Icon,
} from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";
import Swal from "sweetalert2";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);

  // Footer sections data
  const footerSections = [
    {
      title: "TrinetraTech",
      content: (
        <>
          <Typography variant="body2" color="grey.400" mb={2}>
            Providing exceptional real estate services <br /> with a focus on
            luxury properties and <br />
            personalized client experiences.
          </Typography>
          <Box display="flex" gap={1}>

          {[
            { icon: Facebook, url: 'https://www.facebook.com/share/1BwAUQB4Rb/' },
            { icon: Twitter, url: 'https://x.com/trinetrtech' },
            { icon: Instagram, url: 'https://www.instagram.com/trinetrtech/?hl=en' },
            { icon: LinkedIn, url: 'https://www.linkedin.com/in/trinetra-tech-827061365/' },
          ].map(({ icon: SocialIcon, url }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <IconButton color="inherit" size="small">
                <SocialIcon fontSize="small" />
              </IconButton>
            </a>
          ))}
        </Box>

           

        </>
      ),
    },
    {
      title: "Quick Links",
      links: [

        { text: 'Home', href: '#' },
        { text: 'Services', href: '#featured-properties' },
        { text: 'About Us', href: '#why-choose-us' },
        { text: 'Testimonials', href: '#testimonials' },
        { text: 'Contact', href: '#contact' }
      ]

    },
    {
      title: "Our Services",
      links: [

        { text: 'Business Websites', href: '#' },
        { text: 'Android App Development', href: '#' },
        { text: 'Web App Development', href: '#' },
        { text: 'E-Commerce Platform', href: '#' }
      ]
    }

  ];

  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),

      title: 'Address',
      text: 'Ashok Nagar, Kankarhbagh, Patna (800020)'

    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),

      title: 'Phone',
      text: '+91 9304493057, +91 6207665438, +91 9955748811'

    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-neutral-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),

      title: 'Email',
      text: ' trinetrtech@gmail.com'
    }

  ];

  const footerImages = [
    {
      url: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMGZvb3RlciUyMGVsZWdhbnQlMjB2ZWN0b3IlMjBtaW5pbWFsfGVufDB8MHx8fDE3NDY3OTY1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Elegant plant in vase",
    },
    {
      url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMGZvb3RlciUyMGVsZWdhbnQlMjB2ZWN0b3IlMjBtaW5pbWFsfGVufDB8MHx8fDE3NDY3OTY1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Rubber plant",
    },
  ];

  const footerLinks = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
    { text: "Sitemap", href: "#" },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "Thank you for subscribing to our newsletter.",
        confirmButtonColor: "#3085d6",
      });
      setEmail("");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#d33",
      });
    }
  };

  const toggleVisibility = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "grey.900",
        color: "white",
        py: { xs: 4, md: 8 },
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ px: { xs: 2, sm: 3, md: 4, overflow: "hidden" } }}
      >
        {/* Main Footer Content */}
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="space-between"
        >
          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box sx={{ mb: { xs: 3, md: 0 } }}>
                <Typography
                  variant={index === 0 ? "h5" : "h6"}
                  fontWeight="bold"
                  gutterBottom
                  sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
                >
                  {section.title}
                </Typography>
                {section.content || (
                  <Box display="flex" flexDirection="column" gap={1}>
                    {section.links.map((link, linkIndex) => (
                      <MuiLink
                        key={linkIndex}
                        href={link.href}
                        color="grey.400"
                        underline="hover"
                        sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                      >
                        {link.text}
                      </MuiLink>
                    ))}
                  </Box>
                )}
              </Box>
            </Grid>
          ))}

          {/* Newsletter Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                bgcolor: "grey.800",
                p: 3,
                borderRadius: 2,
                height: "100%",
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  gutterBottom
                  color="grey.200"
                  sx={{ fontSize: { xs: "1.1rem", sm: "1.25rem" } }}
                >
                  Subscribe to Our Newsletter
                </Typography>
                <Typography
                  variant="body2"
                  color="grey.400"
                  sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                >
                  Stay updated with our latest properties and real estate
                  insights.
                </Typography>
              </Box>

              <Box
                component="form"
                onSubmit={handleSubscribe}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  width: "100%",
                }}
              >
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    bgcolor: "white",
                    borderRadius: 1,
                    flexGrow: 1,
                    "& .MuiInputBase-root": {
                      height: { xs: 40, sm: 36 },
                    },
                  }}
                  fullWidth
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    bgcolor: "primary.main",
                    whiteSpace: "nowrap",
                    height: { xs: 40, sm: 36 },
                  }}
                  fullWidth={window.innerWidth < 600}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

    {/* Image Cards */}
    <Box sx={{ 
  mb: 4, 
  mt: { xs: 12, md: 8 },
  width: '100%',
  overflow: 'hidden'
}}>
  <Grid container spacing={{ xs: 0, md: 4 }} sx={{ width: '100%', margin: 0 }}>
    {footerImages.map((image, index) => (
      <Grid item xs={12} md={6} key={index} sx={{ 
        padding: { xs: '0 !important', md: 'inherit' },
        marginBottom: { xs: 2, md: 0 }
      }}>
        <Card sx={{ 
          position: 'relative', 
          overflow: 'hidden', 
          height: { xs: 180, sm: 240, md: 250 },
          width:{xs:380,sm:600,md:700},
          borderRadius: { xs: 1, md: 1 } // Remove border radius on mobile for full-width look
        }}>
          <CardMedia
            component="img"
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
    <Box 
  sx={{ 
    py: 4, 
    borderTop: '1px solid',
    borderColor: ' #2e2e2e',
    width: '100%',
    px: { xs: 2, sm: 3, md: 0 } // Responsive horizontal padding
  }}
>
  <Grid container justifyContent="center">
    <Grid item xs={12} md={10} lg={8}> {/* Constrain width on larger screens */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: { sm: 'space-between' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          gap: { xs: 3, sm: 2, md: 3 },
          flexWrap: 'wrap'
        }}
      >
        {contactInfo.map((info, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: 'flex', 
              alignItems: 'flex-start',
              width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'auto' },
              maxWidth: { md: 300 }
            }}
          >
            <Box sx={{ 
              flexShrink: 0, 
              mt: 0.5,
              color: 'text.paper'
            }}>
              <Icon sx={{ fontSize: { xs: 20, sm: 24 } }}>{info.icon}</Icon>
            </Box>
            <Box sx={{ ml: 2 }}>
              <Typography 
                variant="subtitle2" 
                sx={{ 
                  fontWeight: 600, 
                  color: 'text.paper',
                  lineHeight: 1.2
                }}
              >
                {info.title}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'text.paper',
                  mt: 0.5,
                  fontSize: { xs: '0.8125rem', sm: '0.875rem' }
                }}
              >
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
        <Box
          sx={{
            py: 3,
            borderTop: "1px solid #2e2e2e",
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#B0B0B0",
              fontSize: { xs: "0.75rem", sm: "0.875rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            &copy; 2025 TrinetraTech. All rights reserved.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "flex-end" },
              gap: { xs: 2, sm: 3, md: 4 },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            {footerLinks.map((link, index) => (
              <MuiLink
                key={index}
                href={link.href}
                underline="none"
                sx={{
                  color: "#B0B0B0",
                  fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  "&:hover": { color: "white" },
                  whiteSpace: "nowrap",
                }}
              >
                {link.text}
              </MuiLink>
            ))}
          </Box>
        </Box>

        {/* Back to Top Button */}
        {visible && (
          <IconButton
            onClick={scrollToTop}
            sx={{
              position: "fixed",
              bottom: 16,
              right: 16,
              backgroundColor: "#2e2e2e",
              color: "white",
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              borderRadius: "50%",
              boxShadow: 3,
              transition: "all 0.3s",
              "&:hover": { backgroundColor: "#444" },
              zIndex: 1000,
            }}
            aria-label="Back to top"
          >
            <ArrowUpwardIcon sx={{ fontSize: { xs: 20, sm: 24 } }} />
          </IconButton>
        )}
      </Container>
    </Box>
  );
};

export default Footer;
