import * as React from "react";
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
  useTheme,
  useMediaQuery,
  Avatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
  Grow,
  styled
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/logo/mainLogo.jpg';
import Swal from 'sweetalert2';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { keyframes } from '@emotion/react';

// Custom pulse animation
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

// Custom hover animation
const hoverEffect = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

// Styled components
const AnimatedButton = styled(Button)(({ theme }) => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    animation: `${hoverEffect} 0.5s ease`,
    backgroundColor: theme.palette.primary.dark,
  },
}));

const LogoContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

const NavButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  '&:after': {
    content: '""',
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '0',
    left: '0',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease',
  },
  '&:hover:after': {
    width: '100%',
  },
  '&.active:after': {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
  },
}));

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Service', id: 'services' },
  { label: 'Contact Us', id: 'contact' },
  { label: 'About Us', id: 'about_us' },
  { label: 'Testimonials', id: 'testimonials' }
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [swalState, setswalState] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [scrolled, setScrolled] = React.useState(false);
  const open = Boolean(anchorEl);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setMobileOpen(false);
    }
  };

  const logohandleclick = () => {
    if (!swalState) {
      Swal.fire({
        imageUrl: mainLogo,
        imageAlt: 'mainlogo',
        imageWidth: 300,
        imageHeight: 300,
        showConfirmButton: false,
        background: 'transparent',
        backdrop: `
          rgba(0,0,0,0.7)
          center top
          no-repeat
        `,
        didClose: () => {
          setswalState(false);
        }
      });
      setswalState(true);
    } else {
      Swal.close();
      setswalState(false);
    }
  };

  const drawer = (
    <Box sx={{ 
      textAlign: 'center', 
      width: '100%',
      padding: '20px 0',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      boxShadow: theme.shadows[4]
    }}>
      <List>
        {navItems.map((item, index) => (
          <Grow 
            in={mobileOpen}
            timeout={index * 150}
            key={item.id}
          >
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                sx={{
                  justifyContent: 'center',
                  py: 2,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover,
                  }
                }}
              >
                <Typography 
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: theme.palette.primary.main,
                    }
                  }}
                >
                  {item.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          </Grow>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 1)',
            px: 2,
            boxShadow: scrolled ? theme.shadows[4] : 'none',
            transition: 'all 0.3s ease',
            backdropFilter: scrolled ? 'blur(8px)' : 'none',
            zIndex: theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              transition: 'all 0.3s ease',
              py: scrolled ? 1 : 2,
            }}
          >
            {/* Left - Brand Name */}
            <LogoContainer
              component={Link}
              to="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              sx={{
                textDecoration: 'none'
              }}
            >
              <Avatar
                onClick={logohandleclick}
                alt="Logo"
                src={mainLogo}
                sx={{ 
                  width: scrolled ? 40 : 48, 
                  height: scrolled ? 40 : 48, 
                  marginRight: 1,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    animation: `${pulse} 1s infinite`,
                  }
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: scrolled ? '1.1rem' : '1.25rem',
                  transition: 'all 0.3s ease',
                }}
              >
                TrinetraTech
              </Typography>
            </LogoContainer>

            {/* Right - Menu / Navigation */}
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ 
                  color: "black",
                  '&:hover': {
                    animation: `${pulse} 0.5s ease`,
                    backgroundColor: 'transparent',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    color: "black",
                  }}
                >
                  {navItems.map((item) => (
                    <NavButton
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        color: "black",
                        textTransform: "capitalize",
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 500,
                        fontSize: '1rem',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        }
                      }}
                    >
                      {item.label}
                    </NavButton>
                  ))}
                </Box>
                <AnimatedButton
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 600,
                    boxShadow: `0 4px 6px rgba(0, 0, 0, 0.1)`,
                    '&:hover': {
                      boxShadow: `0 6px 8px rgba(0, 0, 0, 0.15)`,
                    }
                  }}
                >
                  Get Started
                </AnimatedButton>
                <IconButton 
                  sx={{ 
                    color: 'black',
                    '&:hover': {
                      transform: 'rotate(45deg)',
                      transition: 'transform 0.3s ease',
                      backgroundColor: 'transparent',
                    }
                  }} 
                  onClick={handleClick}
                >
                  <SettingsIcon />
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  PaperProps={{
                    elevation: 4,
                    sx: {
                      borderRadius: '12px',
                      marginTop: '10px',
                      minWidth: '180px',
                    }
                  }}
                >
                  <MenuItem 
                    onClick={handleClose}
                    sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      }
                    }}
                  >
                    <ListItemIcon>
                      <ColorLensIcon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Day Mode" />
                  </MenuItem>
                  <MenuItem 
                    onClick={handleClose}
                    sx={{
                      '&:hover': {
                        backgroundColor: theme.palette.action.hover,
                      }
                    }}
                  >
                    <ListItemIcon>
                      <ColorLensIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary="Dark Night" />
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </Box>
      
      {/* Add padding to the main content to account for fixed header */}
      <Toolbar />
      
      {/* Mobile Drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            zIndex: theme.zIndex.appBar - 1,
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(8px)',
            boxShadow: theme.shadows[4],
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;