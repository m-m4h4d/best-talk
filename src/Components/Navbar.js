import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Grid, Drawer, List, ListItem, ListItemText, Typography, Popover, Link as MuiLink, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { logo } from '../Images';
import { Tabs } from './';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [signupAnchorEl, setSignupAnchorEl] = useState(null);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleSignupToggle = (event) => {
        setSignupAnchorEl(signupAnchorEl ? null : event.currentTarget);
    };

    const handleSignupClose = () => {
        setSignupAnchorEl(null);
    };

    const signupOpen = Boolean(signupAnchorEl);

    const menuItems = [
        { text: 'Courses', onClick: () => alert('clicked') },
        { text: 'About', component: Link, to: '/about' },
        { text: 'Contact', component: Link, to: '/contact' },
        { text: 'Login', component: Link, to: '/login' },
        { text: 'Sign Up', onClick: handleSignupToggle, variant: 'contained', color: '#2196D4' }
    ];

    return (
        <nav style={{ background: "radial-gradient(75.49% 265.37% at 24.51% 40.67%, #F6FBFD 0%, #E9F4FB 100%)", paddingTop: '0.4rem' }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Container maxWidth="lg">
                        <Grid container alignItems="center" justifyContent="space-between">
                            <MuiLink component={Link} to='/'>
                                <img src={logo} alt='logo' style={{ height: '120px' }} />
                            </MuiLink>
                            <Grid>
                                <Grid container spacing={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }} size={{ xs: true, md: true }}>
                                    {menuItems.map((item, index) => (
                                        <Grid key={index}>
                                            <Button
                                                onClick={item.onClick}
                                                component={item.component ? item.component : 'button'}
                                                to={item.to}
                                                variant={item.variant ? item.variant : 'text'}
                                                style={{ color: item.variant ? 'white' : 'black', textTransform: 'none', background: item.variant ? item.color : 'none' }}
                                                sx={{ borderRadius: 28 }}
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
                    </Container>
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
            <Popover
                open={signupOpen}
                anchorEl={signupAnchorEl}
                onClose={handleSignupClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    sx: {
                        mt: 1,
                        width: { xs: '90vw', sm: '24rem' },
                        maxWidth: '24rem',
                        p: { xs: 1, sm: 2 },
                        borderRadius: '1rem',
                        background: '#E9F4FB',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflowX: 'hidden'
                    }
                }}
            >
                <Tabs size="sm" />
            </Popover>
        </nav>
    );
};

export default Navbar;
