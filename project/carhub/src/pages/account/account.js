import React, { useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './account.css';

export default function Account() {
  const [selectedOption, setSelectedOption] = useState('profile');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderOptionContent = () => {
    switch (selectedOption) {
      case 'profile':
        return (
          <div>
            {/* Profile information */}
          </div>
        );
      case 'settings':
        return (
          <div>
            {/* Account settings */}
          </div>
        );
      case 'orders':
        return (
          <div>
            {/* Order history */}
          </div>
        );
      case 'billing':
        return (
          <div>
            {/* Billing information */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      <h3>My Account</h3>
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
