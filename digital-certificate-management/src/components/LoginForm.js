import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./login-form.module.css";
function LoginForm() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!userData.username || !userData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/manage-certificates");
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data || "Login failed");
      } else if (error.request) {
        setError(
          "No response from server. Please check if the server is running."
        );
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className={styles["login-form-container"]}>
      {error && (
        <div
          className={styles["error-message"]}
          style={{ color: "red", marginBottom: "10px" }}
        >
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2 className={styles["h2"]}>LOGIN</h2>

        <div className={styles["form-group"]}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className={styles["button"]} type="submit">Login</button>
        <div className={styles["register-link"]} style={{ marginTop: "10px" }}>
          Don't have an account? <a href="/register">Register here</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
