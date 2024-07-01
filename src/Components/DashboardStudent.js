import React from 'react';
import { Box, Typography, Container, Avatar, Button } from '@mui/material';
import { Python, Data } from '../Images';

const lessons = [
    {
        title: "Intro to Python",
        lessons: "2 lessons - 1.5 hours",
        instructor: "Instructor - Date and Time",
        image: Python,
        inProgress: false
    },
    {
        title: "Intro to Data Science",
        lessons: "2 lessons - 3 hours",
        instructor: "Instructor - Date and Time",
        image: Data,
        inProgress: true
    },
];

const DashboardStudent = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
                <Typography variant="h4" component="div">
                    <b>Welcome back, Jane!</b>
                </Typography>
                <Avatar alt="Jane Smith" src="https://i.pravatar.cc/150?img=3" />
            </Box>
            <Typography variant="h6" component="div" sx={{ mt: 1 }}>
                Let's continue learning
            </Typography>
            <Typography variant="h5" component="div" sx={{ mt: 4, mb: 2 }}>
                <b>Upcoming Lessons</b>
            </Typography>
            {lessons.map((lesson, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: "space-around", width: "100%" }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" component="div">
                            {lesson.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                            {lesson.lessons}
                        </Typography>
                        <Button variant="contained" disabled sx={{ mb: 1 }}>
                            {lesson.instructor}
                        </Button>
                        {lesson.inProgress && (
                            <Typography variant="body2" color="primary">
                                In Progress
                            </Typography>
                        )}
                    </Box>
                    <Box sx={{ flex: 1, ml: 30 }}>
                        <img src={lesson.image} alt={lesson.title} style={{ width: '100%', height: 'auto' }} />
                    </Box>
                </Box>
            ))}
        </Container>
    );
};

export default DashboardStudent;
