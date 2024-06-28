import React from 'react';
import { Avatar, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Paper, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import SchoolIcon from '@mui/icons-material/School';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import logo from '../Images/logo.png'; // replace with actual path to your logo

const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Users', icon: <PeopleIcon /> },
    { text: 'Tutors', icon: <SchoolIcon /> },
    { text: 'Courses', icon: <SchoolIcon /> },
    { text: 'Reports', icon: <ReportIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Help', icon: <HelpIcon /> },
];

const recentActivities = [
    { action: 'Updated course', time: '2 days ago', avatar: 'https://i.pravatar.cc/300' },
    { action: "Andrew Ng's Machine Learning", time: '2 days ago', avatar: 'https://i.pravatar.cc/301' },
    { action: 'Created course', time: '2 days ago', avatar: 'https://i.pravatar.cc/302' },
    { action: 'Math for Middle Schoolers', time: '2 days ago', avatar: 'https://i.pravatar.cc/303' },
    { action: 'Updated user', time: '2 days ago', avatar: 'https://i.pravatar.cc/304' },
    { action: 'Jane Smith', time: '2 days ago', avatar: 'https://i.pravatar.cc/305' },
    { action: 'Created user', time: '2 days ago', avatar: 'https://i.pravatar.cc/306' },
    { action: 'John Doe', time: '2 days ago', avatar: 'https://i.pravatar.cc/307' },
    { action: 'Ran report', time: '2 days ago', avatar: 'https://i.pravatar.cc/308' },
    { action: 'Course registrations', time: '2 days ago', avatar: 'https://i.pravatar.cc/309' },
];

const statistics = [
    { label: 'Courses', value: '2,300' },
    { label: 'Users', value: '12,000' },
    { label: 'Sessions', value: '16,000' },
    { label: 'Revenue', value: '$2.3M' },
];

const DashboardAdmin = () => {
    return (
        <Grid container>
            <Grid item xs={2} sx={{ borderRight: '1px solid #e0e0e0' }}>
                <Box sx={{ padding: 2, height: '100vh' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                        <Avatar src={logo} alt="Logo" sx={{ width: 100, height: 100 }} />
                    </Box>
                    <List>
                        {sidebarItems.map((item, index) => (
                            <ListItem button key={index}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={10}>
                <Box sx={{ padding: 3 }}>
                    <Typography variant="h4" gutterBottom>
                        Welcome back, Admin.
                    </Typography>
                    <Paper sx={{ padding: 2, marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            System Health
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography>All systems operational</Typography>
                            <Button variant="contained" endIcon={<CheckCircleOutlineIcon />}>
                                View
                            </Button>
                        </Box>
                    </Paper>
                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Recent Activity
                        </Typography>
                        {recentActivities.map((activity, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                                <Avatar src={activity.avatar} sx={{ marginRight: 2 }} />
                                <Box>
                                    <Typography>{activity.action}</Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {activity.time}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                    <Grid container spacing={2}>
                        {statistics.map((stat, index) => (
                            <Grid item xs={3} key={index}>
                                <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                    <Typography variant="h6">{stat.label}</Typography>
                                    <Typography variant="h4">{stat.value}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
};

export default DashboardAdmin;
