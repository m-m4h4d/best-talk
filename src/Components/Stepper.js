import React, { useState } from 'react';
import { Box, Button, Typography, LinearProgress } from '@mui/material';
import StepFirst from './Steps/StepFirst';
import StepSecond from './Steps/StepSecond';
import StepThird from './Steps/StepThird';
import StepFourth from './Steps/StepFourth';
import StepFifth from './Steps/StepFifth';
import StepSixth from './Steps/StepSixth';
import StepFinal from './Steps/StepFinal';
import StepLast from './Steps/StepLast';
import { useLocation } from 'react-router-dom';

const steps = [
    'Profile Setup',
    'What do you teach?',
    'Areas of expertise',
    'Teaching experience',
    'Certifications',
    'Introduction',
    'Availability',
    'Your profile is submitted for approval.'
];

const availableAreas = [
    'Foreign Language', 'Graphic Design', 'Web Programming', 'Mathematics', 'Mobile App Development'
];

function Stepper() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const [updatedData, setUpdatedData] = useState({
        educationLevel: '',
        graduationYear: '',
        fieldOfStudy: '',
        experience: '',
        areas: [],
        interests: [],
        topics: [],
        specializationsList: [],
        teachingExperience: '',
        notableAchievements: '',
        filePath: ''
    });

    const location = useLocation();
    const userData = location.state?.userData || {};

    const isStepOptional = (step) => step === 4;

    const isStepSkipped = (step) => skipped.has(step);

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleSubmit = () => {
        const combinedData = {
            ...userData,
            ...updatedData,
            areas: updatedData.areas.join(', '),
            interests: updatedData.interests.join(', '),
            topics: updatedData.topics.join(', '),
            specializationsList: updatedData.specializationsList.join(', ')
        };

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        console.log('Combined Data:', JSON.stringify(combinedData, null, 2));
    };

    const progress = (activeStep / (steps.length - 1)) * 100;

    return (
        <div style={{ height: '100vh', background: '#F7FAFC', maxWidth: '100rem' }}>
            <Box sx={{ textAlign: 'center', background: '#F7FAFC', padding: 2 }}>
                {activeStep < steps.length - 1 && (
                    <>
                        <Typography variant="h6" sx={{ marginBottom: 1 }}>
                            {steps[activeStep]}
                        </Typography>
                        <Typography variant="body2" sx={{ marginBottom: 2 }}>
                            {`${Math.round(progress)}% completed`}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
                            <LinearProgress variant="determinate" value={progress} sx={{ height: 10, width: '100%', maxWidth: 1000, borderRadius: 5 }} />
                        </Box>
                    </>
                )}
                {activeStep === (steps.length - 1) ? (
                    <StepLast />
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }}>
                        {activeStep === 0 && (
                            <StepFirst updatedData={updatedData} setUpdatedData={setUpdatedData} />
                        )}
                        {activeStep === 1 && (
                            <StepSecond
                                interests={updatedData.interests}
                                setInterests={(interests) => setUpdatedData({ ...updatedData, interests })}
                                topics={updatedData.topics}
                                setTopics={(topics) => setUpdatedData({ ...updatedData, topics })}
                                specializationsList={updatedData.specializationsList}
                                setSpecializationsList={(specializationsList) => setUpdatedData({ ...updatedData, specializationsList })}
                            />
                        )}
                        {activeStep === 2 && (
                            <StepThird
                                areas={updatedData.areas}
                                setAreas={(areas) => setUpdatedData({ ...updatedData, areas })}
                                availableAreas={availableAreas}
                            />
                        )}
                        {activeStep === 3 && (
                            <StepFourth
                                teachingExperience={updatedData.teachingExperience}
                                setTeachingExperience={(teachingExperience) => setUpdatedData({ ...updatedData, teachingExperience })}
                                notableAchievements={updatedData.notableAchievements}
                                setNotableAchievements={(notableAchievements) => setUpdatedData({ ...updatedData, notableAchievements })}
                            />
                        )}
                        {activeStep === 4 && <StepFifth />}
                        {activeStep === 5 && <StepSixth />}
                        {activeStep === 6 && <StepFinal />}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: 400, mt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                            >
                                Back
                            </Button>
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={activeStep === steps.length - 2 ? handleSubmit : handleNext}>
                                {activeStep === steps.length - 2 ? 'Submit' : 'Next'}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
}

export default Stepper;
