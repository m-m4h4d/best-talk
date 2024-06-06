import * as React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <div className="App">
      <nav>
        <Stack spacing={2} direction="row">
          <Button onClick={() => {
            alert('clicked');
          }} variant="text" href='#'>Courses</Button>
          <Button onClick={() => {
            alert('clicked');
          }} variant="text" href='#'>About</Button>
          <Button onClick={() => {
            alert('clicked');
          }} variant="text" href='#'>Contact</Button>
          <Button onClick={() => {
            alert('clicked');
          }} variant="text" href='#'>Login</Button>
          <Button onClick={() => {
            alert('clicked');
          }} variant="contained">Sign Up</Button>
        </Stack>
      </nav>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
