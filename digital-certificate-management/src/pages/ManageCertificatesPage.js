// src/pages/ManageCertificates.js
import React, { useState } from 'react';
// import './manage_certificates.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./manage_certificates.module.css";
import CertificateForm from "../components/CertificateForm";

function ManageCertificatesPage() {
  const certificates = [
    {
      id: 123456,
      subject: "www.example.com",
      issuer: "Let's Encrypt",
      expiry: "2024-10-01",
      status: "Active", 
    },
    // Add more certificates as needed
  ];

  const [isEdittingCertificate, setIsEdittingCertificate] = useState(null); // Track certificate being edited

  const handleEditSubmit = (editedCertificate) => {
    // Send edited certificate data to backend for update
    console.log('Edited certificate:', editedCertificate);
    // Replace with logic to update certificate data on backend
    // ... update certificates state if successful
    setIsEdittingCertificate(null); // Exit edit mode
  };

  const handleEditClick = (certificateId) => {
    setIsEdittingCertificate(certificateId); // Set id of certificate to edit
  };

  return (
    <div>
      <Header />
      <section>
        <h2 className={styles["h2"]}>Manage Certificates</h2>
        <table className={styles["table"]}>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Subject</th>
              <th>Issuer</th>
              <th>Expiry Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {certificates.map((certificate) => (
              <tr key={certificate.id}>
                <td>{certificate.id}</td>
                <td>{certificate.subject}</td>
                <td>{certificate.issuer}</td>
                <td>{certificate.expiry}</td>
                <td>{certificate.status}</td>
                <td>
                {isEdittingCertificate === certificate.id ? (
                  // Render edit form if certificate is being edited
                  <CertificateForm certificate={certificate} onSubmit={handleEditSubmit}/>
                ) : (
                  <button onClick={() => handleEditClick(certificate.id)}>
                    Edit
                  </button>
                )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Footer />
    </div>
  );
}

export default ManageCertificatesPage;
