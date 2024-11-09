import React, { useState } from 'react';
import axios from 'axios';

function CertificateForm({ onSubmit }) {
  const [certificateData, setCertificateData] = useState({
    serialNumber: '',
    subject: '',
    issuer: '',
    expiryDate: '',
    status: 'Active',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (event) => {
    setCertificateData({
      ...certificateData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Convert the date string to LocalDateTime format
    const formattedData = {
      ...certificateData,
      expiryDate: new Date(certificateData.expiryDate).toISOString(),
    };

    try {
      const response = await axios.post(
        'http://localhost:8080/api/certificates',
        formattedData
      );

      console.log('Certificate created successfully:', response.data);
      setSuccess('Certificate created successfully!');
      
      // Clear form
      setCertificateData({
        serialNumber: '',
        subject: '',
        issuer: '',
        expiryDate: '',
        status: 'Active',
      });

      // Call the onSubmit prop if provided
      if (onSubmit) {
        onSubmit(response.data);
      }
    } catch (error) {
      console.error('Error creating certificate:', error);
      setError(error.response?.data?.message || 'Failed to create certificate. Please try again.');
    }
  };

  return (
    <div className="certificate-form">
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="serialNumber">Serial Number:</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={certificateData.serialNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={certificateData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="issuer">Issuer:</label>
          <input
            type="text"
            id="issuer"
            name="issuer"
            value={certificateData.issuer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input
            type="date"
            id="expiryDate"
            name="expiryDate"
            value={certificateData.expiryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={certificateData.status}
            onChange={handleChange}
          >
            <option value="Active">Active</option>
            <option value="Expired">Expired</option>
            <option value="Pending Renewal">Pending Renewal</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CertificateForm;