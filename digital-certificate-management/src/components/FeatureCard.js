// src/components/FeatureCard.js
import React from 'react';
import './Components.css';

function FeatureCard({ title, description }) {
  return (
    <div className="feature">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
