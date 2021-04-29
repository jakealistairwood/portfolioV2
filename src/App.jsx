import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.scss';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Portfolio />
            <About />
            <Contact />
        </div>
    )
}

export default App;
