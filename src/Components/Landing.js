import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { East } from '@mui/icons-material';
import Navbar from './Navbar';
import image from '../Images/image.png';
import '../App.css';

const Landing = () => {
    return (
        <div className='landing'>
            <Navbar />
            <Container>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">
                            <span className='pink'>Empower</span> your<br />learning journey<br />with the <span className='blue'>best tutors.</span>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Our online tutors offer personalized, one-on-one learning to help you improve your grades, build your confidence, and achieve your academic goals.
                        </Typography>
                        <Button
                            onClick={() => alert('clicked')}
                            variant="contained"
                            sx={{ borderRadius: 28, background: '#2196D4', textTransform: 'none' }}
                            endIcon={<East />}>
                            Go with your tutor
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={image} alt='landing' style={{ width: '100%', borderRadius: '30px' }} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Landing;