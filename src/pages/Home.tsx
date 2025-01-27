import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';
import { ContactForm } from '../components/ContactForm';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Your Personal AI Assistant for Desktop
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              JARVIS seamlessly integrates with your computer, providing intelligent file management
              and desktop automation that adapts to your workflow.
            </p>
            <Link 
              to="/download"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <span>Get Started for free</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <img 
              src="https://ibb.co/Ns2Z3zx?auto=format&fit=crop&w=800&q=80" 
              alt="AI Interface"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </header>

      {/* Features Preview Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">Powerful Features</h2>
          <p className="text-lg lg:text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
            Discover how JARVIS can transform your desktop experience with intelligent features
            designed to boost your productivity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Smart File Search"
              description="Find any file instantly using natural language."
              icon="FileSearch"
            />
            <FeatureCard 
              title="Secure & Private"
              description="Your data stays local and protected."
              icon="Shield"
            />
            <FeatureCard 
              title="Task Automation"
              description="Automate repetitive tasks effortlessly."
              icon="Zap"
            />
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/features"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center space-x-2"
            >
              <span>View All Features</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}
