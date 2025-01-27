import React from 'react';
import { Download, AppWindow as Windows, Apple, Link as Linux } from 'lucide-react';

export function DownloadPage() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-16">Download JARVIS</h1>
      
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-xl text-gray-300 text-center">
          Choose your platform and get started with JARVIS today. All versions come with a 30-day
          free trial with full features unlocked.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8 mb-16">
        <DownloadCard
          icon={<Windows className="w-12 h-12 text-blue-400" />}
          platform="Windows"
          version="2.1.0"
          requirements="Windows 10 or later"
        />
        <DownloadCard
          icon={<Apple className="w-12 h-12 text-blue-400" />}
          platform="macOS"
          version="2.1.0"
          requirements="macOS 11.0 or later"
        />
        <DownloadCard
          icon={<Linux className="w-12 h-12 text-blue-400" />}
          platform="Linux"
          version="2.1.0"
          requirements="Ubuntu 20.04 or later"
        />
      </div>

      <div className="bg-gray-800 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-center mb-8">System Requirements</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Minimum Requirements</h3>
            <ul className="space-y-2 text-gray-300">
              <li>4GB RAM</li>
              <li>2GHz Dual Core Processor</li>
              <li>1GB Free Disk Space</li>
              <li>Internet connection for updates</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Recommended</h3>
            <ul className="space-y-2 text-gray-300">
              <li>8GB RAM</li>
              <li>2.5GHz Quad Core Processor</li>
              <li>2GB Free Disk Space</li>
              <li>SSD Storage</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function DownloadCard({ 
  icon, 
  platform, 
  version, 
  requirements 
}: { 
  icon: React.ReactNode, 
  platform: string, 
  version: string, 
  requirements: string 
}) {
  return (
    <div className="bg-gray-700 p-8 rounded-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{platform}</h3>
      <p className="text-gray-300 mb-4">Version {version}</p>
      <p className="text-sm text-gray-400 mb-6">{requirements}</p>
      <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2">
        <Download className="w-5 h-5" />
        <span>Download</span>
      </button>
    </div>
  );
}