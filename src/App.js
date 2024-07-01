import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Landing, Chat, Signup, Login, Question, InstructorSearch, DashboardInstructor, DashboardAdmin, DashboardStudent, InstructorListing, InstructorDetail, Stepper } from './Components';

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
