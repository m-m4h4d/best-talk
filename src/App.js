import * as React from 'react';
import './App.css';
import Learning from './Components/Learning';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import Tabs from './Components/Tabs';
import Choose from './Components/Choose';
import Trial from './Components/Trial';
import Boost from './Components/Boost';

function App() {
    return (
        <div className='body'>
            <div className="App">
                <Landing />
                <Tabs size="md" />
                <Learning />
                <Choose />
                <Trial />
                <Boost />
                <Footer />
            </div>
        </div>
    );
}

export default App;
