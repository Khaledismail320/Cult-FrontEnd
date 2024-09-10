import React from 'react';
import cultLogo from './images/no date png.png';
import SideDrawer from './Drawer';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {





const navigate= useNavigate();

  const handleNav= (url)=>{
    navigate(url);
    window.scrollTo(0, 0);
  }
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
          <button onClick={()=>{handleNav('/')}} className="navbar-button">Home</button>
          <button onClick={()=>{handleNav('/AboutUs')}} className="navbar-button">About Us</button>
          <button onClick={()=>{handleNav('/ContactUs')}} className="navbar-button">Contact Us</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
