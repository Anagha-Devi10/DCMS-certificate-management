// src/App.js
/*import React from 'react';
import './styles/App.css';
// import './components/Components.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';
import ManageCertificatesPage from './pages/ManageCertificatesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/manage-certificates" element={<ManageCertificatesPage />} />
      </Routes>
    </Router>
  );
}

export default App;*/

import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogoutPage from './pages/LogoutPage';
import ManageCertificatesPage from './pages/ManageCertificatesPage';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem("user") !== null;
  };


  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/dashboard" 
              element={isAuthenticated() ? <DashboardPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!isAuthenticated() ? <LoginPage /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/register" 
              element={!isAuthenticated() ? <RegisterPage /> : <Navigate to="/dashboard" />} 
            />
            <Route 
              path="/manage-certificates" 
              element={isAuthenticated() ? <ManageCertificatesPage /> : <Navigate to="/login" />} 
            />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
