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
  Divider,
  useTheme,
  useMediaQuery,
  Avatar,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings'
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import mainLogo from '../assets/logo/mainLogo.jpg';
import Swal from 'sweetalert2';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { Link as ScrollLink } from "react-scroll";


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
  const [swalState, setswalState] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
        transition: '0.5s ease-in-out',
        backdrop: true,
        didClose: () => {
          setswalState(false); // Automatically reset state when popup closes
        }
      });
      setswalState(true);
    } else {
      Swal.close(); // ← Add parentheses here
      setswalState(false);
    }
  };

  const drawer = (

    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250, mt: 2 }}>

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
              <ScrollLink
                to={item.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-64}
              >
                <Typography variant="body1">{item.label}</Typography>
              </ScrollLink>
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
          position="fixed"
          sx={{
            backgroundColor: "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
            px: 2,
            boxShadow: 1,
            zIndex: theme.zIndex.drawer + 1, // Ensure header stays above other content
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >

            {/* Left - Brand Name */}
            <Box
              component={Link}
              to="/"
              sx={{

                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none'
              }}
            >
              <Avatar
                onClick={logohandleclick}
                alt="Logo"
                src={mainLogo}
                sx={{ width: 32, height: 32, marginRight: 1 }}
              />
              <Typography
                variant="h6"
                sx={{

                  color: 'black',
                  fontWeight: 'bold',
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                TrinetraTech
              </Typography>
            </Box>
            {/* Right - Menu / Navigation */}
            {isMobile ? (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: "black" }} />
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
                    <ScrollLink
                      key={item.id}
                      to={item.id}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-64} // Offset to account for fixed header height
                    >
                      <Button
                        key={item.url}
                        component={NavLink}
                        to={item.url}
                        sx={{
                          color: "black",
                          textTransform: "capitalize",
                          fontFamily: '"Roboto", sans-serif',
                          "&.active": {
                            fontWeight: "bold",
                          },
                        }}
                      >
                        {item.label}
                      </Button>
                    </ScrollLink>
                  ))}
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'black',
                    fontFamily: '"Roboto", sans-serif',
                    "&:hover": {
                      backgroundColor: "grey.800",
                    },
                  }}
                >
                  Get Started
                </Button>
                <IconButton sx={{ color: 'black' }} onClick={handleClick}>
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
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ColorLensIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Color Theme 1</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <ColorLensIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Color Theme 2</ListItemText>
                  </MenuItem>
                  {/* Add more color options later */}
                </Menu>
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
          "& .MuiDrawer-paper": {
            zIndex: theme.zIndex.appBar - 1, // Ensure drawer appears below app bar
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Header;
