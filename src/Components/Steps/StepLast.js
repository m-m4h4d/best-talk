import React from 'react';
import { Box, Typography } from '@mui/material';

const StepLast = () => {
    return (
        <Box sx={{ textAlign: 'center', marginTop: '20%', maxWidth: '100vw' }}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
                Your profile is submitted for approval.
            </Typography>
            <Typography variant="body1">
                We'll get back to you in 24-48 working hours.
            </Typography>
        </Box>
    );
};

export default StepLast;
