import React from 'react';
import { Box, Button, Typography } from '@mui/material';

function StepSixth() {
    return (
        <Box sx={{ textAlign: 'center', background: '#F7FAFC', padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                Create a short video to introduce yourself to your students.
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This is a great way to help your students get to know you better. It's also a great way to help your students feel more engaged with your course.
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
                <Box
                    sx={{
                        width: '100%',
                        height: 200,
                        backgroundColor: '#E0F7FA',
                        marginBottom: 2
                    }}
                />
                <Button variant="contained" component="label">
                    Upload Video
                    <input
                        type="file"
                        hidden
                        accept="video/*"
                    />
                </Button>
            </Box>
        </Box>
    );
}

export default StepSixth;
