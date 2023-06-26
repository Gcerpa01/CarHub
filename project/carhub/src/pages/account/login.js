import React, { useState, useEffect } from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import './account.css';
import LoginContainer from './logincontainer';

const Login = () => {

  return (
    <div className="App">
      <Header />
      <LoginContainer/>
      <Footer />
    </div>
  );
};

export default Login;
