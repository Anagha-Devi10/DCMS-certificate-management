// src/components/Header.js
import React from "react";
// import './Components.css'; // Common component-specific styles
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  let isHome = false;
  if (location.pathname == "/") {
    isHome = true;
  }

  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["branding"]}>
          <Link to="/">
            <img className={styles["logo"]} src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <nav className={styles["nav"]}>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/manage-certificates">Manage Certificates</Link>
          <Link to="/renewal-requests">Renewal Requests</Link>
          <Link to="/reports">Reports</Link>
          <Link to="/login" className="login-btn">
            Login
          </Link>
        </nav>
      </div>
      {isHome ? (
        <h1 className={styles["welcome-text"]}>
          Welcome to the Digital Certificate Management System
        </h1>
      ) : null}
    </header>
  );
}

export default Header;
