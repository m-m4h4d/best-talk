import React, { useState, useRef } from 'react';
import { Avatar, Box, Grid, IconButton, InputBase, Paper, Typography, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Search, Send, Mic, Image, Videocam, Stop } from '@mui/icons-material';
import { logo } from '../Images';

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
    const [recording, setRecording] = useState(false);
    const mediaRecorder = useRef(null);
    const audioChunks = useRef([]);

    const handleSendMessage = (content, type = 'text') => {
        if (typeof content === 'string' && content.trim() !== '') {
            setMessageList([
                ...messageList,
                { sender: 'Emma Johnson', content, type, time: 'Just now', avatar: 'https://i.pravatar.cc/302' },
            ]);
            setCurrentMessage('');
        } else if (type !== 'text') {
            setMessageList([
                ...messageList,
                { sender: 'Emma Johnson', content, type, time: 'Just now', avatar: 'https://i.pravatar.cc/302' },
            ]);
        }
    };

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            mediaRecorder.current = new MediaRecorder(stream);
            mediaRecorder.current.ondataavailable = event => {
                audioChunks.current.push(event.data);
            };
            mediaRecorder.current.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: 'audio/wav' });
                audioChunks.current = [];
                const audioUrl = URL.createObjectURL(audioBlob);
                handleSendMessage(audioUrl, 'audio');
            };
            mediaRecorder.current.start();
            setRecording(true);
        });
    };

    const stopRecording = () => {
        mediaRecorder.current.stop();
        setRecording(false);
    };

    const handleFileUpload = (event, type) => {
        const file = event.target.files[0];
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            handleSendMessage(fileUrl, type);
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
                            <Search />
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
                                    {message.type === 'text' && (
                                        <Typography variant="body1" sx={{ background: message.sender === 'Emma Johnson' ? '#2196f3' : '#f1f1f1', color: message.sender === 'Emma Johnson' ? 'white' : 'black', padding: 2, borderRadius: 4 }}>
                                            {message.content}
                                        </Typography>
                                    )}
                                    {message.type === 'audio' && (
                                        <audio controls src={message.content} />
                                    )}
                                    {message.type === 'image' && (
                                        <img src={message.content} alt="Uploaded" style={{ maxWidth: '100%', borderRadius: 4 }} />
                                    )}
                                    {message.type === 'video' && (
                                        <video controls src={message.content} style={{ maxWidth: '100%', borderRadius: 4 }} />
                                    )}
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
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(currentMessage)}
                        />
                        <IconButton color="primary" onClick={() => handleSendMessage(currentMessage)}>
                            <Send />
                        </IconButton>
                        <input
                            accept="image/*"
                            id="upload-photo"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileUpload(e, 'image')}
                        />
                        <label htmlFor="upload-photo">
                            <IconButton color="primary" component="span">
                                <Image />
                            </IconButton>
                        </label>
                        <input
                            accept="video/*"
                            id="upload-video"
                            type="file"
                            style={{ display: 'none' }}
                            onChange={(e) => handleFileUpload(e, 'video')}
                        />
                        <label htmlFor="upload-video">
                            <IconButton color="primary" component="span">
                                <Videocam />
                            </IconButton>
                        </label>
                        <IconButton color="primary" onClick={recording ? stopRecording : startRecording}>
                            {recording ? <Stop /> : <Mic />}
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Chat;
