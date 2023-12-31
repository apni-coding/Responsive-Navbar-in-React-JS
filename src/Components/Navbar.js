import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {
  const [click, setClick] =useState(false);
  const handleClick = ()=>{
    setClick(!click)
  }
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink 
          exact to='/'
          className='nav-logo'
          >
            Apni Coding
            <i class="fa-solid fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : 'nav-menu'}>

            <li className="nav-item">
              <NavLink 
              exact to ='/'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/about'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/blog'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              >
                Blog
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              exact to ='/contact'
              activeClassName = 'active'
              className='nav-links'
              onClick={handleClick}
              
              >
                Contact US
              </NavLink>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            {
              !click ?  <i className="fa-solid fa-bars"></i> : <i className="fa-regular fa-circle-xmark"></i>
            }
          
         

          

          </div>
        </div>
      </nav>
    </>
  );
}
