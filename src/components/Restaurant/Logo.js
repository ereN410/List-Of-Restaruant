import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Logo.css';


const Logo = () => {
  return (
    <Link to="/MenuPage" className="logo">
      <img src={logo} alt="List Of Restaurant Logo" />
    </Link>
  );
};

export default Logo;
