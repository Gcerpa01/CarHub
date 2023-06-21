import React from 'react';
import './Footer.css'; // Assuming the CSS file is named "Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/groups">Groups</a>
          <a href="/messages">Messenger</a>
          <a href="/account">My Account</a>
        </div>
        <hr className="footer-separator" />
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} CarHub
        </div>
      </div>
    </footer>
  );
}
