import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemButton,
  Button,
  IconButton,
  Drawer,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', url: '/home' },
  { label: 'Properties', url: '/properties' },
  { label: 'Contact Us', url: '/contact' },
  { label: 'About Us', url: '/about' },
  { label: 'Testimonials', url: '/testimonials' }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Typography 
        variant="h4"
        component={Link}
        to="/"
        sx={{
          my: 2,
          fontWeight: 700,
          color: 'text.primary',
          textDecoration: 'none',
          fontFamily: '"Playfair Display", serif',
          background: 'linear-gradient(to right, #434343, #000000)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          textFillColor: 'transparent',
          '&:hover': {
            background: 'linear-gradient(to right, #000000, #434343)',
          }
        }}
      >
        Trinetra Real Estate
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.url} disablePadding>
            <ListItemButton 
              component={NavLink} 
              to={item.url}
              sx={{ 
                textAlign: 'left',
                '&.active': {
                  backgroundColor: theme.palette.action.selected
                }
              }}
            >
              <Typography variant="body1">{item.label}</Typography>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed" // Changed from 'static' to 'fixed'
          sx={{
            backgroundColor: 'rgb(255 255 255 / var(--tw-bg-opacity, 1))',
            px: 2,
            boxShadow: 1,
            zIndex: theme.zIndex.drawer + 1, // Ensure header stays above other content
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {/* Left - Brand Name */}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ 
                color: 'black', 
                fontWeight: 'bold',
                textDecoration: 'none',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Trinetra Real Estate
            </Typography>

            {/* Right - Menu / Navigation */}
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: 'black' }} />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    gap: 1,
                    color: 'black',
                  }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item.url}
                      component={NavLink}
                      to={item.url}
                      sx={{
                        color: 'black',
                        textTransform: 'capitalize',
                        fontFamily: '"Roboto", sans-serif',
                        '&.active': {
                          fontWeight: 'bold',
                          textDecoration: 'underline'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
                <Button 
                  variant="contained" 
                  sx={{ 
                    backgroundColor: 'black',
                    fontFamily: '"Roboto", sans-serif',
                    '&:hover': {
                      backgroundColor: 'grey.800'
                    }
                  }}
                >
                  Get Started
                </Button>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>

      {/* Add padding to the main content to account for fixed header */}
      <Toolbar /> {/* This creates space below the fixed header */}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            zIndex: theme.zIndex.appBar - 1, // Ensure drawer appears below app bar
          }
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;