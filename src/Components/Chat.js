import React, { useState } from 'react';
import { Avatar, Box, Grid, IconButton, InputBase, Paper, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import logo from '../Images/logo.png';

const conversations = [
    { name: 'Jane Smith', title: 'Software Engineering Manager at Facebook', time: '2h', avatar: 'https://i.pravatar.cc/300' },
    { name: 'John Doe', title: 'UX Designer at Google', time: '5h', avatar: 'https://i.pravatar.cc/301' },
    { name: 'Emma Johnson', title: 'Data Scientist at Amazon', time: '1d', avatar: 'https://i.pravatar.cc/302' },
];

const messages = [
    { sender: 'Jane Smith', content: 'Hi Emma, I am working on a project that requires some data analysis. I saw your profile and thought you might be interested in collaborating. Let me know if you are available for a chat.', time: '2h ago', avatar: 'https://i.pravatar.cc/300' },
    { sender: 'Emma Johnson', content: 'Hi Jane, I am interested in the collaboration. I am available for a chat tomorrow morning at 9:00am. Let me know if that works for you.', time: '1h ago', avatar: 'https://i.pravatar.cc/302' },
];

const Chat = () => {
    const [currentMessage, setCurrentMessage] = useState('');
    const [messageList, setMessageList] = useState(messages);

    const handleSendMessage = () => {
        if (currentMessage.trim() !== '') {
            setMessageList([
                ...messageList,
                { sender: 'Emma Johnson', content: currentMessage, time: 'Just now', avatar: 'https://i.pravatar.cc/302' },
            ]);
            setCurrentMessage('');
        }
    };

    return (
        <Grid container>
            <Grid item xs={3} sx={{ borderRight: '1px solid #e0e0e0' }}>
                <Box sx={{ padding: 2 }}>
                    <img src={logo} alt="Logo" style={{ height: '50px', marginBottom: '20px' }} />
                    <Paper sx={{ padding: '2px 4px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search Conversations" />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                    <List>
                        {conversations.map((conv, index) => (
                            <ListItem key={index} alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt={conv.name} src={conv.avatar} />
                                </ListItemAvatar>
                                <ListItemText primary={conv.name} secondary={`${conv.title} · ${conv.time}`} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', height: '100vh' }}>
                    <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                        {messageList.map((message, index) => (
                            <Box key={index} sx={{ display: 'flex', justifyContent: message.sender === 'Emma Johnson' ? 'flex-end' : 'flex-start', marginBottom: 2 }}>
                                {message.sender !== 'Emma Johnson' && (
                                    <Avatar alt={message.sender} src={message.avatar} />
                                )}
                                <Box sx={{ maxWidth: '60%', marginLeft: message.sender !== 'Emma Johnson' ? 2 : 0 }}>
                                    <Typography variant="body2" color="textSecondary">{message.sender}</Typography>
                                    <Typography variant="body1" sx={{ background: message.sender === 'Emma Johnson' ? '#2196f3' : '#f1f1f1', color: message.sender === 'Emma Johnson' ? 'white' : 'black', padding: 2, borderRadius: 4 }}>
                                        {message.content}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">{message.time}</Typography>
                                </Box>
                                {message.sender === 'Emma Johnson' && (
                                    <Avatar alt={message.sender} src={message.avatar} />
                                )}
                            </Box>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
                        <Avatar alt="Current User" src="https://i.pravatar.cc/303" />
                        <InputBase
                            sx={{ ml: 2, flex: 1 }}
                            placeholder="Type a message"
                            value={currentMessage}
                            onChange={(e) => setCurrentMessage(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <IconButton color="primary" onClick={handleSendMessage}>
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Chat;
