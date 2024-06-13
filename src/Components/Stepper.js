import * as React from 'react';
import { Box, Button, Typography, LinearProgress } from '@mui/material';

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
        <div style={{ height: '100vh', background: '#F7FAFC' }}>
            <Box sx={{ width: '100%', textAlign: 'center', background: '#F7FAFC' }}>
                <LinearProgress variant="determinate" value={progress} sx={{ marginBottom: 2 }} />
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    {steps[activeStep]}
                </Typography>
                {activeStep === (steps.length - 1) ? (
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        We'll get back to you in 24-48 working hours.
                    </Typography>
                ) : (
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: 400 }}>
                            {activeStep < steps.length - 1 && (
                                <>
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
                                </>
                            )}
                        </Box>
                    </Box>
                )}
                <Typography sx={{ mt: 1 }}>{`${Math.round(progress)}% completed`}</Typography>
            </Box>
        </div>
    );
}

export default Stepper;
