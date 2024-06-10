import React from 'react';
import "../App.css";
import { Button, Container, Grid, Typography } from '@mui/material';
import { East } from '@mui/icons-material';

const Trial = () => {
    return (
        <div className='trial'>
            <Container>
                <Typography variant="h2" align="center">
                    Get <span className='pink'>Free Trial</span> Lesson
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    A free lesson is guaranteed to every student, independent of the number<br />of lessons he or she would like to receive.
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Button
                            onClick={() => alert('clicked')}
                            variant="contained"
                            sx={{ borderRadius: 28, background: '#2196D4', textTransform: 'none' }}
                            endIcon={<East />}
                        >
                            Sign Up Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Trial;