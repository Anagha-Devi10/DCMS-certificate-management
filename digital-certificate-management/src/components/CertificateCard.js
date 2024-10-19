// src/components/CertificateCard.js
import React from 'react';
import './Components.css';

function CertificateCard({ title, number }) {
  return (
    <div className="box">
      <div className="number"><h1>{number}</h1></div>
      <p className="title">{title}</p>
    </div>
  );
}

export default CertificateCard;
