import React from 'react';
import { Box, Button, MenuItem, Select, Typography } from '@mui/material';

const StepThird = ({ areas, setAreas, availableAreas }) => {
  const handleAddArea = () => {
    if (areas.length < 5) {
      setAreas([...areas, '']);
    }
  };

  const handleRemoveArea = (index) => {
    const newAreas = areas.filter((_, i) => i !== index);
    setAreas(newAreas);
  };

  const handleAreaChange = (index, value) => {
    const newAreas = areas.map((area, i) => (i === index ? value : area));
    setAreas(newAreas);
  };

  return (
    <Box sx={{ textAlign: 'center', padding: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        What are your areas of expertise?
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        You can add up to 5 areas. These will help students find you in the search results.
      </Typography>
      {areas.map((area, index) => (
        <Box key={index} sx={{ marginBottom: 2, display: 'flex', justifyContent: 'center' }}>
          <Select
            value={area}
            onChange={(e) => handleAreaChange(index, e.target.value)}
            displayEmpty
            sx={{ width: '200px' }}
          >
            <MenuItem value="" disabled>
              Select area
            </MenuItem>
            {availableAreas.map((availableArea) => (
              <MenuItem key={availableArea} value={availableArea}>
                {availableArea}
              </MenuItem>
            ))}
          </Select>
          <Button onClick={() => handleRemoveArea(index)} sx={{ ml: 1 }}>
            Remove
          </Button>
        </Box>
      ))}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button onClick={handleAddArea} disabled={areas.length >= 5}>
          Add another area
        </Button>
      </Box>
    </Box>
  );
};

export default StepThird;
