import * as React from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

function Login() {
    return (
        <div style={{ background: '#F7FAFC', paddingBottom: '13rem' }}>
            <Container style={{ padding: '2rem' }} align='center'>
                <Box align='center' width='20rem'>
                    <Typography variant="h4" align='center' textAlign='left'>
                        Log in
                    </Typography>
                    <Typography variant="body1" align='center' textAlign='left'>
                        Don't have an account? <a href="/login" style={{ textDecoration: 'none', color: 'black' }}>Sign up</a>
                    </Typography>
                    <TextField fullWidth margin='normal' id='emailAddress' label='Email Address' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                    <TextField fullWidth margin='normal' id='password' label='Password' type='password' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                    <Button variant='contained' style={{ borderRadius: '12px', margin: '1rem' }}>Log In</Button>
                    <Typography variant="body2" align='center' textAlign='center' color='#4A789C' style={{ margin: '0.25rem' }}>
                        Forgot Password?
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Login;
