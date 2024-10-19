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
        <li><Link to="/renewal-requests">Renewal Requests</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
