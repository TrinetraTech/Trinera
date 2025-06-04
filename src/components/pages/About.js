import * as React from 'react';
import CountUp from 'react-countup';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Button,
  Divider
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  People as PeopleIcon,
  Favorite as FavoriteIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const About = () => {
  const features = [
    {
      icon: <CheckCircleIcon fontSize="small" />,
      title: "Expert Engineers",
      description: "Our developers bring years of experience in full-stack development, DevOps, and cloud-native architectures."
    },
    {
      icon: <PeopleIcon fontSize="small" />,
      title: "Client-Centric",
      description: "We tailor solutions to each client's unique tech needs — from MVPs to enterprise-scale platforms."
    },
    {
      icon: <FavoriteIcon fontSize="small" />,
      title: "Reliable Delivery",
      description: "98% of our clients return for additional projects, a testament to our consistency and reliability."
    },
    {
      icon: <TrendingUpIcon fontSize="small" />,
      title: "Data-Driven",
      description: "We make decisions backed by analytics, ensuring your tech solution performs and scales effectively."
    }
  ];

  const stats = [
    { value: 120, label: "Projects Delivered" },
    { value: 85, label: "Satisfied Clients" },
    { value: 5, label: "Years in Tech" },
    { value: 12, label: "Tech Stack Experts" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We work with you to define your goals, tech requirements, and project roadmap."
    },
    {
      step: 2,
      title: "Development & Testing",
      description: "Agile development with continuous testing ensures a bug-free and high-performing product."
    },
    {
      step: 3,
      title: "Launch & Support",
      description: "We deploy, monitor, and offer ongoing support to ensure long-term stability and growth."
    }
  ];

  return (
    <Box component="section" py={{ xs: 4, md: 8 }} bgcolor="background.paper" id="about_us">
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={{ xs: 4, md: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            About Trinetra Tech
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="sm" mx="auto">
            A next-gen IT solutions company powering growth for startups and enterprises.
          </Typography>
        </Box>

        {/* Features */}
        <Grid container spacing={2} mb={{ xs: 6, md: 10 }} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} display="flex" justifyContent="center">
              <Card
                sx={{
                  p: 2,
                  height: '250px',
                  width: '100%',
                  maxWidth: '250px',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: 'grey.50',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                <CardContent sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexGrow: 1,
                  textAlign: 'center'
                }}>
                  <Avatar
                    sx={{
                      bgcolor: 'common.black',
                      width: 50,
                      height: 50,
                      mb: 2,
                      '& .MuiSvgIcon-root': {
                        fontSize: '1.5rem'
                      }
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="subtitle1" component="h3" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Stats Section */}
        <Box
          bgcolor="common.black"
          borderRadius={2}
          p={{ xs: 3, md: 6 }}
          mb={{ xs: 6, md: 10 }}
        >
          <Grid container spacing={{ xs: 3, md: 6, lg: 15 }}>
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={6} lg={3} key={index}>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    component="div"
                    fontWeight="bold"
                    color="common.white"
                    mb={1}
                  >
                    <CountUp start={0} end={stat.value} duration={5} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef}></span>+
                        </div>
                      )}
                    </CountUp>
                  </Typography>
                  <Typography variant="body1" color="grey.400">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Process Section */}
        <Box mb={{ xs: 6, md: 10 }}>
          <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
            <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
              Our Process
            </Typography>
            <Typography variant="h6" color="text.secondary" maxWidth="sm" mx="auto">
              From concept to deployment, our streamlined process ensures your digital product succeeds.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
                <Box
                  sx={{
                    width: { xs: '100%', sm: 300 },
                    height: { xs: 'auto', sm: 200 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'left',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box sx={{ display: 'flex', width: '100%' }}>
                    <Avatar
                      sx={{
                        bgcolor: 'common.black',
                        width: 60,
                        height: 60,
                        mb: 2,
                      }}
                    >
                      {step.step}
                    </Avatar>
                    {index !== 2 && (
                      <Divider 
                        sx={{ 
                          borderBottom: '5px solid red', 
                          width: { xs: '60px', sm: '120px', md: '180px' }, 
                          mb: 5, 
                          ml: 2,
                          alignSelf: 'center'
                        }} 
                      />
                    )}
                  </Box>
                  <Typography variant="h6" component="h4" fontWeight="bold" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* CTA */}
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Button
            variant="contained"
            size="large"
            component={Link}
            to="/contact"
            sx={{
              bgcolor: 'common.black',
              color: 'common.white',
              px: 6,
              py: 2,
              fontSize: '1.125rem',
              '&:hover': {
                bgcolor: 'grey.800'
              }
            }}
          >
            Schedule a Consultation
          </Button>
        </Box>
        
        <Box textAlign="center" mb={{ xs: 6, md: 10 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            A Word from Our Founder
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            maxWidth="md"
            mx="auto"
            mt={2}
          >
            "At Trinetra Tech, we believe in building more than just software—we build
            partnerships that scale with your business. Our mission is to empower startups
            and enterprises through clean code, scalable architecture, and honest collaboration.
            We're not just your tech team — we're your tech partner."
          </Typography>
          <Typography variant="subtitle1" mt={3} fontWeight="bold">
            — Founder 
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;