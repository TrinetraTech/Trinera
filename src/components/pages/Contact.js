import React, { useState } from 'react';
import { TextField, Button, Grid, Box, Typography, Checkbox, FormControlLabel, Container } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <section id="contact" sx={{ py: 4, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" fontWeight="bold" color="textPrimary" gutterBottom>
            Contact
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 600, mx: 'auto' }}>
            Get in touch with our team of experts to discuss your real estate needs.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Left Form Section */}
          <Grid item xs={12} lg={6} sm={8}>
            <Box sx={{ bgcolor: 'neutral.50', p: 4, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h5" fontWeight="bold" color="textPrimary" mb={2}>
                Send Us a Message
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Email Address"
                      variant="outlined"
                      fullWidth
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Phone Number"
                      variant="outlined"
                      fullWidth
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Subject"
                      variant="outlined"
                      fullWidth
                      name="subject"
                      select
                      value={formData.subject}
                      onChange={handleInputChange}
                      SelectProps={{
                        native: true
                      }}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="buying">Buying a Property</option>
                      <option value="selling">Selling a Property</option>
                      <option value="renting">Renting a Property</option>
                      <option value="investing">Property Investment</option>
                      <option value="other">Other Inquiry</option>
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      variant="outlined"
                      fullWidth
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          name="newsletter"
                          color="primary"
                        />
                      }
                      label="Subscribe to our newsletter for market updates and exclusive property listings"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>

          {/* Right Contact Information Section */}
          <Grid item xs={12} lg={6} sm={8}>
            <Box mb={4}>
              <img
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8cmVhbCUyMGVzdGF0ZSUyMG9mZmljZSUyMG1vZGVybiUyMGVsZWdhbnQlMjBwcm9mZXNzaW9uYWx8ZW58MHwwfHx8MTc0Njc5NjQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="LuxEstate office"
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Box>

            <Box sx={{ bgcolor: 'neutral.50', p: 4, borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h5" fontWeight="bold" color="textPrimary" mb={2}>
                Contact Information
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={1}>
                <strong>Address:</strong> 123 Luxury Lane, New York, NY 10001
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={1}>
                <strong>Phone:</strong> (555) 123-4567
              </Typography>
              <Typography variant="body1" color="textSecondary" mb={1}>
                <strong>Email:</strong> info@luxestate.com
              </Typography>
              <Typography variant="body1" color="textSecondary">
                <strong>Office Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 10:00 AM - 4:00 PM
                <br />
                Sunday: Closed
              </Typography>
            </Box>

            <Box mt={4}>
              <Typography variant="h5" fontWeight="bold" color="textPrimary" mb={2}>
                Connect With Us
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <a href="#" style={{ backgroundColor: '#F1F1F1', padding: '10px', borderRadius: '50%' }}>
                  <Facebook style={{ fontSize: '24px', color: '#3b5998' }} />
                </a>
                <a href="#" style={{ backgroundColor: '#F1F1F1', padding: '10px', borderRadius: '50%' }}>
                  <Instagram style={{ fontSize: '24px', color: '#e4405f' }} />
                </a>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Contact;
