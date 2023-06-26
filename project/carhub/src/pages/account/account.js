import React, { useState, useEffect } from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './account.css';
import ProfileContainer from './profilecontainer'; 

const Account = () => {
  const [selectedOption, setSelectedOption] = useState('profile');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Header />
      <ProfileContainer
        selectedOption={selectedOption}
        handleOptionClick={handleOptionClick}
      />
      <Footer />
    </div>
  );
};

export default Account;
