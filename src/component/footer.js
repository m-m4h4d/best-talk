import React from 'react';
import { Facebook, Instagram, GitHub, Telegram, YouTube, Twitter } from '@mui/icons-material';
import logo from '../logo.png';
import './footer.css';

const Footer = () => {
    return (
        <footer>
          <div className='left' aria-colspan={1}>
            <img src={logo} alt='logo' />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='mid-left'>
            <h3>Courses</h3>
            <ul>
              <li>Course 1</li>
              <li>Course 2</li>
              <li>Course 3</li>
              <li>Course 4</li>
            </ul>
          </div>
          <div className='mid-right'>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='right' aria-colspan={1}>
            <span><b>Follow us</b></span>
            <ul>
              <li><Facebook /></li>
              <li><Instagram /></li>
              <li><GitHub /></li>
              <li><Telegram /></li>
              <li><YouTube /></li>
              <li><Twitter /></li>
            </ul>
          </div>
        </footer>
    );
};

export default Footer;