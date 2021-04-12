import React from 'react';
import './Portfolio.css';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

const Portfolio = () => {
    return (
        <div className="Portfolio" id="homepage">
            
            <Header />
            <About/>
            <Services/>
            <Contact/>

        </div>
    )
}

export default Portfolio;
