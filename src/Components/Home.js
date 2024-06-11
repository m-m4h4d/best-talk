import * as React from 'react';
import '../App.css';
import Learning from './Learning';
import Footer from './Footer';
import Landing from './Landing';
import Tabs from './Tabs';
import Choose from './Choose';
import Trial from './Trial';
import Boost from './Boost';

function Home() {
    return (
        <div className='body'>
            <div className="App">
                <Landing />
                <Tabs />
                <Learning />
                <Choose />
                <Trial />
                <Boost />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
