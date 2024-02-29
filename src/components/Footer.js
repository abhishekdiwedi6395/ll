import React from 'react';
import { Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Instagram, Twitter, GitHub } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '1rem' }}>
      <Container>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Grid container justifyContent="center" alignItems="center" spacing={2}>
              <Grid item>
                <Link href="#" color="inherit">
                  <Facebook />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <Instagram />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <Twitter />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  <GitHub />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container justifyContent="space-around" spacing={2}>
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Link href="#" color="inherit">
                  Flowbite
                </Link>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Link href="#" color="inherit">
                  Flowbite
                </Link>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Link href="#" color="inherit">
                  Flowbite
                </Link>
                <Typography variant="h6" gutterBottom>
                  About
                </Typography>
                <Link href="#" color="inherit">
                  Flowbite
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  Legal
                </Typography>
                <Link href="#" color="inherit">
                  Privacy Policy
                </Link>
                <Typography variant="h6" gutterBottom>
                  Legal
                </Typography>
                <Link href="#" color="inherit">
                  Privacy Policy
                </Link>
                <Typography variant="h6" gutterBottom>
                  Legal
                </Typography>
                <Link href="#" color="inherit">
                  Privacy Policy
                </Link>
                <Typography variant="h6" gutterBottom>
                  Legal
                </Typography>
                <Link href="#" color="inherit">
                  Privacy Policy
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Link href="#" color="inherit">
                  Contact Us
                </Link>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Link href="#" color="inherit">
                  Contact Us
                </Link>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Link href="#" color="inherit">
                  Contact Us
                </Link>
                <Typography variant="h6" gutterBottom>
                  Contact
                </Typography>
                <Link href="#" color="inherit">
                  Contact Us
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
