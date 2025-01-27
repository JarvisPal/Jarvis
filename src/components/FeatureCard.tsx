import React from 'react';
import { FileSearch, Shield, Zap, Folder, Command, Bot } from 'lucide-react';

const icons = {
  FileSearch,
  Shield,
  Zap,
  Folder,
  Command,
  Bot
};

type IconName = keyof typeof icons;

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const Icon = icons[icon];
  
  return (
    <div className="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors">
      <div className="mb-4">
        <Icon className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}