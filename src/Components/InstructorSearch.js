import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Grid, Typography, ToggleButton, ToggleButtonGroup, IconButton } from '@mui/material';
import { Star, StarBorder, PlayArrow } from '@mui/icons-material';
import instructorImage from '../Images/instructor.png';

const countries = ['Turkey', 'America', 'England', 'France', 'Germany', 'Canada', 'Italy', 'Spain'];
const languages = ['Turkish', 'English', 'German', 'French'];
const expertiseAreas = ['Everyday English', 'Business English', 'IELTS', 'Beginner', 'English for Kids', 'TOEFL'];
const availableHours = ['09:00-12:00', '12:00-15:00', '15:00-18:00', '18:00-21:00', '21:00-00:00', '00:00-03:00', '03:00-06:00', '06:00-09:00'];
const availableDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const InstructorSearch = () => {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [nativeLanguage, setNativeLanguage] = useState(false);
    const [superTeacher, setSuperTeacher] = useState(false);
    const [selectedHours, setSelectedHours] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);
    const [selectedExpertise, setSelectedExpertise] = useState([]);

    const handleToggle = (setter) => (event, newValues) => setter(newValues);

    const instructors = Array(5).fill({
        image: instructorImage,
        name: 'Eve, Age 35, Female',
        description: 'Eve is an experienced English teacher with a passion for helping students improve their language skills. She has a friendly and patient teaching style and is dedicated to making the learning process enjoyable and effective. In her free time, she enjoys reading, hiking, and trying new foods.',
        rating: 4,
        isNew: true,
        isSuperTeacher: true
    });

    return (
        <Grid container spacing={2}>
            {/* Filter Section */}
            <Grid item xs={3}>
                <Box p={2} bgcolor="white" borderRadius={2} boxShadow={1}>
                    <Typography variant="h6">Filters</Typography>

                    <Typography variant="body1" mt={2}>Teacher's Country</Typography>
                    <ToggleButtonGroup
                        value={selectedCountries}
                        onChange={handleToggle(setSelectedCountries)}
                        size="small"
                        color="primary"
                        fullWidth
                        multiple
                        sx={{ flexWrap: 'wrap' }}
                    >
                        {countries.map((country) => (
                            <ToggleButton key={country} value={country}>
                                {country}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <Typography variant="body1" mt={2}>Languages Spoken</Typography>
                    <ToggleButtonGroup
                        value={selectedLanguages}
                        onChange={handleToggle(setSelectedLanguages)}
                        size="small"
                        color="primary"
                        fullWidth
                        multiple
                        sx={{ flexWrap: 'wrap' }}
                    >
                        {languages.map((language) => (
                            <ToggleButton key={language} value={language}>
                                {language}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={nativeLanguage}
                                onChange={(e) => setNativeLanguage(e.target.checked)}
                            />
                        }
                        label="View native-language instructors only"
                        sx={{ mt: 2 }}
                    />

                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={superTeacher}
                                onChange={(e) => setSuperTeacher(e.target.checked)}
                            />
                        }
                        label="Highly rated and reliable instructors view"
                        sx={{ mt: 2 }}
                    />

                    <Typography variant="body1" mt={2}>Available Hours</Typography>
                    <ToggleButtonGroup
                        value={selectedHours}
                        onChange={handleToggle(setSelectedHours)}
                        size="small"
                        color="primary"
                        fullWidth
                        multiple
                        sx={{ flexWrap: 'wrap' }}
                    >
                        {availableHours.map((hour) => (
                            <ToggleButton key={hour} value={hour}>
                                {hour}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <Typography variant="body1" mt={2}>Available Days</Typography>
                    <ToggleButtonGroup
                        value={selectedDays}
                        onChange={handleToggle(setSelectedDays)}
                        size="small"
                        color="primary"
                        fullWidth
                        multiple
                        sx={{ flexWrap: 'wrap' }}
                    >
                        {availableDays.map((day) => (
                            <ToggleButton key={day} value={day}>
                                {day}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <Typography variant="body1" mt={2}>Areas of Expertise</Typography>
                    <ToggleButtonGroup
                        value={selectedExpertise}
                        onChange={handleToggle(setSelectedExpertise)}
                        size="small"
                        color="primary"
                        fullWidth
                        multiple
                        sx={{ flexWrap: 'wrap' }}
                    >
                        {expertiseAreas.map((area) => (
                            <ToggleButton key={area} value={area}>
                                {area}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        Filter
                    </Button>
                </Box>
            </Grid>

            {/* Instructors Section */}
            <Grid item xs={9}>
                <Box p={2}>
                    <Typography variant="h6">Find an Instructor</Typography>
                    <Button variant="outlined" color="primary" sx={{ mb: 2 }}>
                        View all
                    </Button>
                    {instructors.map((instructor, index) => (
                        <Box key={index} mb={2} p={2} bgcolor="white" borderRadius={2} boxShadow={1} display="flex" justifyContent="space-around" >
                            <Box display="flex">
                                <img src={instructor.image} alt="Instructor" style={{ width: 100, height: 100, borderRadius: '5%' }} />
                            </Box>
                            <Box>
                                <Typography variant="h6">{instructor.name}</Typography>
                                <Box display="flex" alignItems="center">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <IconButton key={i} sx={{ color: i < instructor.rating ? 'gold' : 'gray' }}>
                                            {i < instructor.rating ? <Star /> : <StarBorder />}
                                        </IconButton>
                                    ))}
                                </Box>
                                {instructor.isNew && (
                                    <Typography variant="body2" color="primary" component="span" mr={1}>
                                        New
                                    </Typography>
                                )}
                                {instructor.isSuperTeacher && (
                                    <Typography variant="body2" color="secondary" component="span" mr={1}>
                                        Super Teacher
                                    </Typography>
                                )}
                                <Typography variant="body2">{instructor.description}</Typography>
                            </Box>
                            <IconButton color="primary" size="large">
                                <PlayArrow />
                            </IconButton>
                        </Box>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
};

export default InstructorSearch;
