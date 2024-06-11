import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

const Questionnaire = () => {
    return (
        <div style={{ background: '#F7FAFC' }}>
            <Container style={{ padding: '2rem' }} align='center'>
                <Box align='center' width='20rem'>
                    <Typography variant="h5" align='center' textAlign='left'>
                        Tell us your learning goals.
                    </Typography>
                    <Typography variant="body1" align='center' textAlign='left'>
                        Choose one or more from categories below:
                    </Typography>
                    <Button variant='contained' style={{ borderRadius: '12px', margin: '1rem' }}>Continue</Button>
                </Box>
            </Container>
        </div>
    );
};

export default Questionnaire;