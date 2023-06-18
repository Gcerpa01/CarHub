import React from 'react';
import './Header.css'; // Assuming the CSS file is named "Header.css"

export default function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="account-dropdown">
          <button className="account-button">Account</button>
          <div className="dropdown-content">
            {/* Dropdown content here */}
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <a href="/">LOGO HERE</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/groups">Groups</a></li>
          <li><a href="/messages">Messages</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
