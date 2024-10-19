// src/components/Form.js
import React from 'react';
import './Components.css';

function Form({ title, onSubmit, children }) {
  return (
    <div className="form-container">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
