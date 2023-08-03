import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import SelfSensingMaterialsPage from './SelfSensingMaterialsPage';
import TestingMonitoringPage from './TestingMonitoringPage';
import ImplementationPage from './ImplementationPage';
import ResourcesPage from './ResourcesPage';
import ContactPage from './ContactPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/self-sensing-materials" element={<SelfSensingMaterialsPage />} />
          <Route path="/testing-monitoring" element={<TestingMonitoringPage />} />
          <Route path="/implementation" element={<ImplementationPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
