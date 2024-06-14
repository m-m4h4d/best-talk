import React from 'react';
import { Box, TextField, Typography } from '@mui/material';

const StepFourth = ({ teachingExperience, setTeachingExperience, notableAchievements, setNotableAchievements }) => {
  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Detail your professional teaching experience and notable achievements
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, marginBottom: 2 }}>
        <TextField
          label="Teaching Experience"
          multiline
          rows={4}
          placeholder="Share the details of your teaching experiences"
          value={teachingExperience}
          onChange={(e) => setTeachingExperience(e.target.value)}
          sx={{ width: '100%', maxWidth: 600 }}
        />
        <TextField
          label="Notable Achievements"
          multiline
          rows={4}
          placeholder="Share any notable achievements or recognition you have received"
          value={notableAchievements}
          onChange={(e) => setNotableAchievements(e.target.value)}
          sx={{ width: '100%', maxWidth: 600 }}
        />
      </Box>
    </Box>
  );
};

export default StepFourth;
