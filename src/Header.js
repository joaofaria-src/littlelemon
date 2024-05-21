import React from 'react';
import logo from "./Images/logo.svg";
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo" />
          </ Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
