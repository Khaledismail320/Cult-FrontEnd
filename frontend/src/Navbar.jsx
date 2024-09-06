import React from 'react';
import cultLogo from './images/no date png.png';
import SideDrawer from './Drawer';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="sidebar">
          <SideDrawer />
        </div>
        <div className="logo-container">
          <img src={cultLogo} alt="cultLogo" className='logo-img' />
        </div>
        <div className="navbar-buttons">
          <button className="navbar-button">Home</button>
          <button className="navbar-button">About Us</button>
          <button className="navbar-button">Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
