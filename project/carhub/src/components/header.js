import React, { useState } from 'react';
import './Header.css';
import logo from '../resources/logo.png';
import cartData from '../db/users.json';

export default function Header() {
  const cartItems = cartData.cart;
  const cartItemCount = cartItems.length;
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className="header">
      <nav className="navbar" style={{ padding: '1% 2% 1% 2%' }}>
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/groups">Groups</a>
          </li>
          <li>
            <a href="/messages">Messenger</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="actionbar">
        <ul className="actionbar-links">
          <li>
            <a href="/account">My Account</a>
          </li>
          <li>
            <div className="cart-container">
              <a className="cart-button" onClick={toggleCart}>
                Cart ({cartItemCount})
              </a>
              {isCartOpen && (
                <div className="cart-dropdown">
                  <div className="scroll-container">
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-item">
                        <p>{item.item}</p>
                        <p>{item.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
