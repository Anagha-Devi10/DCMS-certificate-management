// src/pages/LoginPage.js
import React, { useState } from 'react';
import './login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div>
      <Header />
      <Form title="Login" onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form>
      <Footer />
    </div>
  );
}

export default LoginPage;
