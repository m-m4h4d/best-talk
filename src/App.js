import * as React from 'react';
import image from './image.png';
import logo from './logo.png';
import { East } from '@mui/icons-material';
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
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
