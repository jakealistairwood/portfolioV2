import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.scss';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import { Element } from 'react-scroll';

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Element name="featured" className="featured">
                <Portfolio />
            </Element>
            <Element name="about" className="about">
                <About />
            </Element>
            <Element name="contact" className="contact">
                <Contact />
            </Element>
        </div>
    )
}

export default App;
