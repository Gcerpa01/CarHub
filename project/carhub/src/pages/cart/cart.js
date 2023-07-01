import React, { useState, useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the server or local storage
  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await fetch('http://localhost:8000/cart-items/'); // Replace with your actual API endpoint
      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
      } else {
        console.log('Error fetching cart items:', response.statusText);
      }
    } catch (error) {
      console.log('Error fetching cart items:', error);
    }
  };

  // Calculate subtotal of the cart items
  const calculateSubtotal = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + parseFloat(item.product.price) * item.quantity,
      0
    );
    return total.toFixed(2);
  };

  // Handle remove item from cart
  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:8000/cart-items/${itemId}/`, {
        method: 'DELETE',
      });
      if (response.ok) {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
      } else {
        console.log('Error removing item from cart:', response.statusText);
      }
    } catch (error) {
      console.log('Error removing item from cart:', error);
    }
  };

  return (
    <div className="cart-page">
      <Header />
      <h2 className="contenth2-heading">My Cart</h2>
      <div className="cart-container">
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-container">
                <img className="cart-item-image" src={item.product.image} alt={item.product.title} />
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.product.title}</h3>
                  <p className="cart-item-price">{item.product.price}</p>
                </div>
                <div className="cart-item-actions">
                  <span className="cart-item-quantity">Qty: {item.quantity}</span>
                  <span
                    className="cart-item-remove"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    &times;
                  </span>
                </div>
              </div>
            ))}
            <div className="cart-subtotal">Subtotal: ${calculateSubtotal()}</div>
            <button className="checkout-button">Checkout</button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
