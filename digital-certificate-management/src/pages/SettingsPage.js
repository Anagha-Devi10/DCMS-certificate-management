// src/pages/SettingsPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form';

function SettingsPage() {
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Handle profile update logic
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Handle password change logic
  };

  const handleNotificationUpdate = (e) => {
    e.preventDefault();
    // Handle notification update logic
  };

  return (
    <div>
      <Header />
      <Form title="Update Profile" onSubmit={handleProfileUpdate}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </Form>

      <Form title="Change Password" onSubmit={handlePasswordChange}>
        <label htmlFor="current_password">Current Password</label>
        <input type="password" id="current_password" />
        <label htmlFor="new_password">New Password</label>
        <input type="password" id="new_password" />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input type="password" id="confirm_password" />
      </Form>

      <Form title="Update Notifications" onSubmit={handleNotificationUpdate}>
        <label htmlFor="email_notifications">Email Notifications</label>
        <input type="checkbox" id="email_notifications" />
        <label htmlFor="sms_notifications">SMS Notifications</label>
        <input type="checkbox" id="sms_notifications" />
      </Form>
      <Footer />
    </div>
  );
}

export default SettingsPage;
