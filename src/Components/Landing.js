import * as React from 'react';
import '../App.css';
import Footer from './Footer';
import Tabs from './Tabs';
import Navbar from './Navbar';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import image from '../Images/image.png';
import learn from '../Images/learn.png';
import language from '../Images/language.png';
import programming from '../Images/programming.png';
import math from '../Images/math.png';
import design from '../Images/design.png';
import a from '../Images/1.png';
import b from '../Images/2.png';
import c from '../Images/3.png';
import d from '../Images/4.png';
import { East } from '@mui/icons-material';

function Home() {
    const navigate = useNavigate();

    const handleNavigation = (category) => {
        navigate('/signup', { state: { category } });
    };

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
        <div className='body'>
            <div className="App">
                <Navbar />
                <div className='landing'>
                    <Container style={{ marginTop: '2rem' }}>
                        <Grid container spacing={2} alignItems="center" justifyContent="space-around">
                            <Grid item xs={12} md={6}>
                                <Typography variant="h2">
                                    <span className='pink'>Empower</span> your<br />
                                    learning journey<br />with the
                                    <span className='blue'> best tutors.</span>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our online tutors offer personalized, one-on-one learning to help you improve your grades, build your confidence, and achieve your
                                    academic goals.
                                </Typography>
                                <Button
                                    onClick={() => handleNavigation('Learner')} variant="contained"
                                    sx={{
                                        borderRadius: 28,
                                        background: '#2196D4',
                                        textTransform: 'none'
                                    }}
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
                <Tabs />
                <div className='courses'>
                    <Container className='learning' maxWidth='xl'>
                        <Typography variant="h2" align="center" gutterBottom>
                            <span className='pink'>Learn</span> anything you want
                            <img src={learn} alt="learn" width={'10%'} style={{ marginLeft: "50px" }} />
                        </Typography>
                        <Container maxWidth='lg' style={{ background: "#F7F7F7", paddingBottom: "8vh", marginTop: "10vh", borderRadius: '2%' }}>
                            <Grid container spacing={4}>
                                {courses.map((course, index) => (
                                    <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                                        <Box className='learnBtn' textAlign="center" alignItems="center" justifyContent="center" style={{ overflow: 'hidden' }}>
                                            <Box style={{ background: '#F1F2F6', borderRadius: '12px 12px 0 0' }}>
                                                <img src={course.image} alt={course.label} width={'50%'} />
                                            </Box>
                                            <Typography variant="h6" component="p" style={{ padding: '0.4rem 0' }}><b>{course.label}</b></Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Container>
                    </Container>
                </div>
                <div className='choose'>
                    <Container>
                        <Typography variant="h2" align="center">
                            Why <span className='pink'>choose us</span>?
                        </Typography>
                        <Grid container spacing={6}>
                            {[
                                { img: a, title: "Certified Teachers" },
                                { img: b, title: "Online Courses" },
                                { img: c, title: "Certification" },
                                { img: d, title: "1-to-1 learning" }].map((item, index) => (
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
                <div className='trial'>
                    <Container>
                        <Typography variant="h2" align="center">
                            Get <span className='pink'>Free Trial</span> Lesson
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            A free lesson is guaranteed to every student,
                            independent of the number<br />of lessons he or she would like to receive.
                        </Typography>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button
                                    onClick={() => handleNavigation('Learner')}
                                    variant="contained"
                                    sx={{
                                        borderRadius: 28,
                                        background: '#2196D4',
                                        textTransform: 'none'
                                    }}
                                    endIcon={<East />}>
                                    Sign Up Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
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
                                            sx={{
                                                borderRadius: 28,
                                                background: '#c31575',
                                                textTransform: 'none'
                                            }}
                                            endIcon={<East />}>
                                            Become a Tutor
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
