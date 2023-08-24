import './Navbar.css';
import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.webp'

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wp">What is Period</a></p>
    <p><a href="#p&p">Process & Problems</a></p>
    <p><a href="#Research">Research</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
);

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className="period__navbar">
      <div className="period__navbar-links">
        <div className="period__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="period_navbar-links-container">
          <Menu />
        </div>
      </div>
      

      {/* For mobiles */}

      <div className="period__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }

        {toggleMenu && (
          <div className="period__navbar-menu-container scale-up-center">
            <div className="period__navbar-menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
