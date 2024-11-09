// src/pages/DashboardPage.js
/*import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CertificateCard from "../components/CertificateCard";
import styles from '../components/certificate.module.css'

function DashboardPage() {
  return (
    <div> 
      <Header />
      <h2 className={styles["heading"]}>Certificate Overview</h2>
      <div className={styles["cards"]}>
        <CertificateCard title="Total Certificates" number="50" />
        <CertificateCard title="Expiring Soon" number="10" />
        <CertificateCard title="Pending Renewals" number="5" />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;*/

// src/pages/DashboardPage.js
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CertificateCard from "../components/CertificateCard";
import styles from '../components/certificate.module.css';

function DashboardPage() {
  const [statistics, setStatistics] = useState({
    totalCertificates: 0,
    expiringSoon: 0,
    pendingRenewals: 0
  });

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/certificates/statistics');
      const data = await response.json();
      setStatistics({
        totalCertificates: data.totalCertificates,
        expiringSoon: data.expiringSoon,
        pendingRenewals: data.pendingRenewals
      });
    } catch (error) {
      console.error('Error fetching certificate statistics:', error);
    }
  };

  return (
    <div>
      <Header />
      <h2 className={styles["heading"]}>Certificate Overview</h2>
      <div className={styles["cards"]}>
        <CertificateCard 
          title="Total Certificates" 
          number={statistics.totalCertificates.toString()} 
        />
        <CertificateCard 
          title="Expiring Soon" 
          number={statistics.expiringSoon.toString()} 
        />
        <CertificateCard 
          title="Pending Renewals" 
          number={statistics.pendingRenewals.toString()} 
        />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
