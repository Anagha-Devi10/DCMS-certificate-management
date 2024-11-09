import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './register-form.module.css'

function RegisterForm() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    // Basic validation
    if (!userData.username || !userData.password || !userData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/users/register',
        {
          username: userData.username,
          password: userData.password
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data) {
        // Registration successful - navigate to login page
        navigate('/login');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data || 'Registration failed');
      } else if (error.request) {
        setError('No response from server. Please check if the server is running.');
      } else {
        setError(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className={styles["register-form"]}>
      {error && <div className={styles["error-message"]} style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
      <h2 className={styles["h2"]}>REGISTER</h2>
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
        <div className={styles["form-group"]}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Register</button>
        <div className={styles["login-link"]} style={{ marginTop: '10px' }}>
          Already have an account? <a href="/login">Login here</a>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;