import * as React from 'react';
import { Box, Button, Container, TextField, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div style={{ background: '#F7FAFC', paddingBottom: '13rem' }}>
            <Container style={{ padding: '2rem' }} align='center'>
                <Box align='center' width='20rem'>
                    <Typography variant="h4" align='center' textAlign='left'>
                        Log in
                    </Typography>
                    <Typography variant="body1" align='center' textAlign='left'>
                        Don't have an account?&nbsp;
                        <MuiLink component={Link} to='/signup' style={{ textDecoration: 'none', color: 'black' }}>Sign up</MuiLink>
                    </Typography>
                    <form>
                        <TextField required fullWidth margin='normal' id='emailAddress' label='Email Address' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                        <TextField required fullWidth margin='normal' id='password' label='Password' type='password' size='small' style={{ background: '#E8EDF5', color: '#4A789C' }} />
                        <Button type='submit' variant='contained' style={{ borderRadius: '12px', margin: '1rem', background: '#2196D4' }}>Log In</Button>
                    </form>
                    <Typography variant="body2" align='center' textAlign='center' color='#4A789C' style={{ margin: '0.25rem' }}>
                        Forgot Password?
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Login;
