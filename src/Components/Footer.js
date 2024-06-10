import React from 'react';
import { Facebook, Instagram, GitHub, Telegram, YouTube, Twitter } from '@mui/icons-material';
import logo from '../Images/logo.png';
import { Grid, Typography, Box } from '@mui/material';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <Box sx={{ padding: '2rem 0' }}>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={3} className='left'>
                        <img src={logo} alt='logo' style={{ height: '50px' }} />
                        <Typography variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} className='mid-left'>
                        <Typography variant="h6" gutterBottom>Courses</Typography>
                        <ul>
                            <li>Course 1</li>
                            <li>Course 2</li>
                            <li>Course 3</li>
                            <li>Course 4</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} className='mid-right'>
                        <Typography variant="h6" gutterBottom>Company</Typography>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3} className='right'>
                        <Typography variant="h6" gutterBottom>Follow us</Typography>
                        <Box sx={{ display: 'flex', gap: '0.5rem' }}>
                            <Facebook />
                            <Instagram />
                            <GitHub />
                            <Telegram />
                            <YouTube />
                            <Twitter />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </footer>
    );
};

export default Footer;
