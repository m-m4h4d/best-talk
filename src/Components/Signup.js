import * as React from 'react';
import { Box, Button, Container, TextField, Typography, Link as MuiLink } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        password: '',
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/question');
    };

    return (
        <div style={{ background: '#F7FAFC' }}>
            <Container style={{ padding: '2rem' }} align='center'>
                <Box align='center' width='20rem'>
                    <Typography variant="h4" align='center' textAlign='left'>
                        Sign up
                    </Typography>
                    <Typography variant="body1" align='center' textAlign='left'>
                        Already have an account?&nbsp;
                        <MuiLink component={Link} to='/login' style={{ textDecoration: 'none', color: 'black' }}>Log in</MuiLink>
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='firstName'
                            label='First Name'
                            size='small'
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='lastName'
                            label='Last Name'
                            size='small'
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='emailAddress'
                            label='Email Address'
                            type='email'
                            size='small'
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='password'
                            label='Password'
                            type='password'
                            size='small'
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='confirmPassword'
                            label='Confirm Password'
                            type='password'
                            size='small'
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            style={{ borderRadius: '12px', margin: '1rem', background: '#2196D4' }}>
                            Continue
                        </Button>
                    </form>
                    <Typography variant="body2" align='center' textAlign='center' color='#4A789C' style={{ margin: '0.25rem' }}>
                        By clicking on continue, you agree to our terms of service and privacy policy
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Signup;
