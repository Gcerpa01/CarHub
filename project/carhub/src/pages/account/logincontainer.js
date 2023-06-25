import React, { useState } from 'react';

import './account.css';

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here using email and password
    console.log('Performing login with email:', email, 'and password:', password);
    // Reset email and password fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} placeholder="Enter your email address" /><br />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" /><br />
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default LoginContainer;
