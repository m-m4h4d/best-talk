import * as React from 'react';
import { Box, Button, Container, TextField, Typography, Link as MuiLink } from '@mui/material';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Signup() {
    const [values, setValues] = React.useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.state?.category || 'NULL';

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#^@$!%*?&.,])[A-Za-z\d#^@$!%*?&.,]+$/;
        const passwordLength = /^.{8,}$/;

        if (!passwordLength.test(values.password)) {
            alert("Password must be at least 8 characters long.");
            return;
        }

        if (!passwordRegex.test(values.password)) {
            alert("Password must contain at least one uppercase, one lowercase, one number, and one special character.");
            return;
        }

        if (values.password !== values.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const { confirmPassword, ...data } = values;
        const userData = {category, ...data};

        if (category === 'Learner') {
            navigate('/question', { state: { userData } });
        } else {
            return;
        }
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
                        <MuiLink component={Link} to='/login'
                            style={{ textDecoration: 'none', color: 'black' }}>
                            Log in
                        </MuiLink>
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='firstName'
                            label='First Name'
                            size='small'
                            value={values.firstName}
                            onChange={handleChange('firstName')}
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='lastName'
                            label='Last Name'
                            size='small'
                            value={values.lastName}
                            onChange={handleChange('lastName')}
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <TextField
                            required
                            fullWidth
                            margin='normal'
                            id='email'
                            label='Email Address'
                            type='email'
                            size='small'
                            value={values.email}
                            onChange={handleChange('email')}
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
                            value={values.password}
                            onChange={handleChange('password')}
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
                            value={values.confirmPassword}
                            onChange={handleChange('confirmPassword')}
                            style={{ background: '#E8EDF5', color: '#4A789C' }}
                        />
                        <Button
                            type='submit'
                            variant='contained'
                            style={{
                                borderRadius: '12px',
                                margin: '1rem',
                                background: '#2196D4'
                            }}>
                            Continue
                        </Button>
                    </form>
                    <Typography
                        variant="body2"
                        align='center'
                        textAlign='center'
                        color='#4A789C'
                        style={{ margin: '0.25rem' }}>
                        By clicking on continue,
                        you agree to our terms of service and privacy policy
                    </Typography>
                </Box>
            </Container>
        </div>
    );
}

export default Signup;
