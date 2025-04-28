import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // keep this

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Greenleaf</h1>
        <p>Your one-stop houseplant shop!</p>
        <button onClick={() => navigate('/products')}>Get Started</button>
      </div>
    </div>
  );
}

export default LandingPage;
