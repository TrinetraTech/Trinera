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
      title: "Experts",
      description: "Our team of seasoned professionals brings decades of combined experience in the real estate market."
    },
    {
      icon: <PeopleIcon fontSize="small" />,
      title: "Personalized",
      description: "We take the time to understand your unique needs and preferences to find your perfect property match."
    },
    {
      icon: <FavoriteIcon fontSize="small" />,
      title: "98% Satisfaction",
      description: "Our 98% client satisfaction rate reflects our commitment to exceeding expectations at every step."
    },
    {
      icon: <TrendingUpIcon fontSize="small" />,
      title: "Market Data",
      description: "Access to exclusive market data and trends helps you make informed decisions with confidence."
    }
  ];

  const stats = [
    { value: 1500, label: "Properties Sold" },
    { value: 950, label: "Happy Clients" },
    { value: 25, label: "Years Experience" },
    { value: 42, label: "Industry Awards" }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Consultation",
      description: " We begin with a detailed discussion to understand your requirements, preferences, and budget constraints."
    },
    {
      step: 2,
      title: "Property Matching",
      description: "Our experts curate a selection of properties that align perfectly with your specific needs and preferences."
    },
    {
      step: 3,
      title: "Seamless Transaction",
      description: "We handle all paperwork, negotiations, and logistics to ensure a smooth and successful closing process."
    }
  ];

  return (
    <Box component="section" py={8} bgcolor="background.paper" id="about_us">
      <Container maxWidth="lg">
        {/* Header */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h3" component="h2" gutterBottom fontWeight="bold">
            About Us
          </Typography>
          <Typography variant="h6" color="text.secondary" maxWidth="sm" mx="auto">
            Industry expertise meets personalized service for exceptional results.
          </Typography>
        </Box>

        {/* Uniform Feature Cards - Wrapped in Box */}
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mb: 10,
          '& > *': {
            flex: '1 1 200px',
            maxWidth: '250px',
            minWidth: '200px'
          }
        }}>
          {features.map((feature, index) => (
            <Card
              key={index}
              sx={{
                p: 2,
                height: '250px',
                width: '250px',
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
          ))}
        </Box>

        {/* Stats Section */}
        <Box
          bgcolor="common.black"
          borderRadius={2}
          p={{ xs: 4, md: 6 }}
          mb={10}
          display="flex"
          justifyContent="center"  // Centers the content horizontally
          alignItems="center"      // Centers the content vertically
        >
          <Grid container spacing={15}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
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
        <Box mb={10}>
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" component="h3" gutterBottom fontWeight="bold">
              Our Process
            </Typography>
            <Typography variant="h6" color="text.secondary" maxWidth="sm" mx="auto">
              We've streamlined the real estate journey to make your experience seamless and stress-free.
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {processSteps.map((step, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  sx={{
                    width: 300,
                    height: 200,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'left',
                    alignItems: 'flex-start'
                  }}
                >
                  <Box sx={{ display: 'flex' }}>
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
                      <Divider sx={{ borderBottom: '5px solid red', width: '280px', mb: 5, ml: 2 }} />
                    )}

                  </Box>
                  <Typography variant="h6" component="h4" fontWeight="bold" gutterBottom >
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
        <Box textAlign="center">
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
      </Container>
    </Box>
  );
};

export default About;