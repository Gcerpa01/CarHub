import React, { useState, useEffect } from 'react';
import './account.css';

const ProfileContainer = ({ selectedOption, handleOptionClick }) => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    bio: '',
    password: '',
    notifications_enabled: false,
    preferred_language: '',
    card_number: '',
    expiration_date: '',
    billing_address: '',
  });

  useEffect(() => {
    fetch('http://127.0.0.1:8000/profiles/1/') // Assuming the first profile has the ID of 1
      .then((response) => response.json())
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const [passwordsMatchError, setPasswordsMatchError] = useState(false);  

  const handleProfileFormSubmit = (e) => {
    e.preventDefault();
    saveProfileData(profileData);
  };

  const handleBillingFormSubmit = (e) => {
    e.preventDefault();
    // Handle saving billing information data
  };

  const handleSettingsFormSubmit = (e) => {
    e.preventDefault();
  
    if (profileData.password !== profileData.confirmPassword) {
      setPasswordsMatchError(true);
      return;
    }
  
    // Passwords match, proceed with submitting the form
    setPasswordsMatchError(false);
  
    // Make the PUT request
    const updatedProfileData = {
      ...profileData,
      confirmPassword: undefined, // Remove the confirmPassword field from the data object
    };
    saveProfileData(updatedProfileData);
  };
  
  
  const saveProfileData = (data) => {
    if (data.confirmPassword) {
      delete data.confirmPassword;
    }
  
    fetch('http://127.0.0.1:8000/profiles/1/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        console.log('Profile data saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving profile data:', error);
      });
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
          className={selectedOption === 'billing' ? 'active' : ''}
          onClick={() => handleOptionClick('billing')}
        >
          Billing Information
        </button>
        <button type="submit" onClick={handleProfileFormSubmit}>Save Profile</button>
        {selectedOption === 'profile' }
      </div>
      <div className="right-container">
        {selectedOption === 'profile' && (
          <div>
            <h2>Welcome back, {profileData.name}!</h2>
            <div className="main-container">
              <form>
                <label htmlFor="name">Name:</label><br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={profileData.name}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                /><br />
                <label htmlFor="email">Email:</label><br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={profileData.email}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                /><br />
                <label htmlFor="bio">Bio:</label><br />
                <textarea
                  id="bio"
                  name="bio"
                  placeholder="Write a short bio about yourself"
                  value={profileData.bio}
                  onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                ></textarea><br />
                {/* Other profile form inputs */}
              </form>
            </div>
          </div>
        )}

{selectedOption === 'settings' && (
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
          value={profileData.password}
          onChange={(e) => setProfileData({ ...profileData, password: e.target.value })}
        /><br />
        <label htmlFor="confirmPassword">Confirm Password:</label><br />
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your new password"
          value={profileData.confirmPassword}
          onChange={(e) => setProfileData({ ...profileData, confirmPassword: e.target.value })}
        /><br />
        {passwordsMatchError && <span>Passwords do not match.</span>}
        <label htmlFor="notifications">Notifications:</label><br />
        <select
          id="notifications"
          name="notifications"
          value={profileData.notifications_enabled ? 'enabled' : 'disabled'}
          onChange={(e) =>
            setProfileData({
              ...profileData,
              notifications_enabled: e.target.value === 'enabled',
            })
          }
        >
          <option value="enabled">Enabled</option>
          <option value="disabled">Disabled</option>
        </select><br />
        <label htmlFor="language">Preferred Language:</label><br />
        <select
          id="language"
          name="language"
          value={profileData.preferred_language}
          onChange={(e) => setProfileData({ ...profileData, preferred_language: e.target.value })}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
        </select><br />
      </form>
    </div>
  </div>
)}


{selectedOption === 'billing' && (
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
          value={profileData.card_number}
          maxLength={16} // Limiting the length to 16 characters
          onChange={(e) =>
            setProfileData({ ...profileData, card_number: e.target.value })
          }
        /><br />
        <label htmlFor="expirationDate">Expiration Date:</label><br />
        <input
          type="text"
          id="expirationDate"
          name="expirationDate"
          placeholder="MM/YY"
          value={profileData.expiration_date}
          maxLength={5} // Limiting the length to 5 characters
          onChange={(e) =>
            setProfileData({ ...profileData, expiration_date: e.target.value })
          }
        /><br />
        <label htmlFor="billingAddress">Billing Address:</label><br />
        <textarea
          id="billingAddress"
          name="billingAddress"
          placeholder="Enter your billing address"
          value={profileData.billing_address}
          maxLength={200} // Limiting the length to 200 characters
          onChange={(e) =>
            setProfileData({ ...profileData, billing_address: e.target.value })
          }
        ></textarea><br />
      </form>
    </div>
  </div>
)}

      </div>
    </div>
  );
};

export default ProfileContainer;
