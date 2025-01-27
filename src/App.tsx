import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Features } from './pages/Features';
import { Security } from './pages/Security';
import { DownloadPage } from './pages/Download';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      <div className="pt-20"> {/* Add padding top to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/security" element={<Security />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;