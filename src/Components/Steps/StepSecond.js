import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const teachingInterests = [
    'Software Development', 'Data Science', 'Product Management', 'Design', 'Marketing',
    'Business', 'Health & Fitness', 'Music', 'Photography', 'Crafts & DIY', 'Writing', 'Cooking'
];

const preferredTopics = [
    'Python', 'JavaScript', 'React', 'Node.js', 'Django',
    'Vue.js', 'Flutter', 'Angular', 'TypeScript'
];

const specializations = [
    'Data Visualization', 'Web Development', 'Machine Learning', 'Mobile App Development',
    'Game Development', 'UI/UX Design', 'APIs', 'Algorithms', 'Cybersecurity'
];

const StepSecond = ({ interests, setInterests, topics, setTopics, specializationsList, setSpecializationsList }) => {
    const handleSelect = (list, setList, item) => {
        setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 800 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                What do you teach?
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 3 }}>
                Select up to 5 teaching interests. These will help us recommend relevant topics and specializations to you.
            </Typography>
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                Teaching interests
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 3 }}>
                {teachingInterests.map(interest => (
                    <Chip
                        key={interest}
                        label={interest}
                        onClick={() => handleSelect(interests, setInterests, interest)}
                        color={interests.includes(interest) ? 'primary' : 'default'}
                    />
                ))}
            </Box>
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                Preferred topics
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 3 }}>
                {preferredTopics.map(topic => (
                    <Chip
                        key={topic}
                        label={topic}
                        onClick={() => handleSelect(topics, setTopics, topic)}
                        color={topics.includes(topic) ? 'primary' : 'default'}
                    />
                ))}
            </Box>
            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                Specializations
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, marginBottom: 3 }}>
                {specializations.map(spec => (
                    <Chip
                        key={spec}
                        label={spec}
                        onClick={() => handleSelect(specializationsList, setSpecializationsList, spec)}
                        color={specializationsList.includes(spec) ? 'primary' : 'default'}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default StepSecond;
