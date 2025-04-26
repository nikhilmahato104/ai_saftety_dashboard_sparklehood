import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { IncidentProvider } from './context/IncidentContext';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <IncidentProvider>
        <Header />
        <main>
          <Dashboard />
        </main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
            <p>© 2025 HumanChain. All rights reserved.</p>
            <p className="mt-2">Building a safer AI future through transparency and accountability.</p>
          </div>
        </footer>
      </IncidentProvider>
    </div>
  );
}

export default App;