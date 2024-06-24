import React from 'react';
import i2 from '../Images/i2.png';
import { Grid, Typography, Box, Button, Card, CardContent, CardMedia, CardActions, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import FolderIcon from '@mui/icons-material/Folder';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HelpIcon from '@mui/icons-material/Help';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import IconButton from '@mui/material/IconButton';

const InstructorDashboard = () => {
    const menuItems = [
        { text: 'Home', icon: <HomeIcon /> },
        { text: 'Content folder', icon: <FolderIcon /> },
        { text: 'Schedule', icon: <ScheduleIcon /> },
        { text: 'Profile', icon: <PersonIcon /> },
        { text: 'Earnings', icon: <AttachMoneyIcon /> },
    ];

    const sessions = [
        { name: 'John Doe', date: 'Date and time', image: i2 },
        { name: 'John Doe', date: 'Date and time', image: i2 },
        { name: 'John Doe', date: 'Date and time', image: i2 },
    ];

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <Box sx={{ width: '250px', backgroundColor: '#f9fafb', padding: '20px' }}>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Create Course
                </Button>
                <Button startIcon={<HelpIcon />} sx={{ mt: 2 }}>
                    Help and Docs
                </Button>
            </Box>
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    Welcome back, Sarah
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Upcoming Sessions
                </Typography>
                <Grid container spacing={2}>
                    {sessions.map((session, index) => (
                        <Grid item xs={12} key={index}>
                            <Card sx={{ display: 'flex', alignItems: 'center' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 50, height: 50, borderRadius: '50%', margin: '10px' }}
                                    image={session.image}
                                    alt={session.name}
                                />
                                <Box sx={{ flexGrow: 1 }}>
                                    <CardContent>
                                        <Typography variant="subtitle1">{session.name}</Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {session.date}
                                        </Typography>
                                    </CardContent>
                                </Box>
                                <CardActions>
                                    <IconButton>
                                        <ChatBubbleOutlineIcon />
                                    </IconButton>
                                </CardActions>
                                <Box sx={{ paddingRight: '10px' }}>
                                    <Typography variant="body2" color="text.primary">
                                        1- Hour
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <Button variant="outlined">View all</Button>
                    <Button variant="contained" color="primary">Create course</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default InstructorDashboard;
