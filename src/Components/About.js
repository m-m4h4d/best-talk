import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Divider, Grid, Paper, Button, MobileStepper, useTheme } from '@mui/material';
import { Navbar, Footer } from './';
import { Students } from '../Images';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { a, b, c, d } from '../Images';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'a',
        imgPath: a
    },
    {
        label: 'b',
        imgPath: b
    },
    {
        label: 'c',
        imgPath: c
    },
    {
        label: 'd',
        imgPath: d
    },
];

const About = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const statistics = [
        { label: 'Student Campuses', value: '5' },
        { label: 'Enrolled Students', value: '10K' },
        { label: 'Certified Teachers', value: '45' },
        { label: 'Student Clubs', value: '50+' },
    ];

    const handleNavigation = (category) => {
        navigate('/signup', { state: { category } });
    };

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div>
            <Navbar />
            <Box sx={{ backgroundColor: '#f7f7f7', padding: '4rem 0' }}>
                <Container>
                    <Typography variant="h3" align="center" gutterBottom>
                        About us
                    </Typography>
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} />
                </Container>
            </Box>
            <Box sx={{ padding: '4rem 0' }}>
                <Container>
                    <Typography variant="h4" align="center" gutterBottom>
                        Who We Are
                    </Typography>
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} />
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

                        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                            <AutoPlaySwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={activeStep}
                                onChangeIndex={handleStepChange}
                                enableMouseEvents
                            >
                                {images.map((step, index) => (
                                    <div key={step.label}>
                                        {Math.abs(activeStep - index) <= 2 ? (
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 255,
                                                    display: 'block',
                                                    maxWidth: 400,
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={step.imgPath}
                                                alt={step.label}
                                            />
                                        ) : null}
                                    </div>
                                ))}
                            </AutoPlaySwipeableViews>
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={
                                    <Button
                                        size="small"
                                        onClick={handleNext}
                                        disabled={activeStep === maxSteps - 1}
                                    >
                                        Next
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowLeft />
                                        ) : (
                                            <KeyboardArrowRight />
                                        )}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? (
                                            <KeyboardArrowRight />
                                        ) : (
                                            <KeyboardArrowLeft />
                                        )}
                                        Back
                                    </Button>
                                }
                            />
                        </Box>
                    </Box><br /><br /><br />
                    <Typography variant="h4" align="center" gutterBottom>
                        About Us
                    </Typography><br />
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} /><br />
                    <Typography variant="h5" align="center" gutterBottom>
                        Proin gravida velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor elit.
                    </Typography><br /><br />
                    <Grid container spacing={2}>
                        {statistics.map((stat, index) => (
                            <Grid item xs={3} key={index}>
                                <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                    <Typography variant="h2"><b>{stat.value}</b></Typography>
                                    <Typography variant="h6">{stat.label}</Typography><br />
                                    <Divider variant="middle" sx={{ margin: '0 auto', width: '30%', borderBottomWidth: 6, borderColor: '#A7A7A7' }} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '2rem', alignItems: 'center' }}>
                        <Typography variant="h6" align="center" gutterBottom sx={{ paddingTop: 20 }}>
                            Change Your Life
                        </Typography><br />
                        <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} /><br />
                        <Typography variant="h4" align="center" gutterBottom>
                            Start learning English with us!
                        </Typography><br /><br />
                        <Button onClick={() => handleNavigation('Learner')} variant="contained" align="center">
                            Register
                        </Button>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </div>
    );
};

export default About;
