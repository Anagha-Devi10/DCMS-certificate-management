// src/pages/LogoutPage.js
import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
  };
  useEffect(() => {
    // Handle logout logic (e.g., clear session, tokens)
    console.log("User logged out");
    // Redirect to login page after logout
    handleLogout();
    navigate("/login");
  }, [navigate]);

  return (
    <div>
      <Header />
      <div className="logout-container">
        <h2>Logout</h2>
        <p>You have been logged out successfully.</p>
        <button onClick={() => navigate("/login")}>Login Again</button>
      </div>
      <Footer />
    </div>
  );
}

export default LogoutPage;
