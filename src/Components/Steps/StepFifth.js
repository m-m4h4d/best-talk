import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function StepFifth() {
    return (
        <Box sx={{ textAlign: 'center', background: '#F7FAFC', padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Upload certifications and accreditations
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px dashed #CCC',
                    padding: 2,
                    borderRadius: 2,
                    background: '#FFF',
                    maxWidth: 600,
                    margin: '0 auto'
                }}
            >
                <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    Get a 'Diploma verified badge'
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: 2 }}>
                    Upload your diploma to increase your credibility! Our team will review your diploma and add a badge to your profile. Your diploma will be deleted after review.
                </Typography>
                <Button
                    variant="contained"
                    component="label"
                    sx={{ marginBottom: 2 }}
                >
                    Upload Document
                    <input
                        type="file"
                        hidden
                        accept="image/jpeg,image/png"
                    />
                </Button>
                <Typography variant="body2">
                    In JPG or PNG format, maximum size 20MB.
                </Typography>
            </Box>
        </Box>
    );
}

export default StepFifth;
