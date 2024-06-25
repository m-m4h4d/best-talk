import * as React from 'react';
import { Grid, Typography, Fab } from '@mui/material';
import '../App.css';
import { HailRounded, SchoolOutlined, East } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ size = 'md' }) => {
    const navigate = useNavigate();

    const sizeStyles = {
        sm: {
            tab: { width: '28vh', height: '8vh' },
            typography: { fontSize: '0.75rem' },
            div: { padding: '0.3rem 0.5rem' },
            fab: { size: 'small' },
            justify: { justifyContent: 'space-around' }
        },
        md: {
            tab: { width: '58vh', height: '12vh' },
            typography: { fontSize: '1.25rem' },
            div: { padding: '0.6rem 1rem' },
            fab: { size: 'medium' },
            justify: { justifyContent: 'space-around' }
        },
        lg: {
            tab: { width: '70vh', height: '15vh' },
            typography: { fontSize: '1.5rem' },
            div: { padding: '0.8rem 1.5rem' },
            fab: { size: 'large' },
            justify: { justifyContent: 'space-around' }
        }
    };

    const currentStyles = sizeStyles[size];

    const getText = (text) => {
        if (size === 'sm') {
            return text.split(' ')[2];
        }
        return text;
    };

    const handleNavigation = (category) => {
        navigate('/signup', { state: { category } })
    };

    return (
        <Grid container spacing={2}
            justifyContent={currentStyles.justify.justifyContent}
            alignItems='center'>
            <div className='tab'
                style={{
                    width: currentStyles.tab.width,
                    height: currentStyles.tab.height,
                }}>
                <div className='b1' style={currentStyles.div}>
                    <SchoolOutlined />
                </div>
                <Typography variant="h6" component="p" style={currentStyles.typography}>
                    {getText('Become a Learner')}
                </Typography>
                <Fab
                    onClick={() => handleNavigation('Learner')}
                    variant="contained" size={currentStyles.fab.size}
                    sx={{
                        background: '#2196D4',
                        color: '#ffffff',
                        transition: 'ease-in-out 0.3s',
                        '&:hover': { background: '#176ba0' }
                    }}>
                    <East />
                </Fab>
            </div>
            <div className='tab'
                style={{
                    width: currentStyles.tab.width,
                    height: currentStyles.tab.height,
                }}>
                <div className='b2' style={currentStyles.div}>
                    <HailRounded />
                </div>
                <Typography variant="h6" component="p" style={currentStyles.typography}>
                    {getText('Become a Teacher')}
                </Typography>
                <Fab
                    onClick={() => handleNavigation('Teacher')}
                    variant="contained" size={currentStyles.fab.size}
                    sx={{
                        background: '#c31575',
                        color: '#ffffff',
                        transition: 'ease-in-out 0.3s',
                        '&:hover': { background: '#9a115e' }
                    }}>
                    <East />
                </Fab>
            </div>
        </Grid>
    );
};

export default Tabs;
