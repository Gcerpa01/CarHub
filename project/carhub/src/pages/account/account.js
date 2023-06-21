import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './account.css';
import Orders from '../../db/orders.json';

export default function Account() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulating fetching JSON data from an API
    const fetchOrders = async () => {
      try {
        const response = await fetch(Orders); // Replace with your API endpoint
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const [selectedOption, setSelectedOption] = useState('profile');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'profile':
        return (
          <div>
            <h2>Profile</h2>
            <p>Welcome to your profile page!</p>
            <p>Here you can update your personal information:</p>
            <form>
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" placeholder="Enter your name" /><br />
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" name="email" placeholder="Enter your email address" /><br />
              <label htmlFor="bio">Bio:</label><br />
              <textarea id="bio" name="bio" placeholder="Write a short bio about yourself"></textarea><br />
              {/* Additional form fields and actions */}
            </form>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2>Account Settings</h2>
            <p>Manage your account settings here.</p>
            <p>You can update various settings:</p>
            <form>
              <label htmlFor="password">Password:</label><br />
              <input type="password" id="password" name="password" placeholder="Enter your new password" /><br />
              <label htmlFor="notifications">Notifications:</label><br />
              <select id="notifications" name="notifications">
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select><br />
              <label htmlFor="language">Preferred Language:</label><br />
              <select id="language" name="language">
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
              </select><br />
              {/* Additional form fields and actions */}
            </form>
          </div>
        );
      case 'orders':
        return (
          <div>
        {orders.length > 0 ? (
          <div>
            {orders.map((order) => (
              <div key={order.orderNumber}>
                <h3>Order Number: {order.orderNumber}</h3>
                <p>Date: {order.date}</p>
                <h4>Items:</h4>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index}>
                      {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
                <p>Total: ${order.total.toFixed(2)}</p>
                <p>Status: {order.status}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders available.</p>
        )}
      </div>
        );
      case 'billing':
        return (
          <div>
            <h2>Billing Information</h2>
            <p>Manage your billing information.</p>
            <p>You can update your payment details:</p>
            <form>
              <label htmlFor="cardNumber">Card Number:</label><br />
              <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" /><br />
              <label htmlFor="expirationDate">Expiration Date:</label><br />
              <input type="text" id="expirationDate" name="expirationDate" placeholder="MM/YY" /><br />
              <label htmlFor="billingAddress">Billing Address:</label><br />
              <textarea id="billingAddress" name="billingAddress" placeholder="Enter your billing address"></textarea><br />
              {/* Additional form fields and actions */}
            </form>
          </div>
        );
      default:
        return null;
    }
    
  };

  return (
    <div className="App">
      <Header />
      <div className="profile-container">
        <div className="left-container">
          <button
            className={selectedOption === 'profile' ? 'active' : ''}
            onClick={() => handleOptionClick('profile')}
          >
            Profile
          </button>
          <button
            className={selectedOption === 'settings' ? 'active' : ''}
            onClick={() => handleOptionClick('settings')}
          >
            Account Settings
          </button>
          <button
            className={selectedOption === 'orders' ? 'active' : ''}
            onClick={() => handleOptionClick('orders')}
          >
            Order History
          </button>
          <button
            className={selectedOption === 'billing' ? 'active' : ''}
            onClick={() => handleOptionClick('billing')}
          >
            Billing Information
          </button>
        </div>
        <div className="right-container">
          {renderOptionContent()}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
