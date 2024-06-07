import * as React from 'react';
import image from './image.png';
import logo from './logo.png';
import { East } from '@mui/icons-material';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className='body'>
      <div className="App">
        <div className='landing'>
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


        <div className='trial'>
          <Button onClick={() => {
            alert('clicked');
          }} variant="contained" sx={{ borderRadius: 28 }} style={{ background: '#2196D4', textTransform: 'none' }} endIcon={<East />}>
            Sign Up Now
          </Button>
        </div>


        <div className='boost'>
          <h1>Want to <span className='empower'>boost</span> your <span className='tutor'>tutoring</span> career?</h1>
          <p>We got you covered! Earn money by sharing your expert knowledge with<br></br>students. We provide one-stop destination to explore online tutoring<br></br>vacancies just sitting at your home.</p>
        </div>


        <footer></footer>
      </div>
    </div>
  );
}

export default App;
