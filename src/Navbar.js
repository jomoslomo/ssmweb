import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-title">
          Navigate
        </div>
        <ul className="navbar-links">
          {/* Add links to other pages */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/self-sensing-materials">Self-Sensing Materials</Link>
          </li>
          <li>
            <Link to="/testing-monitoring">Testing & Monitoring</Link>
          </li>
          <li>
            <Link to="/implementation">Implementation</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
