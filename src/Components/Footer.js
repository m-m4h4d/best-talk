import React from 'react';
import { Facebook, Instagram, GitHub, Telegram, YouTube, Twitter } from '@mui/icons-material';
import logo from '../Images/logo.png';
import { Grid, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#145C82', color: '#ffffff', padding: '2rem' }}>
            <Grid container spacing={6} justifyContent="space-around">
                <Grid item xs={12} md={3}>
                    <Box display="flex" flexDirection="row" alignItems="center" style={{ marginLeft: '1rem' }}>
                        <img src={logo} alt='logo' style={{ marginRight: '1rem', width: '40%' }} />
                        <Typography variant="body1" align="center" textAlign="left">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom align="center">Courses</Typography>
                    <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
                        <li>Course 1</li>
                        <li>Course 2</li>
                        <li>Course 3</li>
                        <li>Course 4</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3} style={{ alignItems: 'center', marginLefteft: '5rem' }}>
                    <Typography variant="h6" gutterBottom align="center" textAlign='left'>Company</Typography>
                    <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Typography variant="h6" gutterBottom align="right">Follow us</Typography>
                    <Box display="flex" justifyContent="flex-end" gap="0.5rem">
                        <Facebook />
                        <Instagram />
                        <GitHub />
                        <Telegram />
                        <YouTube />
                        <Twitter />
                    </Box>
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;
