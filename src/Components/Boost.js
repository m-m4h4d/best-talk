import * as React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { East } from '@mui/icons-material';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Boost = () => {
    const navigate = useNavigate();

    const handleNavigation = (category) => {
        navigate('/signup', { state: { category } });
    };

    return (
        <div className='boost'>
            <Container className='overlay' background="#ffffff">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center">
                            Want to <span className='pink'>boost</span> your 
                            <span className='blue'> tutoring</span> career?
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            We got you covered! Earn money by sharing your expert knowledge 
                            with students. We provide one-stop destination to explore online 
                            tutoring vacancies just sitting at your home.
                        </Typography>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button
                                    onClick={() => handleNavigation('Teacher')}
                                    variant="contained"
                                    sx={{ borderRadius: 28,
                                        background: '#c31575', 
                                        textTransform: 'none' }}
                                    endIcon={<East />}>
                                    Become a Tutor
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Boost;
