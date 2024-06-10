import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import learn from '../Images/learn.png';
import language from '../Images/language.png';
import programming from '../Images/programming.png';
import math from '../Images/math.png';
import design from '../Images/design.png';

const Learning = () => {
    const courses = [
        { image: language, label: "Foreign Language" },
        { image: programming, label: "Web Programming" },
        { image: programming, label: "Web Programming" },
        { image: math, label: "Maths" },
        { image: design, label: "Graphic Design" },
        { image: math, label: "Maths" },
        { image: design, label: "Graphic Design" },
        { image: math, label: "Maths" },
        { image: language, label: "Foreign Language" },
        { image: programming, label: "Maths" }
    ];

    return (
        <div>
            <Container className='learning' maxWidth='xl'>
                <Typography variant="h2" align="center" gutterBottom>
                    <span className='pink'>Learn</span> anything you want
                    <img src={learn} alt="learn" width={'10%'} style={{ marginLeft: "50px" }} />
                </Typography>
                <Container maxWidth='lg' style={{ background: "#F7F7F7", paddingBottom: "8vh", marginTop: "10vh"}}>
                <Grid container spacing={4}>
                    {courses.map((course, index) => (
                        <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                            <Box className='learnBtn' textAlign="center">
                                <img src={course.image} alt={course.label} width={'50%'} style={{ background: '#F1F2F6', padding: '1vh 8vh', borderRadius: '12px 12px 0 0' }} />
                                <Typography variant="h6" component="p"><b>{course.label}</b></Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
                </Container>
            </Container>
        </div>
    );
};

export default Learning;
