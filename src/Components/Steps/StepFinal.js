import React, { useState } from 'react';
import { Box, Typography, Checkbox, TextField } from '@mui/material';

function StepFinal() {
    const [availability, setAvailability] = useState({
        Monday: { checked: false, startTime: '', endTime: '' },
        Tuesday: { checked: false, startTime: '', endTime: '' },
        Wednesday: { checked: false, startTime: '', endTime: '' },
        Thursday: { checked: false, startTime: '', endTime: '' },
        Friday: { checked: false, startTime: '', endTime: '' },
        Saturday: { checked: false, startTime: '', endTime: '' },
        Sunday: { checked: false, startTime: '', endTime: '' },
    });

    const handleCheckboxChange = (day) => {
        setAvailability({
            ...availability,
            [day]: { ...availability[day], checked: !availability[day].checked },
        });
    };

    const handleTimeChange = (day, type, value) => {
        setAvailability({
            ...availability,
            [day]: { ...availability[day], [type]: value },
        });
    };

    return (
        <Box sx={{ textAlign: 'center', background: '#F7FAFC', padding: 2 }}>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                When are you available to teach?
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
                This will be used to display your availability to students. You can update this later.
            </Typography>
            {Object.keys(availability).map((day) => (
                <Box
                    key={day}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        marginBottom: 2,
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 1 }}>
                        <Checkbox
                            checked={availability[day].checked}
                            onChange={() => handleCheckboxChange(day)}
                        />
                        <Typography sx={{ marginRight: 2 }}>{day}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                            type="time"
                            disabled={!availability[day].checked}
                            value={availability[day].startTime}
                            onChange={(e) => handleTimeChange(day, 'startTime', e.target.value)}
                            sx={{ marginRight: 2 }}
                        />
                        <Typography sx={{ marginLeft: 2, marginRight: 2 }}>Start Time</Typography>
                        <TextField
                            type="time"
                            disabled={!availability[day].checked}
                            value={availability[day].endTime}
                            onChange={(e) => handleTimeChange(day, 'endTime', e.target.value)}
                        />
                        <Typography sx={{ marginLeft: 2, marginRight: 2 }}>End Time</Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
}

export default StepFinal;
