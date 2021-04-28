import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.scss';
import Portfolio from './components/Portfolio';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Portfolio />
        </div>
    )
}

export default App;
