import * as React from 'react';
import { Box, Button, Typography, LinearProgress } from '@mui/material';
import StepFirst from './Steps/StepFirst';
import StepSecond from './Steps/StepSecond';
import StepThird from './Steps/StepThird';
import StepLast from './Steps/StepLast';

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

function Stepper() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [educationLevel, setEducationLevel] = React.useState('');
    const [graduationYear, setGraduationYear] = React.useState('');
    const [fieldOfStudy, setFieldOfStudy] = React.useState('');
    const [experience, setExperience] = React.useState('');

    const [interests, setInterests] = React.useState([]);
    const [topics, setTopics] = React.useState([]);
    const [specializationsList, setSpecializationsList] = React.useState([]);

    const [areas, setAreas] = React.useState([]);
    const availableAreas = [
        'Foreign Language', 'Graphic Design', 'Web Programming', 'Mathematics', 'Mobile App Development'
    ];

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
                            <StepFirst
                                educationLevel={educationLevel}
                                setEducationLevel={setEducationLevel}
                                graduationYear={graduationYear}
                                setGraduationYear={setGraduationYear}
                                fieldOfStudy={fieldOfStudy}
                                setFieldOfStudy={setFieldOfStudy}
                                experience={experience}
                                setExperience={setExperience}
                            />
                        )}
                        {activeStep === 1 && (
                            <StepSecond
                                interests={interests}
                                setInterests={setInterests}
                                topics={topics}
                                setTopics={setTopics}
                                specializationsList={specializationsList}
                                setSpecializationsList={setSpecializationsList}
                            />
                        )}
                        {activeStep === 2 && (
                            <StepThird
                                areas={areas}
                                setAreas={setAreas}
                                availableAreas={availableAreas}
                            />
                        )}
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
                            <Button onClick={handleNext}>
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
