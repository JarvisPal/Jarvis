import React from 'react';
import { Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bot className="w-6 h-6 text-blue-400" />
              <span className="text-xl font-bold">JARVIS</span>
            </div>
            <p className="text-gray-400">
              Your intelligent desktop assistant for seamless file management and automation.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-blue-400">Home</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-blue-400">Features</Link></li>
              <li><Link to="/security" className="text-gray-400 hover:text-blue-400">Security</Link></li>
              <li><Link to="/download" className="text-gray-400 hover:text-blue-400">Download</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@jarvis.ai</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-blue-400">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-blue-400">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} JARVIS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}