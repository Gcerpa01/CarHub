import React, { useState, useEffect } from 'react';
import './Footer.css'; // Assuming the CSS file is named "Footer.css"
import logo from '../resources/logo.png';

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="left">
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
      {showScrollButton && (
        <button className="scroll-to-top" onClick={handleScrollToTop}>
          &#9650;
        </button>
      )}
    </footer>
  );
}
