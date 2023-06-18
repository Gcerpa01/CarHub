import React from 'react';
import './Footer.css'; // Assuming the CSS file is named "Footer.css"

export default function Footer() {
  return (
<footer className="footer">
  <div className="footer-content">
    <div className="column">
      <h3>Pages</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div className="column">
      <h3>Other Information</h3>
      <ul>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/terms">Terms of Service</a></li>
      </ul>
    </div>
    <div className="column">
      <h3>About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices sapien ac nibh iaculis malesuada.</p>
    </div>
  </div>
</footer>

  );
}
