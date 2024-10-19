// src/pages/ForgotPassword.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

function ForgotPasswordPage() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log('Reset link sent to:', email);
  };

  return (
    <div>
      <Header />
      <Form title="Forgot Password" onSubmit={handleForgotPassword}>
        <label htmlFor="email">Enter your registered email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </Form>
      <Footer />
    </div>
  );
}

export default ForgotPasswordPage;
