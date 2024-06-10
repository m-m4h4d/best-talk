import * as React from 'react';
import a from './Images/1.png';
import b from './Images/2.png';
import c from './Images/3.png';
import d from './Images/4.png';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Tabs from './Components/Tabs';
import { East } from '@mui/icons-material';
import './App.css';
import { Button, Grid, Typography, Container } from '@mui/material';

function App() {
    return (
        <div className='body'>

            {/* Home Page */}
            <div className="App">

                {/* Landing Page */}
                <Landing />

                {/* Page 2 */}
                <div className='learning'>
                    <Tabs />
                    <Container>
                        <Typography variant="h2" align="center">
                            <span className='pink'>Learn</span> anything you want
                        </Typography>
                    </Container>
                </div>

                {/* Page 3 */}
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
                                                sx={{ textTransform: 'none', textDecoration: 'underline', borderRadius: 28 }}
                                            >
                                                Learn More
                                            </Button>
                                        </span>
                                    </div>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>

                {/* Page 5 */}
                <div className='trial'>
                    <Container>
                        <Typography variant="h2" align="center">
                            Get <span className='pink'>Free Trial</span> Lesson
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            A free lesson is guaranteed to every student, independent of the number<br />of lessons he or she would like to receive.
                        </Typography>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Button
                                    onClick={() => alert('clicked')}
                                    variant="contained"
                                    sx={{ borderRadius: 28, background: '#2196D4', textTransform: 'none' }}
                                    endIcon={<East />}
                                >
                                    Sign Up Now
                                </Button>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                {/* Page 4 */}
                <div className='boost'>
                    <Container className='overlay' background="#ffffff">
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography variant="h2" align="center">
                                    Want to <span className='pink'>boost</span> your <span className='blue'>tutoring</span> career?
                                </Typography>
                                <Typography variant="body1" align="center" paragraph>
                                    We got you covered! Earn money by sharing your expert knowledge with students. We provide one-stop destination to explore online tutoring vacancies just sitting at your home.
                                </Typography>
                                <Grid container justifyContent="center">
                                    <Grid item>
                                        <Button
                                            onClick={() => alert('clicked')}
                                            variant="contained"
                                            sx={{ borderRadius: 28, background: '#c31575', textTransform: 'none' }}
                                            endIcon={<East />}>
                                            Become a Tutor
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                {/* Page 7 */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
