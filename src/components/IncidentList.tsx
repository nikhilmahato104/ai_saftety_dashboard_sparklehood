import React, { useMemo } from 'react';
import { useIncidents } from '../context/IncidentContext';
import IncidentItem from './IncidentItem';
import { Incident } from '../types';

const IncidentList: React.FC = () => {
  const { incidents, severityFilter, sortOrder } = useIncidents();

  const filteredAndSortedIncidents = useMemo(() => {
    // First filter by severity
    const filtered = severityFilter === 'All' 
      ? incidents 
      : incidents.filter(incident => incident.severity === severityFilter);
    
    // Then sort by date
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
  }, [incidents, severityFilter, sortOrder]);

  if (filteredAndSortedIncidents.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-500">No incidents found matching the current filters.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredAndSortedIncidents.map((incident: Incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList;