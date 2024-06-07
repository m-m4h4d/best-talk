import React from 'react';
import logo from '../logo.png';
import Button from '@mui/material/Button';
import './navbar.css';

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt='logo' />
            <ul>
                <div className='buttons'>
                    <Button onClick={() => {
                        alert('clicked');
                    }} variant="text" style={{ color: 'black', textTransform: 'none' }} sx={{ borderRadius: 28 }}>Courses</Button>
                    <Button onClick={() => {
                        alert('clicked');
                    }} variant="text" style={{ color: 'black', textTransform: 'none' }} sx={{ borderRadius: 28 }}>About</Button>
                    <Button onClick={() => {
                        alert('clicked');
                    }} variant="text" style={{ color: 'black', textTransform: 'none' }} sx={{ borderRadius: 28 }}>Contact</Button>
                    <Button onClick={() => {
                        alert('clicked');
                    }} variant="text" style={{ color: 'black', textTransform: 'none' }} sx={{ borderRadius: 28 }}>Login</Button>
                    <Button onClick={() => {
                        alert('clicked');
                    }} variant="contained" style={{ background: '#2196D4', textTransform: 'none' }} sx={{ borderRadius: 28 }}>Sign Up</Button>
                </div>
            </ul>
        </nav>
    );
};

export default Navbar;