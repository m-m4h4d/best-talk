// Step1.js
import React from 'react';
import { Box, Button, Typography, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const educationLevels = ['High School', 'Associate Degree', 'Bachelor\'s Degree', 'Master\'s Degree', 'Doctorate'];
const years = Array.from(new Array(50), (val, index) => (new Date().getFullYear()) - index);
const fieldsOfStudy = ['Science', 'Arts', 'Commerce', 'Engineering', 'Medicine', 'Law'];
const experiences = ['Less than 1 year', '1-3 years', '3-5 years', 'More than 5 years'];

function StepFirst({ educationLevel, setEducationLevel, graduationYear, setGraduationYear, fieldOfStudy, setFieldOfStudy, experience, setExperience }) {
    return (
        <Box sx={{ maxWidth: 400, width: '100%', textAlign: 'left' }}>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Highest Level of Education</InputLabel>
                <Select
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                >
                    {educationLevels.map((level) => (
                        <MenuItem key={level} value={level}>{level}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Year of Graduation</InputLabel>
                <Select
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                >
                    {years.map((year) => (
                        <MenuItem key={year} value={year}>{year}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Field of Study</InputLabel>
                <Select
                    value={fieldOfStudy}
                    onChange={(e) => setFieldOfStudy(e.target.value)}
                >
                    {fieldsOfStudy.map((field) => (
                        <MenuItem key={field} value={field}>{field}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Teaching Experience</InputLabel>
                <Select
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                >
                    {experiences.map((exp) => (
                        <MenuItem key={exp} value={exp}>{exp}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Box sx={{ border: '1px dashed #B0BEC5', padding: 2, textAlign: 'center' }}>
                <Typography sx={{ mb: 1 }}>Get a Verified badge</Typography>
                <Button variant="contained" component="label">
                    Upload Document
                    <input type="file" hidden />
                </Button>
                <Typography variant="body2" sx={{ mt: 1 }}>
                    In JPG or PNG format, maximum size 20MB.
                </Typography>
            </Box>
        </Box>
    );
}

export default StepFirst;
