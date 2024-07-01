import React from 'react';
import { Avatar, Box, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Paper, Button } from '@mui/material';
import { GroupOutlined, Dashboard, People, School, Report, Settings, Help, ImportContactsOutlined, East, Today, MonetizationOnOutlined } from '@mui/icons-material';
import { logo } from '../Images';

const sidebarItems = [
    { text: 'Dashboard', icon: <Dashboard /> },
    { text: 'Users', icon: <People /> },
    { text: 'Tutors', icon: <School /> },
    { text: 'Courses', icon: <ImportContactsOutlined /> },
    { text: 'Reports', icon: <Report /> },
    { text: 'Settings', icon: <Settings /> },
    { text: 'Help', icon: <Help /> },
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
    { icon: <ImportContactsOutlined />, label: 'Courses', value: '2,300' },
    { icon: <GroupOutlined />, label: 'Users', value: '12,000' },
    { icon: <Today />, label: 'Sessions', value: '16,000' },
    { icon: <MonetizationOnOutlined />, label: 'Revenue', value: '$2.3M' },
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
                    <Typography variant="h6" gutterBottom><b>System Health</b></Typography>
                    <Paper sx={{ padding: 2, marginBottom: 3 }}>
                        <Typography variant="h7" gutterBottom><b>View System Status</b></Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography>All systems operational</Typography>
                            <Button variant="text" style={{ color: "black" }} endIcon={<East />}><b>View</b></Button>
                        </Box>
                    </Paper>
                    <Box sx={{ marginBottom: 3 }}>
                        <Typography variant="h6" gutterBottom><b>Recent Activity</b></Typography>
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
                    <Typography variant="h6" gutterBottom><b>Statistics</b></Typography>
                    <Grid container spacing={2}>
                        {statistics.map((stat, index) => (
                            <Grid item xs={3} key={index}>
                                <Paper sx={{ padding: 2, textAlign: 'center' }}>
                                    {stat.icon}
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
