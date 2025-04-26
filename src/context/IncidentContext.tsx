import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Incident, SeverityFilter, SortOrder } from '../types';
import { mockIncidents } from '../data/mockData';

interface IncidentContextType {
  incidents: Incident[];
  addIncident: (incident: Omit<Incident, 'id' | 'reported_at'>) => void;
  severityFilter: SeverityFilter;
  setSeverityFilter: (filter: SeverityFilter) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  expandedIncidentIds: number[];
  toggleExpandIncident: (id: number) => void;
}

const IncidentContext = createContext<IncidentContextType | undefined>(undefined);

export const useIncidents = () => {
  const context = useContext(IncidentContext);
  if (!context) {
    throw new Error('useIncidents must be used within an IncidentProvider');
  }
  return context;
};

interface IncidentProviderProps {
  children: ReactNode;
}

export const IncidentProvider: React.FC<IncidentProviderProps> = ({ children }) => {
  const [incidents, setIncidents] = useState<Incident[]>(mockIncidents);
  const [severityFilter, setSeverityFilter] = useState<SeverityFilter>("All");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [expandedIncidentIds, setExpandedIncidentIds] = useState<number[]>([]);

  const addIncident = (newIncident: Omit<Incident, 'id' | 'reported_at'>) => {
    const incident: Incident = {
      ...newIncident,
      id: Math.max(0, ...incidents.map(i => i.id)) + 1,
      reported_at: new Date().toISOString()
    };
    
    setIncidents((prevIncidents) => [incident, ...prevIncidents]);
  };

  const toggleExpandIncident = (id: number) => {
    setExpandedIncidentIds((prevIds) => 
      prevIds.includes(id) 
        ? prevIds.filter((incidentId) => incidentId !== id)
        : [...prevIds, id]
    );
  };

  const value = {
    incidents,
    addIncident,
    severityFilter,
    setSeverityFilter,
    sortOrder,
    setSortOrder,
    expandedIncidentIds,
    toggleExpandIncident
  };

  return (
    <IncidentContext.Provider value={value}>
      {children}
    </IncidentContext.Provider>
  );
};