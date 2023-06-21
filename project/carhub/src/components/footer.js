import React from 'react';
import './Footer.css'; // Assuming the CSS file is named "Header.css"
import logo from '../resources/logo.png';


export default function Footer() {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <span class="left">
                <a href="/shop">Shop</a> {'  -  '} 
                <a href="/groups">Groups</a>
          </span>
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          <span className="right">
                <a href="/messages">Messenger</a> {'  -  '}
                <a href="/contact">Contact</a>
          </span>
      </div>
    </footer>
  );
}
