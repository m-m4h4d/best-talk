import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Divider } from '@mui/material';
import { Navbar, Footer } from './';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
    };

    return (
        <div>
            <Navbar />
            <Box sx={{ backgroundColor: '#f7f7f7', padding: '4rem 0' }}>
                <Container>
                    <Typography variant="h3" align="center" gutterBottom>
                        Contact
                    </Typography>
                    <Divider variant="middle" sx={{ margin: '0 auto', width: '5%', borderBottomWidth: 6, borderColor: '#00bcd4' }} />
                </Container>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '2rem',
                    minHeight: '100vh',
                    textAlign: 'left',
                    margin: '0 20rem'
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Contact Us
                </Typography><br />
                <Divider variant="middle" sx={{ margin: '0 auto', width: '3%', borderBottomWidth: 6, borderColor: '#00bcd4' }} /><br />
                <Typography variant="h5" gutterBottom align="left">
                    Send us a message if you have any questions!
                </Typography><br />
                <Typography variant='h6' gutterBottom>
                    Phone:
                </Typography>
                <Typography variant="body1" gutterBottom>
                    (613) 981-3883
                </Typography>
                <Typography variant='h6' gutterBottom>
                    Email:
                </Typography>
                <Typography variant="body1" align="left" gutterBottom>
                    info@besttalk.ca
                </Typography>
                <Box
                    component="form"
                    align='center'
                    sx={{ mt: 2, width: '100%', maxWidth: '80rem', alignItems: 'center' }}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        margin="normal"
                        align="center"
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, Width: '80rem' }}>
                        Send
                    </Button>
                </Box>
            </Box>
            <Footer />
        </div>
    );
};

export default Contact;
