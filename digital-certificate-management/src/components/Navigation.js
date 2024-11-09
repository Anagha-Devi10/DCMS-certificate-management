// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';  // Use Link for routing

function Navigation() {
  return (
    <nav>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/manage-certificates">Manage Certificates</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
