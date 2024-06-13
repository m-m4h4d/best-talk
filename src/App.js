import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Questionnaire from './Components/Questionaire';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/question" element={<Questionnaire />} />
            </Routes>
        </Router>
    );
}

export default App;
