// src/pages/ManageCertificates.js
import React from "react";
// import './manage_certificates.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./manage_certificates.module.css";

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

  return (
    <div>
      <Header />
      <section>
        <h2>Manage Certificates</h2>
        <table>
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
                  <button>Edit</button>

                  <button className={styles["dlt"]}>Delete</button>
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
