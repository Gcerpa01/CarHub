import React from 'react';
import './Header.css'; // Assuming the CSS file is named "Header.css"
import logo from '../resources/logo.png';

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar" style={{ padding: '1% 2% 1% 2%'}}>
        <a href="/">
        <img src={logo} alt="Logo" />
        </a>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/groups">Groups</a></li>
          <li><a href="/messages">Messenger</a></li>
        </ul>
      </nav>
      <nav className="actionbar">
        <ul className="actionbar-links">
          <li><a href="/account">My Account</a></li>
          <li><a href="/">Cart ( {/* script goes here */} )</a></li>
        </ul>
      </nav>
    </header>
  );
}
