// src/components/Header.js
import React from "react";
// import './Components.css'; // Common component-specific styles
import styles from "./header.module.css";
import { Link, Navigate, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location.pathname);
  let isHome = false;
  if (location.pathname == "/") {
    isHome = true;
  }
  // Check if user is logged in
  const isAuthenticated = () => {
    // return localStorage.getItem("user") !== null;
    return true
  };

  // Logout handler
  
  return (
    <header className={styles["header"]}>
      <div className={styles["container"]}>
        <div className={styles["branding"]}>
          <Link to="/">
            <img className={styles["logo"]} src="/logo.svg" alt="Logo" />
          </Link>
        </div>
        <nav className={styles["nav"]}>
          {isAuthenticated() ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/manage-certificates">Manage Certificates</Link>
              <Link to="/logout" className="login-btn">
                Logout
              </Link>
            </>
          ) : (
            <> 
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
      {isHome && isAuthenticated()==false ?  (
        <h1 className={styles["welcome-text"]}>
          Welcome to the Digital Certificate Management System
        </h1>
      ) : null}
    </header>
  );
}

export default Header;
