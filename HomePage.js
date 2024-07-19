import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Our Application</h1>
        <p className="hero-subtitle">Your one-stop solution for leave management</p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="features-section">
        <h2 className="features-title">Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Easy Leave Requests</h3>
            <p>Submit your leave requests quickly and easily.</p>
          </div>
          <div className="feature-item">
            <h3>Track Approvals</h3>
            <p>Stay updated on the status of your leave approvals.</p>
          </div>
          <div className="feature-item">
            <h3>Manage Team Leaves</h3>
            <p>Managers can view and manage team leave schedules.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
