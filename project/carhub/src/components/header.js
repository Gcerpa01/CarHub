import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../resources/logo.png';

export default function Header() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const response = await fetch('http://localhost:8000/cart-items/'); // Replace with your actual API endpoint
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          const cartItems = data.map((item) => item);
          setCartItems(cartItems);
          setCartItemCount(cartItems.length);
          calculateSubtotal(cartItems);
        }
      } else {
        console.log('Error fetching cart data:', response.statusText);
      }
    } catch (error) {
      console.log('Error fetching cart data:', error);
    }
  };

  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => sum + parseFloat(item.product.price) * item.quantity, 0);
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    const formattedSubtotal = formatter.format(total);
    setSubtotal(formattedSubtotal);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const removeCartItem = async (item) => {
    try {
      const response = await fetch(`http://localhost:8000/cart-items/${item.id}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove the item from the cartItems array
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItems.length);
        calculateSubtotal(updatedCartItems);
      } else {
        console.log('Error removing item from cart:', response.statusText);
      }
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
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
                    <div className="cart-items">
                      {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                          <div key={item.id} className="cart-item-container">
                            <div className="cart-item">
                              <div className="cart-item-info">
                                <p>{item.product.title}</p>
                                <p>{item.product.price}</p>
                              </div>
                              <div className="cart-item-actions">
                                <span onClick={() => removeCartItem(item)}>&times;</span>
                                <span>Qty: {item.quantity}</span>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="empty-cart">No items in cart</div>
                      )}
                    </div>
                  </div>
                  <hr className="cart-separator" />
                  <div className="cart-summary">
                    <p className="cart-total">Subtotal: {subtotal}</p>
                    <a href="/cart">
                    <button className="checkout-button">Checkout</button>
                    </a>
                  </div>
                  <a className="continue-shopping" href="/shop">
                    Continue Shopping
                  </a>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
