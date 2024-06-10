import React from 'react';
import { Button, Typography } from '@mui/material';

const Tabs = () => {
    return (
        <div>
            {/* Your tab component code goes here */}
            <img src={item.img} alt={`card-${index}`} style={{ borderRadius: '10px 0 0 10px' }} />
            <span>
                <Typography variant="h6" component="p"><b>{item.title}</b></Typography>
                <Typography variant="body2">I am text block. Click edit button to change this text. Lorem ipsum dolor</Typography>
                <Button
                    onClick={() => alert('clicked')}
                    variant="text"
                    sx={{ textTransform: 'none', textDecoration: 'underline', borderRadius: 28 }}
                >
                    Learn More
                </Button>
            </span>
        </div>
    );
};

export default Tabs;