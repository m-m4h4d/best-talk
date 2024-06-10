import * as React from 'react';
import image from './image.png';
import a from './1.png';
import b from './2.png';
import c from './3.png';
import d from './4.png';
import Navbar from './component/navbar';
import Footer from './component/footer';
import { East } from '@mui/icons-material';
import './App.css';
import { Button, Grid, Typography, Container } from '@mui/material';

function App() {
    return (
        <div className='body'>

            {/* Home Page */}
            <div className="App">

                {/* Landing Page */}
                <div className='landing'>
                    <Navbar />
                    <Container>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={12} md={6}>
                                <Typography variant="h2">
                                    <span className='pink'>Empower</span> your<br />learning journey<br />with the <span className='blue'>best tutors.</span>
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our online tutors offer personalized, one-on-one learning to help<br />you improve your grades, build your confidence, and achieve your<br />academic goals.
                                </Typography>
                                <Button
                                    onClick={() => alert('clicked')}
                                    variant="contained"
                                    sx={{ borderRadius: 28, background: '#2196D4', textTransform: 'none' }}
                                    endIcon={<East />}
                                >
                                    Go with your blue
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img src={image} alt='landing' style={{ width: '100%' }} />
                            </Grid>
                        </Grid>
                    </Container>
                </div>

                {/* Page 2 */}
                <div className='learning'>
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
                        <Grid container spacing={4}>
                            {[{ img: a, title: "Certified Teachers" }, { img: b, title: "Online Courses" }, { img: c, title: "Certification" }, { img: d, title: "1-to-1 learning" }].map((item, index) => (
                                <Grid item xs={12} md={3} key={index}>
                                    <div className='card'>
                                        <img src={item.img} alt={`card-${index}`} style={{ width: '100%' }} />
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
                    <div className='overlay'>
                        <Container>
                            <Grid container alignItems="center" justifyContent="center">
                                <Grid item xs={12}>
                                    <Typography variant="h2" align="center">
                                        Want to <span className='pink'>boost</span> your <span className='blue'>tutoring</span> career?
                                    </Typography>
                                    <Typography variant="body1" align="center" paragraph>
                                        We got you covered! Earn money by sharing your expert knowledge with<br />students. We provide one-stop destination to explore online tutoring<br />vacancies just sitting at your home.
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
                </div>

                {/* Page 7 */}
                <Footer />
            </div>
        </div>
    );
}

export default App;
