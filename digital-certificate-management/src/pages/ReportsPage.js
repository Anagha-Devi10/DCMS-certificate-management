// src/pages/ReportsPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ReportsPage() {
  const handleGenerateReport = () => {
    // Handle report generation logic here
    console.log('Report generated');
  };

  return (
    <div>
      <Header />
      <section>
        <h2>Certificate Reports</h2>
        <p>Generate reports about certificates, renewals, and expirations.</p>
        <button onClick={handleGenerateReport}>Generate Report</button>
      </section>
      <Footer />
    </div>
  );
}

export default ReportsPage;
