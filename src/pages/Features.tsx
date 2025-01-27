import React from 'react';
import { FeatureCard } from '../components/FeatureCard';
import { Link } from 'react-router-dom';

export function Features() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-16">Features</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <FeatureCard 
          title="Smart File Search"
          description="Use natural language to find any file on your computer instantly. JARVIS understands context and learns from your search patterns."
          icon="FileSearch"
        />
        <FeatureCard 
          title="Secure & Private"
          description="Your files remain local and secure. JARVIS operates entirely on your computer with no data sent to external servers."
          icon="Shield"
        />
        <FeatureCard 
          title="Task Automation"
          description="Automate repetitive tasks with voice commands. Create custom workflows and let JARVIS handle the tedious work."
          icon="Zap"
        />
        <FeatureCard 
          title="Smart Organization"
          description="Automatically organize files based on type, content, and your usage patterns. Keep your desktop clean and efficient."
          icon="Folder"
        />
        <FeatureCard 
          title="Custom Commands"
          description="Create personalized commands to streamline your workflow. Teach JARVIS new tricks that match your needs."
          icon="Command"
        />
        <FeatureCard 
          title="AI-Powered Insights"
          description="Get intelligent suggestions based on your file usage and work habits. Let JARVIS help you work smarter."
          icon="Bot"
        />
      </div>

      <div className="bg-gray-800 rounded-lg p-8 lg:p-12 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Ready to Experience These Features?</h2>
        <p className="text-lg lg:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Download JARVIS now and transform how you interact with your computer.
        </p>
        <Link 
          to="/download" 
          className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition-colors"
        >
          Get Started Free
        </Link>
      </div>
    </div>
  );
}