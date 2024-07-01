import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { Navbar, Footer } from './';
import { Students } from '../Images';

const About = () => {
    return (
        <div>
            <Navbar />
            <Box sx={{ backgroundColor: '#f7f7f7', padding: '4rem 0' }}>
                <Container>
                    <Typography variant="h3" align="left" gutterBottom>
                        About us
                    </Typography>
                    <Divider variant="inset" sx={{ margin: '0 auto', width: '10%', borderBottomWidth: 6, borderColor: '#00bcd4' }} />
                </Container>
            </Box>

            <Box sx={{ padding: '4rem 0' }}>
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        Who We Are
                    </Typography>
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '10%', borderBottomWidth: 6, borderColor: '#00bcd4' }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                        <Box sx={{ width: '45%' }}>
                            <img src={Students} alt="Students" style={{ width: '100%' }} />
                            <Typography variant="h5">
                                <b>We are an outstanding college proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum.</b>
                            </Typography>
                        </Box>
                        <Box sx={{ width: '45%' }}>
                            <Typography variant="h5" gutterBottom>
                                We Have An International Academic Community
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                            </Typography><br />
                            <Typography variant="h5" gutterBottom>
                                We Teach Over 10,000 Students
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </Typography><br />
                            <Typography variant="h5" gutterBottom>
                                We Are A Modern, Fast-growing College
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ad minim veniam, nostrud exercitation. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
};

export default About;
