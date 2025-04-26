import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-6 px-6 shadow-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center flex-wrap gap-4">
          <div className="flex items-center">
            <Shield className="w-10 h-10 mr-3" />
            <h1 className="text-2xl sm:text-3xl font-bold">HumanChain</h1>
          </div>
          <div className="ml-auto text-sm sm:text-base opacity-90">
            Building a safer, more trustworthy AI future
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold">AI Safety Incident Dashboard</h2>
          <p className="mt-2 text-sm sm:text-base max-w-2xl opacity-80">
            Track, monitor, and report AI safety incidents to help create a more responsible AI ecosystem.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;