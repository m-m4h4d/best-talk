import * as React from 'react';
import image from './image.png';
import logo from './logo.png';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <body>
      <div className="App">
        <nav>
          <div className="logo">
            <img src={logo} alt='hm'/>
          </div>
          <ul>
            <li><Button onClick={() => {
              alert('clicked');
            }} variant="text" style={{ color: 'black' }} sx={{ borderRadius: 28 }}>Courses</Button></li>
            <li><Button onClick={() => {
              alert('clicked');
            }} variant="text" style={{ color: 'black' }} sx={{ borderRadius: 28 }}>About</Button></li>
            <li><Button onClick={() => {
              alert('clicked');
            }} variant="text" style={{ color: 'black' }} sx={{ borderRadius: 28 }}>Contact</Button></li>
            <li><Button onClick={() => {
              alert('clicked');
            }} variant="text" style={{ color: 'black' }} sx={{ borderRadius: 28 }}>Login</Button></li>
            <li><Button onClick={() => {
              alert('clicked');
            }} variant="contained" sx={{ borderRadius: 28 }}>Sign Up</Button></li>
          </ul>
        </nav>
        <header>
          <div className='left'>
            <h1><span style={{color: "purple"}}>Empower</span> your<br>
            </br>learning journey<br>
            </br>with the <span>best tutors.</span></h1>
            <p></p>
            <Button onClick={() => {
              alert('clicked');
            }} variant="contained" sx={{ borderRadius: 28 }}>Go with your tutor</Button>
          </div>
          <div className='right'>
            <img src={image} alt='huh'/>
          </div>
        </header>
      </div>
    </body>
  );
}

export default App;
