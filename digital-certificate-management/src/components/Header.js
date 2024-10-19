// src/components/Header.js
import React from 'react';
import './Components.css'; // Common component-specific styles

function Header() {
  return (
    <header>
      <div className="container">
        <h1>Welcome to the Digital Certificate Management System</h1>
        <nav>
          <a href="/">Dashboard</a>
          <a href="/manage-certificates">Manage Certificates</a>
          <a href="/renewal-requests">Renewal Requests</a>
          <a href="/reports">Reports</a>
          <a href="/login" className="login-btn">Login</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
