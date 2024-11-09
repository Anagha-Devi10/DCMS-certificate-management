import React from 'react';
import './login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <div className='login-container'>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default LoginPage;