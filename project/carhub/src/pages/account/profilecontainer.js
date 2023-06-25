import React, { useState, useEffect } from 'react';
import data from '../../db/users.json';
import './account.css';

const ProfileContainer = ({ selectedOption, handleOptionClick }) => {
  const [orders, setOrders] = useState([]);
  const userName = data.profile.name;

  useEffect(() => {
    setOrders(data.orders);
  }, []);

  const [expandedOrders, setExpandedOrders] = useState([]);
  const [profileFormData, setProfileFormData] = useState({
    name: data.profile.name,
    email: data.profile.email,
    bio: data.profile.bio,
  });
  const [settingsFormData, setSettingsFormData] = useState({
    password: data.settings.password,
    notifications: data.settings.notifications,
    language: data.settings.language,
  });
  const [billingFormData, setBillingFormData] = useState({
    cardNumber: data.billing.cardNumber,
    expirationDate: data.billing.expirationDate,
    billingAddress: data.billing.billingAddress,
  });

  const toggleOrder = (orderNumber) => {
    if (expandedOrders.includes(orderNumber)) {
      setExpandedOrders(expandedOrders.filter((order) => order !== orderNumber));
    } else {
      setExpandedOrders([...expandedOrders, orderNumber]);
    }
  };

  const handleProfileFormSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...data, profile: profileFormData };
    saveData(updatedData);
  };

  const handleSettingsFormSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...data, settings: settingsFormData };
    saveData(updatedData);
  };

  const handleBillingFormSubmit = (e) => {
    e.preventDefault();
    const updatedData = { ...data, billing: billingFormData };
    saveData(updatedData);
  };

  const saveData = (updatedData) => {
    // Send an HTTP request to the server to save the data
    fetch('/api/saveUserData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success or display a success message
        console.log('Data saved successfully!');
      })
      .catch((error) => {
        // Handle error or display an error message
        console.error('Error saving data:', error);
      });
  };

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'profile':
        return (
          <div>
            <h2>Welcome back, {userName}!</h2>
            <div className="main-container">
              <form onSubmit={handleProfileFormSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={profileFormData.name}
                  onChange={(e) => setProfileFormData({ ...profileFormData, name: e.target.value })}
                /><br />
                <label htmlFor="email">Email:</label><br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={profileFormData.email}
                  onChange={(e) => setProfileFormData({ ...profileFormData, email: e.target.value })}
                /><br />
                <label htmlFor="bio">Bio:</label><br />
                <textarea
                  id="bio"
                  name="bio"
                  placeholder="Write a short bio about yourself"
                  value={profileFormData.bio}
                  onChange={(e) => setProfileFormData({ ...profileFormData, bio: e.target.value })}
                ></textarea><br />
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h2>Account Settings</h2>
            <div className="main-container">
              <form onSubmit={handleSettingsFormSubmit}>
                <label htmlFor="password">Password:</label><br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your new password"
                  value={settingsFormData.password}
                  onChange={(e) => setSettingsFormData({ ...settingsFormData, password: e.target.value })}
                /><br />
                <label htmlFor="notifications">Notifications:</label><br />
                <select
                  id="notifications"
                  name="notifications"
                  value={settingsFormData.notifications}
                  onChange={(e) => setSettingsFormData({ ...settingsFormData, notifications: e.target.value })}
                >
                  <option value="enabled">Enabled</option>
                  <option value="disabled">Disabled</option>
                </select><br />
                <label htmlFor="language">Preferred Language:</label><br />
                <select
                  id="language"
                  name="language"
                  value={settingsFormData.language}
                  onChange={(e) => setSettingsFormData({ ...settingsFormData, language: e.target.value })}
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select><br />
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2>Your Orders</h2>
            <div className="main-container">
              <div className="order-list">
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <div key={order.orderNumber} className="order-item">
                      <h3 className="order-header" onClick={() => toggleOrder(order.orderNumber)}>
                        Order Number: {order.orderNumber}
                      </h3>
                      {expandedOrders.includes(order.orderNumber) && (
                        <div className="order-details">
                          <p>Date: {order.date}</p>
                          <p>Status: {order.status}</p>
                          <p>Total: {order.total}</p>
                          <ul>
                            {order.items.map((item) => (
                              <li key={item.name}>
                                <p>{item.name}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price}</p>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No orders found.</p>
                )}
              </div>
            </div>
          </div>
        );
      case 'billing':
        return (
          <div>
            <h2>Billing Information</h2>
            <div className="main-container">
              <form onSubmit={handleBillingFormSubmit}>
                <label htmlFor="cardNumber">Card Number:</label><br />
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="Enter your card number"
                  value={billingFormData.cardNumber}
                  onChange={(e) => setBillingFormData({ ...billingFormData, cardNumber: e.target.value })}
                /><br />
                <label htmlFor="expirationDate">Expiration Date:</label><br />
                <input
                  type="text"
                  id="expirationDate"
                  name="expirationDate"
                  placeholder="MM/YY"
                  value={billingFormData.expirationDate}
                  onChange={(e) => setBillingFormData({ ...billingFormData, expirationDate: e.target.value })}
                /><br />
                <label htmlFor="billingAddress">Billing Address:</label><br />
                <textarea
                  id="billingAddress"
                  name="billingAddress"
                  placeholder="Enter your billing address"
                  value={billingFormData.billingAddress}
                  onChange={(e) => setBillingFormData({ ...billingFormData, billingAddress: e.target.value })}
                ></textarea><br />
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
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
  );
};

export default ProfileContainer;
