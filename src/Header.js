import React from 'react';
import logo from "./Images/logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
      </div>
    </div>
  );
}

export default Header;
