import * as React from 'react';
import image from './image.png';
import logo from './logo.png';
import a from './1.png';
import b from './2.png';
import c from './3.png';
import d from './4.png';
import { East, Facebook, Instagram, GitHub, Telegram, YouTube, Twitter } from '@mui/icons-material';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='body'>

      {/* Home Page */}
      <div className="App">

        {/* Landing Page */}
        <div className='landing'>
          {/* Group 2 */}
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
          <header>
            <div className='left'>
              <h1><span className='empower'>Empower</span> your<br></br>learning journey<br></br>with the <span className='tutor'>best tutors.</span></h1>
              <p>Our online tutors offer personalized, one-on-one learning to help<br></br>you improve your grades, build your confidence, and achieve your<br></br>academic goals.</p>
              <Button onClick={() => {
                alert('clicked');
              }} variant="contained" sx={{ borderRadius: 28 }} style={{ background: '#2196D4', textTransform: 'none' }} endIcon={<East />}>
                Go with your tutor
              </Button>
            </div>
            <div className='right'>
              <img src={image} alt='landing' />
            </div>
          </header>
        </div>

        {/* Page 3 */}
        <div className='choose'>
          <h1>Why <span className='empower'>choose us</span>?</h1>
          <div className='grid'>
            <div className='card'>
              <img src={a} alt='a' />
              <span>
                <p><b>Certified Teachers</b></p>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor</p>
                <Button onClick={() => {
                  alert('clicked');
                }} variant="text" style={{ textTransform: 'none', textDecoration: 'underline' }} sx={{ borderRadius: 28 }}>
                  Learn More
                </Button>
              </span>
            </div>
            <div className='card'>
              <img src={b} alt='b' />
              <span>
                <p><b>Online Courses</b></p>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor</p>
                <Button onClick={() => {
                  alert('clicked');
                }} variant="text" style={{ textTransform: 'none', textDecoration: 'underline' }} sx={{ borderRadius: 28 }}>
                  Learn More
                </Button>
              </span>
            </div>
            <div className='card'>
              <img src={c} alt='c' />
              <span>
                <p><b>Certification</b></p>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor</p>
                <Button onClick={() => {
                  alert('clicked');
                }} variant="text" style={{ textTransform: 'none', textDecoration: 'underline' }} sx={{ borderRadius: 28 }}>
                  Learn More
                </Button>
              </span>
            </div>
            <div className='card'>
              <img src={d} alt='d' />
              <span>
                <p><b>1-to-1 learning</b></p>
                <p>I am text block. Click edit button to change this text. Lorem ipsum dolor</p>
                <Button onClick={() => {
                  alert('clicked');
                }} variant="text" style={{ textTransform: 'none', textDecoration: 'underline' }} sx={{ borderRadius: 28 }}>
                  Learn More
                </Button>
              </span>
            </div>
          </div>
        </div>

        {/* Page 5 */}
        <div className='trial'>
          <h1>Get <span className='empower'>Free Trial</span> Lesson</h1>
          <p>A free lesson is guaranteed to every student, independent of the number<br></br>of lessons he or she would like to receive.</p>
          <Button onClick={() => {
            alert('clicked');
          }} variant="contained" sx={{ borderRadius: 28 }} style={{ background: '#2196D4', textTransform: 'none' }} endIcon={<East />}>
            Sign Up Now
          </Button>
        </div>

        {/* Page 4 */}
        <div className='boost'>
          <div className='grid'>
            <h1>Want to <span className='empower'>boost</span> your <span className='tutor'>tutoring</span> career?</h1>
            <p>We got you covered! Earn money by sharing your expert knowledge with<br></br>students. We provide one-stop destination to explore online tutoring<br></br>vacancies just sitting at your home.</p>
            <Button onClick={() => {
              alert('clicked');
            }} variant="contained" sx={{ borderRadius: 28 }} style={{ background: '#c31575', textTransform: 'none' }} endIcon={<East />}>
              Become a Tutor
            </Button>
          </div>
        </div>

        {/* Page 7 */}
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
      </div>
    </div>
  );
}

export default App;
