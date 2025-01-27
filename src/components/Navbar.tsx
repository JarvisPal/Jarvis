import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold">JARVIS</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/features" className="hover:text-blue-400 transition-colors">Features</Link>
            <Link to="/security" className="hover:text-blue-400 transition-colors">Security</Link>
            <Link to="/download" className="hover:text-blue-400 transition-colors">Download</Link>
            <Link to="/download" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors">
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/security" 
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Security
              </Link>
              <Link 
                to="/download" 
                className="hover:text-blue-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
              <Link 
                to="/download" 
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors inline-block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}