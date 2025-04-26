import React from 'react';
import { Incident } from '../types';
import { formatDate } from '../utils/dateUtils';
import { useIncidents } from '../context/IncidentContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const { expandedIncidentIds, toggleExpandIncident } = useIncidents();
  const isExpanded = expandedIncidentIds.includes(incident.id);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Low':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-4 overflow-hidden transition-all duration-200 hover:shadow-md">
      <div className="p-4">
        <div className="flex flex-wrap items-start gap-3">
          <h3 className="text-lg font-semibold text-gray-800 flex-grow">{incident.title}</h3>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(incident.severity)}`}>
              {incident.severity}
            </span>
            <span className="text-sm text-gray-500">{formatDate(incident.reported_at)}</span>
          </div>
        </div>
        
        <button
          onClick={() => toggleExpandIncident(incident.id)}
          className="mt-3 flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
        >
          {isExpanded ? (
            <>
              Hide Details <ChevronUp className="ml-1 w-4 h-4" />
            </>
          ) : (
            <>
              View Details <ChevronDown className="ml-1 w-4 h-4" />
            </>
          )}
        </button>
      </div>
      
      {isExpanded && (
        <div className="px-4 pb-4 pt-1 bg-gray-50 border-t border-gray-100 animate-fadeIn">
          <p className="text-gray-700">{incident.description}</p>
        </div>
      )}
    </div>
  );
};

export default IncidentItem;