import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import './Tabs.css';
import { ArrowForward, HailRounded, SchoolOutlined } from '@mui/icons-material';

const Tabs = () => {
    return (
        <Grid container spacing={6} item xs={12} md={6} justifyContent={'space-around'} alignItems={'center'}>
            <div className='tab'>
                <div className='b1'>
                    <SchoolOutlined />
                </div>
                <Typography variant="h6" component="p">Become a Learner</Typography>
                <Button
                    onClick={() => alert('clicked')}
                    variant="contained"
                    sx={{ borderRadius: 48, background: '#2196D4', textTransform: 'none' }}><ArrowForward /></Button>
            </div>
            <div className='tab'>
                <div className='b2'>
                    <HailRounded />
                </div>
                <Typography variant="h6" component="p">Become a Teacher</Typography>
                <Button
                    onClick={() => alert('clicked')}
                    variant="contained"
                    sx={{ borderRadius: 100, background: '#c31575', textTransform: 'none' }}><ArrowForward /></Button>
            </div>
        </Grid>
    );
};

export default Tabs;