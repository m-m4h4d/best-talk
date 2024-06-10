import React from 'react';
import '../App.css';
import a from '../Images/1.png';
import b from '../Images/2.png';
import c from '../Images/3.png';
import d from '../Images/4.png';
import { Button, Grid, Typography, Container } from '@mui/material';

const Choose = () => {
    return (
        <div className='choose'>
            <Container>
                <Typography variant="h2" align="center">
                    Why <span className='pink'>choose us</span>?
                </Typography>
                <Grid container spacing={6}>
                    {[{ img: a, title: "Certified Teachers" }, { img: b, title: "Online Courses" }, { img: c, title: "Certification" }, { img: d, title: "1-to-1 learning" }].map((item, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <div className='card'>
                                <img src={item.img} alt={`card-${index}`} style={{ borderRadius: '10px 0 0 10px' }} />
                                <span>
                                    <Typography variant="h6" component="p"><b>{item.title}</b></Typography>
                                    <Typography variant="body2">I am text block. Click edit button to change this text. Lorem ipsum dolor</Typography>
                                    <Button
                                        onClick={() => alert('clicked')}
                                        variant="text"
                                        sx={{ textTransform: 'none', textDecoration: 'underline', borderRadius: 28 }}>
                                        Learn More
                                    </Button>
                                </span>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Choose;