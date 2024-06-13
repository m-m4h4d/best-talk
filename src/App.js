import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Question from './Components/Question';
import Stepper from './Components/Stepper';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/question" element={<Question />} />
                <Route path="/stepper" element={<Stepper />} />
            </Routes>
        </Router>
    );
}

export default App;
