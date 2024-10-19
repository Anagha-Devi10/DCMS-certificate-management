// src/pages/RenewalRequestsPage.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RenewalRequestsPage() {
  const renewals = [
    { id: 123456, requestDate: '2024-09-10', status: 'Pending' }
    // Add more renewal requests as needed
  ];

  return (
    <div>
      <Header />
      <section>
        <h2>Pending Renewals</h2>
        <table>
          <thead>
            <tr>
              <th>Certificate ID</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {renewals.map((renewal) => (
              <tr key={renewal.id}>
                <td>{renewal.id}</td>
                <td>{renewal.requestDate}</td>
                <td>{renewal.status}</td>
                <td>
                  <button>Approve</button>
                  <button>Reject</button>
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

export default RenewalRequestsPage;
