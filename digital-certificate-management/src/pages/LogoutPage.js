// src/pages/LogoutPage.js
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Navigate, useNavigate } from "react-router-dom";
import styles from "./logout.module.css";
function LogoutPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  };
  useEffect(() => {
    // Handle logout logic (e.g., clear session, tokens)
    console.log("User logged out");
    // Redirect to login page after logout
    handleLogout();
    // navigate("/login");
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className={styles["logout-container"]}>
        <h2 className={styles["h2"]}>Logout</h2>
        <p className={styles["para"]}>You have been logged out successfully.</p>
        <button className={styles["button"]} onClick={() => navigate("/login")}>
          Login Again
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default LogoutPage;
