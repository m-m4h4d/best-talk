import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Grid, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../logo.png';
import './navbar.css';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { text: 'Courses', onClick: () => alert('clicked') },
        { text: 'About', onClick: () => alert('clicked') },
        { text: 'Contact', onClick: () => alert('clicked') },
        { text: 'Login', onClick: () => alert('clicked') },
        { text: 'Sign Up', onClick: () => alert('clicked'), variant: 'contained', color: '#2196D4' }
    ];

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Toolbar>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <img src={logo} alt='logo' style={{ height: '50px' }} />
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {menuItems.map((item, index) => (
                                <Grid item key={index}>
                                    <Button
                                        onClick={item.onClick}
                                        variant={item.variant || "text"}
                                        style={{ color: item.variant ? '#fff' : 'black', textTransform: 'none', background: item.variant ? item.color : 'none' }}
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
            </Toolbar>
            <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index} onClick={item.onClick}>
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
    );
};

export default Navbar;
