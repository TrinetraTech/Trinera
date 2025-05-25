import React from "react";
import { useRef } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
  SvgIcon,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;

    // Check validity of the entire form
    if (!form.checkValidity()) {
      // This will trigger native validation UI
      form.reportValidity();
      return; // Don't send emails if invalid
    }

    // If valid, proceed with emailjs
    // First: send to admin
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_ADMIN_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Then: send thank-you email to user
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_USER_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          )
          .then(() => {
            alert("Message sent to both user and admin!");
            formRef.current.reset(); // optional
          })
          .catch((err) => {
            alert("User email failed to send.");
            console.error(err);
          });
      })
      .catch((err) => {
        alert("Admin email failed to send.");
        console.error(err);
      });
  };

  return (
    <Box mb={4}>
      {/* Page Title */}
      <Box textAlign="center" mb={4} mt={3}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Contact
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          We'd love to hear from you. Send us a message or reach out directly!
        </Typography>
      </Box>

      <Grid container spacing={6} alignItems="flex-start">
        {/* Contact Form */}
        <Grid item xs={12} lg={4}>
          <Paper elevation={1} sx={{ p: 4, bgcolor: "neutral.50", ml: 20 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Send Us a Message
            </Typography>

            <Box
              component="form"
              id="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              sx={{ mt: 2 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    label="Full Name"
                    name="name"
                    aria-label="Full Name"
                    aria-required="true"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    required
                    type="email"
                    label="Email Address"
                    name="email"
                    aria-label="Email Address"
                    aria-required="true"
                    autoComplete="email"
                  />
                </Grid>
              </Grid>

              <Box mt={2}>
                <TextField
                  fullWidth
                  required
                  type="tel"
                  label="Phone Number" // <-- this must be a string
                  name="phone"
                  aria-label="Phone Number"
                  aria-required="true"
                  autoComplete="tel"
                  slotProps={{
                    input: {
                      pattern: "[0-9]*",
                      inputMode: "numeric",
                    },
                  }}
                />

              </Box>

              <Box mt={2}>
                <FormControl fullWidth>
                  <InputLabel id="subject-label">Subject</InputLabel>
                  <Select
                    labelId="subject-label"
                    id="contact-subject"
                    name="subject"
                    label="Subject"
                    defaultValue=""
                  >
                    <MenuItem value="">Select a subject</MenuItem>
                    <MenuItem value="Buying a Property">Buying a Property</MenuItem>
                    <MenuItem value="Selling a Property">Selling a Property</MenuItem>
                    <MenuItem value="Renting a Property">Renting a Property</MenuItem>
                    <MenuItem value="Property Investment">Property Investment</MenuItem>
                    <MenuItem value="Other Inquiry">Other Inquiry</MenuItem>
                  </Select>
                </FormControl>
 </Box>

             

              <Box mt={2}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={4}
                  label="Message"
                  name="message"
                  aria-label="Message"
                  aria-required="true"

                />
              </Box>

              <Box mt={2}>
                <FormControlLabel
                  control={<Checkbox name="newsletter" color="primary" />}
                  label="Subscribe to our newsletter for market updates and exclusive property listings"
                  aria-label="Message"
                  aria-required="true"

                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                endIcon={
                  <SvgIcon>
                    <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" />
                  </SvgIcon>
                }
                sx={{ mt: 3, py: 1.5 }}
              >
                Send Message
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Contact Info and Image */}
        <Grid item xs={12} lg={8}>
          <Grid container spacing={4} direction="column">
            {/* Office Image */}
            <Grid item>
              <Paper elevation={1}>
                <img
                  src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=1080&q=80"
                  alt="LuxEstate office"
                  style={{ width: "100%", height: "340px", objectFit: "cover" }}
                />
              </Paper>
            </Grid>

            {/* Contact Details */}
            <Grid item>
              <Paper elevation={1} sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Contact Information
                </Typography>

                <Box mt={2}>
                  <Typography fontWeight="medium">Address</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Ashok Nagar, Kankarhbagh, Patna (800020).
                  </Typography>
                </Box>

                <Box mt={2}>
                  <Typography fontWeight="medium">Phone</Typography>
                  <Typography variant="body2" color="text.secondary">
                   +91 9304493057, +91 6207665438, +91 9955748811
                  </Typography>
                </Box>

                <Box mt={2}>
                  <Typography fontWeight="medium">Email</Typography>
                  <Typography variant="body2" color="text.secondary">
                    trinetrtech@gmail.com
                  </Typography>
                </Box>

                <Box mt={2}>
                  <Typography fontWeight="medium">Office Hours</Typography>

                  <Typography variant="body2" color="text.secondary">Mon - Fri: 9:00 AM - 6:00 PM</Typography>
                  <Typography variant="body2" color="text.secondary">Saturday: 10:00 AM - 4:00 PM</Typography>
                  <Typography variant="body2" color="text.secondary">Sunday: Open</Typography>

                </Box>
              </Paper>
            </Grid>

            <Grid item>

  <Paper elevation={1} sx={{ p: 3 }}>
    <Typography variant="h6" fontWeight="bold" gutterBottom>
      Connect With Us
    </Typography>
    <Box display="flex" gap={2} justifyContent="center" flexWrap="wrap">
  {[
    { name: 'Facebook', url: 'https://www.facebook.com/share/1BwAUQB4Rb/', icon: <FacebookIcon /> },
    { name: 'Instagram', url: 'https://www.instagram.com/trinetrtech/?hl=en', icon: <InstagramIcon /> },
    { name: 'Twitter', url: 'https://x.com/trinetrtech', icon: <TwitterIcon /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/trinetra-tech-827061365/', icon: <LinkedInIcon /> },
  ].map((social, i) => (
    <Button
      key={i}
      variant="contained"
      color="inherit"
      onClick={() => window.open(social.url, '_blank')}
      sx={{
        minWidth: 0,
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:hover': {
          backgroundColor: '#1976d2',
        },
        transition: 'background-color 0.3s ease',
      }}
      aria-label={social.name}
    >
      {social.icon}
    </Button>
  ))}
</Box>

  </Paper>
</Grid>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
