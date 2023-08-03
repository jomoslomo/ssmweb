import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './Home.css'; // Import the Home.css file

const Home = () => {
  return (
    <div>
      {/* Left-side Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="home-content">
        <header className="home-header">
          <h1>Welcome to the Self-Sensing Materials Project</h1>
        </header>
        <p>
          Delve into the fascinating world of self-sensing cementitious composites, where traditional materials gain the ability to monitor their structural health in real-time.
        </p>
        <p>
          Our mission is to educate and empower visitors like you with valuable insights into the significance, applications, and mechanisms of self-sensing materials in civil engineering and materials science.
        </p>
        <div className="cta-button">
          <a href="#learn-more">Learn More</a>
        </div>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <p>Contact: <a href="mailto:ysu@lsu.edu">ysu@lsu.edu</a></p>
      </footer>
    </div>
  );
};

export default Home;
