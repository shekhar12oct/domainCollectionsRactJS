import React from 'react';
import Navbar from './Navbar/Navbar';
import '../Portfolio.css';


const Header = () => {
    return (
        <div className="main">

        <Navbar/>
        <div className="name">
            <p className="ml3">Looking for a designer!</p>
            <h1 className="name1">I'm <span>Shekhar</span>Dubey</h1>
            <p className="details">I am a web designer with 1 years of Front End developement Experience and 1 years of Back-end Developement. 
            Initially worked on DotNet(C#) Language in the Click Software Project then switched back to front-end part. Well versed with knowledge 
            of ReactJS functional components and designing responsive UI pages. </p>

            <div className="header-btns">
                <a href="#" className="btn-1">Hire Me </a>
                <a href="#" className="btn-2">Download CV</a>
            </div>
        </div>
        </div>
    )
}

export default Header;
