import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { CalculateOutlined, DeveloperModeRounded, Draw, ScreenshotMonitor, Translate } from '@mui/icons-material';

const Questionnaire = () => {
    const [selectedGoal, setSelectedGoal] = useState(null);

    const goals = [
        { image: <Translate />, label: "Foreign Language", color: '#C35B101A' },
        { image: <Draw />, label: "Graphic Design", color: '#DDEE191A' },
        { image: <ScreenshotMonitor />, label: "Web Programming", color: '#50EE191A' },
        { image: <CalculateOutlined />, label: "Mathematics", color: '#19EEA11A' },
        { image: <DeveloperModeRounded />, label: "Mobile App Development", color: '#6A19EE1A' }
    ];

    const handleGoalClick = (index) => {
        setSelectedGoal(index);
    };

    return (
        <div style={{ background: '#F7FAFC' }}>
            <Container style={{ padding: '1rem' }} align='center'>
                <Box align='center' width='25rem'>
                    <Typography variant="h5" align='center' textAlign='left'>
                        Tell us your learning goals.
                    </Typography>
                    <Typography variant="body1" align='center' textAlign='left' margin='0.5rem 0'>
                        Choose one or more from categories below:
                    </Typography>
                    <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
                        {goals.map((goal, index) => (
                            <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                                <Box
                                    onClick={() => handleGoalClick(index)}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        padding: '0.5rem 0 0.5rem 0.5rem',
                                        borderRadius: '0.75rem',
                                        background: '#FFFFFF',
                                        cursor: 'pointer',
                                        outline: selectedGoal === index ? '2px solid #2196D4' : 'none'
                                    }}
                                    sx={{
                                        boxShadow: '0px 4px 10px 0px #00000026',
                                        transition: 'ease-in-out 0.3s',
                                        '&:hover': { boxShadow: '0px 4px 10px 0px #00000099' }
                                    }}
                                >
                                    <div style={{ background: goal.color, borderRadius: '0.25rem', padding: '0.5rem', margin: '0 1rem 0 0' }}>
                                        {goal.image}
                                    </div>
                                    <Typography variant="body1" component="p" style={{ padding: '0.4rem 0' }}><b>{goal.label}</b></Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Button variant='contained' style={{ borderRadius: '12px', margin: '2rem 2rem 0 2rem', background: '#2196D4' }}>Continue</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Questionnaire;
