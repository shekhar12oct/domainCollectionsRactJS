import React from 'react'

const Navbar = () => {
    return (
       <nav>
           <a href="#" className="logo">
               Font-End Software Developer
           </a>

           <input className="menu-btn" type="checkbox" id="menu-btn"/>
           <label className="menu-icon" for="menu-btn">
               <span className="nav-icon"></span>
           </label>
           <ul className="menu">
               <li><a href="#">Home</a></li>
               <li><a href="#aboutID">About</a></li>
               <li><a href="#serviceID">Services</a></li>
               <li><a href="#contactID">Contact</a></li>
           </ul>
           <a href="#" className="Hey">Back to Homepage</a>
       </nav>
    )
}

export default Navbar;
