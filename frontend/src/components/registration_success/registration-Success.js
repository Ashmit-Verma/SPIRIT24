// frontend/src/page/registrationSuccess.js
import React from 'react';
import './registration-Success.css';

const RegistrationSuccess = () => {
  return (
    <div className="Success-wrap">
      
      <div className="texts">
        <h1 className="success-message">Registration Successful!</h1>
        <p className="logged-in-message">You have successfully logged in.</p>
        <p className="ca-program-message">CA Program will be live soon...</p>
      </div>
      
    </div>
  );
};

export default RegistrationSuccess;
