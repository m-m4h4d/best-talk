import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Button, Grid, Drawer, List, ListItem, ListItemText, Typography, Paper, ClickAwayListener, Slide } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from '../Images';
import { Tabs } from './';
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
        <nav style={{ background: "radial-gradient(75.49% 265.37% at 24.51% 40.67%, #F6FBFD 0%, #E9F4FB 100%)", paddingTop: '0.4rem' }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Grid container alignItems="center" justifyContent="space-around">
                            <img src={logo} alt='logo' style={{ width: '10%' }} />
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
                    <Slide direction="down" in={signupDrawerOpen} mountOnEnter unmountOnExit>
                        <Paper
                            elevation={3}
                            sx={{
                                position: 'absolute',
                                top: signupButtonRef.current ? signupButtonRef.current.getBoundingClientRect().bottom + window.scrollY + 10 : '10px',
                                left: signupButtonRef.current.getBoundingClientRect().left - 140,
                                width: '24rem',
                                height: '2.5rem',
                                paddingTop: '1.5rem',
                                borderRadius: '1rem',
                                background: '#E9F4FB',
                                zIndex: 1300,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <Tabs size="sm" />
                        </Paper>
                    </Slide>
                </ClickAwayListener>
            )}
        </nav>
    );
};

export default Navbar;
