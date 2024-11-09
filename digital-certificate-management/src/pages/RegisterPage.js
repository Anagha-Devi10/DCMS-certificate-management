// src/pages/RegisterPage.js
/*import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    console.log('Registration successful:', { username, email });
  };

  return (
    <div>
      <Header />
      <Form title="Register" onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </Form>
      <Footer />
    </div>
  );
}

export default RegisterPage;*/

import React from 'react';
import styles from './register.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <div className={styles['register-container']}>
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterPage;