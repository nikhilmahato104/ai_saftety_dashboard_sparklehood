import React from 'react';
import FilterSort from './FilterSort';
import IncidentList from './IncidentList';
import IncidentForm from './IncidentForm';

const Dashboard: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <FilterSort />
          <IncidentList />
        </div>
        
        <div className="lg:col-span-1">
          <IncidentForm />
          
          <div className="bg-white rounded-lg shadow p-5">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">About AI Safety</h3>
            <p className="text-gray-600 mb-4">
              AI safety is critical as artificial intelligence systems become more powerful and autonomous. 
              Tracking and addressing incidents helps us build safer, more trustworthy AI.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <p className="text-sm text-blue-700">
                <strong>HumanChain's Mission:</strong> Building a safer, more trustworthy, and human-centric digital world through responsible AI development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;