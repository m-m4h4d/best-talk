import * as React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Signup() {
    return (
        <div style={{ background: '#F7FAFC' }}>
            <Container style={{ padding: '2rem' }} align='center'>
                <Box align='center' width='20rem'>
                    <Typography variant="h4" align='center' textAlign='left'>
                        Sign up
                    </Typography>
                    <Typography variant="body1" align='center' textAlign='left'>
                        Already have an account? <a href="/login" style={{ textDecoration: 'none', color: 'black' }}>Log in</a>
                    </Typography>
                    <TextField fullWidth margin='normal' id='firstName' label='First Name' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                    <TextField fullWidth margin='normal' id='lastName' label='Last Name' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                    <TextField fullWidth margin='normal' id='emailAddress' label='Email Address' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                    <TextField fullWidth margin='normal' id='password' label='Password' type='password' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                    <TextField fullWidth margin='normal' id='confirmPassword' label='Confirm Password' type='password' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                    <Button component={Link} to="/question" variant='contained' style={{ borderRadius: '12px', margin: '1rem', background: '#2196D4' }}>Continue</Button>
                    <Typography variant="body2" align='center' textAlign='center' color='#4A789C' style={{ margin: '0.25rem' }}>
                        By clicking on continue, you agree to our terms of service and privacy policy
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Signup;
