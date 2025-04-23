
// src/pages/Signup.js
import React, { useState } from 'react';
import '../styles/Signup.css';

function Signup({ setStoredUser }) {
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    const userData = { address, password };
    localStorage.setItem('registeredUser', JSON.stringify(userData));
    setStoredUser(userData);
    setMessage('Signup successful! Please login.');
  };

  return (
    <div className="main">
      <form className="auth-form" onSubmit={handleSignup}>
        <h1>Signup</h1>
        <input
          type="text"
          placeholder="Ethereum Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          required
        />
        <button type="submit">Signup</button>
        {message && <p style={{ color: 'green' }}>{message}</p>}
      </form>
    </div>
  );
}

export default Signup;