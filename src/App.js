import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Question from './Components/Question';
import Stepper from './Components/Stepper';
import InstructorSearch from './Components/InstructorSearch';
import DashboardInstructor from './Components/DashboardInstructor';
import DashboardAdmin from './Components/DashboardAdmin';
import DashboardStudent from './Components/DashboardStudent';
import InstructorListing from './Components/InstructorListing';
import InstructorDetail from './Components/InstructorDetail';
import Chat from './Components/Chat';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/question" element={<Question />} />
                <Route path="/stepper" element={<Stepper />} />
                <Route path="/instructor-search" element={<InstructorSearch />} />
                <Route path="/instructor-dashboard" element={<DashboardInstructor />} />
                <Route path="/student-dashboard" element={<DashboardStudent />} />
                <Route path="/admin-dashboard" element={<DashboardAdmin />} />
                <Route path="/instructor-listing" element={<InstructorListing />} />
                <Route path="/instructor-detail" element={<InstructorDetail />} />
                <Route path="/chat" element={<Chat />} />
            </Routes>
        </Router>
    );
}

export default App;
