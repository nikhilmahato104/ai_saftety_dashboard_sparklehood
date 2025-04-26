import React from 'react';
import { SeverityFilter, SortOrder } from '../types';
import { useIncidents } from '../context/IncidentContext';
import { Filter, SortDesc, SortAsc } from 'lucide-react';

const FilterSort: React.FC = () => {
  const { 
    severityFilter, 
    setSeverityFilter, 
    sortOrder, 
    setSortOrder 
  } = useIncidents();

  const severityOptions: SeverityFilter[] = ["All", "Low", "Medium", "High"];

  return (
    <div className="bg-white rounded-lg shadow p-4 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="flex items-center">
          <Filter className="w-5 h-5 text-gray-500 mr-2" />
          <span className="text-gray-700 font-medium mr-3">Filter by:</span>
          <div className="flex flex-wrap gap-2">
            {severityOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSeverityFilter(option)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  severityFilter === option
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center sm:ml-auto">
          <span className="text-gray-700 font-medium mr-3">Sort by:</span>
          <div className="flex gap-2">
            <button
              onClick={() => setSortOrder('newest')}
              className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                sortOrder === 'newest'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <SortDesc className="w-4 h-4 mr-1" />
              Newest
            </button>
            <button
              onClick={() => setSortOrder('oldest')}
              className={`flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                sortOrder === 'oldest'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <SortAsc className="w-4 h-4 mr-1" />
              Oldest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSort;