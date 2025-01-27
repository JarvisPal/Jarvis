import React from 'react';
import { Shield, Lock, Eye, Database, Cloud, CheckCircle } from 'lucide-react';

export function Security() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-5xl font-bold text-center mb-16">Security & Privacy</h1>
      
      <div className="max-w-3xl mx-auto mb-16">
        <p className="text-xl text-gray-300 text-center">
          At JARVIS, we take your privacy and security seriously. Our desktop assistant is designed
          with a security-first approach, ensuring your data remains private and protected.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-16">
        <SecurityFeature
          icon={<Shield className="w-12 h-12 text-blue-400" />}
          title="Local Processing"
          description="All file processing happens locally on your computer. Your files never leave your system without your explicit permission."
        />
        <SecurityFeature
          icon={<Lock className="w-12 h-12 text-blue-400" />}
          title="End-to-End Encryption"
          description="Any data transmission is secured with military-grade encryption, ensuring your information remains private."
        />
        <SecurityFeature
          icon={<Eye className="w-12 h-12 text-blue-400" />}
          title="Privacy Controls"
          description="Fine-grained privacy settings let you control exactly what JARVIS can access and how it uses your data."
        />
        <SecurityFeature
          icon={<Database className="w-12 h-12 text-blue-400" />}
          title="Secure Storage"
          description="All local data is encrypted at rest using industry-standard encryption protocols."
        />
        <SecurityFeature
          icon={<Cloud className="w-12 h-12 text-blue-400" />}
          title="Optional Cloud Backup"
          description="Choose whether to enable encrypted cloud backups. You maintain full control over your data."
        />
        <SecurityFeature
          icon={<CheckCircle className="w-12 h-12 text-blue-400" />}
          title="Regular Audits"
          description="Our security measures are regularly audited by independent security firms to ensure the highest standards."
        />
      </div>

      <div className="bg-gray-800 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-center mb-8">Our Security Commitment</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
          <p>
            JARVIS is built with security at its core. We understand that your files and data are
            sensitive, which is why we've implemented multiple layers of security to protect your
            information.
          </p>
          <p>
            Our team regularly updates security measures to stay ahead of potential threats, and we
            maintain transparency about our security practices. You can trust JARVIS to handle your
            data with the utmost care and protection.
          </p>
        </div>
      </div>
    </div>
  );
}

function SecurityFeature({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-gray-700 p-8 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}