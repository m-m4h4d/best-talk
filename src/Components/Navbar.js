import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Button, Grid, Drawer, List, ListItem, ListItemText, Typography, Paper, ClickAwayListener } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Images/logo.png';
import Tabs from './Tabs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [signupDrawerOpen, setSignupDrawerOpen] = useState(false);
    const signupButtonRef = useRef(null);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleSignupDrawerToggle = () => {
        setSignupDrawerOpen(!signupDrawerOpen);
    };

    const handleClose = () => {
        setSignupDrawerOpen(false);
    };

    const menuItems = [
        { text: 'Courses', onClick: () => alert('clicked') },
        { text: 'About', onClick: () => alert('clicked') },
        { text: 'Contact', onClick: () => alert('clicked') },
        { text: 'Login', component: Link, to: '/login' },
        { text: 'Sign Up', onClick: handleSignupDrawerToggle, variant: 'contained', color: '#2196D4' }
    ];

    return (
        <nav>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-around">
                        <Grid item>
                            <img src={logo} alt='logo' style={{ height: '50px' }} />
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                                {menuItems.map((item, index) => (
                                    <Grid item key={index}>
                                        <Button
                                            onClick={item.onClick}
                                            component={item.component ? item.component : 'button'}
                                            to={item.to}
                                            variant={item.variant ? item.variant : 'text'}
                                            style={{ color: item.variant ? 'white' : 'black', textTransform: 'none', background: item.variant ? item.color : 'none' }}
                                            sx={{ borderRadius: 28 }}
                                            ref={item.text === 'Sign Up' ? signupButtonRef : null}
                                        >
                                            {item.text}
                                        </Button>
                                    </Grid>
                                ))}
                            </Grid>
                            <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
                <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} onClick={item.onClick} component={item.component ? item.component : 'div'} to={item.to}>
                                <ListItemText>
                                    <Typography variant="button" display="block">
                                        {item.text}
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </AppBar>
            {signupDrawerOpen && (
                <ClickAwayListener onClickAway={handleClose}>
                    <Paper
                        elevation={3}
                        sx={{
                            position: 'absolute',
                            top: signupButtonRef.current ? signupButtonRef.current.getBoundingClientRect().bottom + window.scrollY + 10 : '10px',
                            left: signupButtonRef.current ? signupButtonRef.current.getBoundingClientRect().left - 330 : '10px',
                            width: '34rem',
                            height: 'auto',
                            paddingTop: '1rem',
                            borderRadius: '1rem',
                            background: '#E9F4FB',
                            zIndex: 1300,
                        }}
                    >
                        <Tabs size="sm" />
                    </Paper>
                </ClickAwayListener>
            )}
        </nav>
    );
};

export default Navbar;
