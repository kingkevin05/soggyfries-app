import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to Our Website!</h1>
      <Link to="/home">Enter the Site</Link>
    </div>
  );
}

export default LandingPage;
