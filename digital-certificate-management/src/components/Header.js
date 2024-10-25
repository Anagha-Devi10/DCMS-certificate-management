// src/components/Header.js
import React from 'react';
// import './Components.css'; // Common component-specific styles
import styles from './header.module.css'

function Header() {
  return (
    <header className= {styles["header"]}>
      <div className={styles["container"]}>
        <h1>Welcome to the Digital Certificate Management System</h1>
        <nav className={styles["nav"]}>
          <a href="/dashboard">Dashboard</a>
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
