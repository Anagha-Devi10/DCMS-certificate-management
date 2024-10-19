// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureCard from '../components/FeatureCard';

function HomePage() {
  return (
    <div>
      <Header />
      <section className="hero">
        <div className="container">
          <h2>Secure, Efficient, and Easy Management of Digital Certificates</h2>
          <p>
            Our system allows you to manage, issue, renew, and track digital certificates in a secure and streamlined manner.
          </p>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <FeatureCard title="Manage Certificates" description="Issue, revoke, and renew digital certificates effortlessly." />
            <FeatureCard title="Track Renewals" description="Receive notifications for upcoming renewals." />
            <FeatureCard title="Secure Storage" description="All certificates are securely stored with advanced encryption." />
            <FeatureCard title="Comprehensive Reports" description="Generate detailed reports on certificate usage." />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default HomePage;
