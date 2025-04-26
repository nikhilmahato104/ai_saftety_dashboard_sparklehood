import React, { useState } from 'react';
import { useIncidents } from '../context/IncidentContext';
import { AlertTriangle, X } from 'lucide-react';

const IncidentForm: React.FC = () => {
  const { addIncident } = useIncidents();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    severity: 'Medium' as 'Low' | 'Medium' | 'High'
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate a brief loading state
    setTimeout(() => {
      addIncident(formData);
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        severity: 'Medium'
      });
      
      setIsSubmitting(false);
      setIsFormVisible(false);
    }, 500);
  };

  return (
    <div className="mb-8">
      {!isFormVisible ? (
        <button
          onClick={() => setIsFormVisible(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm"
        >
          <AlertTriangle className="inline-block w-5 h-5 mr-2" />
          Report New Incident
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
          <div className="flex items-center justify-between bg-blue-600 text-white px-4 py-3">
            <h3 className="font-semibold">Report New AI Safety Incident</h3>
            <button 
              onClick={() => setIsFormVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              <label htmlFor="title" className="block text-gray-700 font-medium mb-1">
                Incident Title*
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter a descriptive title"
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.title && <p className="mt-1 text-red-500 text-sm">{errors.title}</p>}
            </div>
            
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700 font-medium mb-1">
                Incident Description*
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide details about what happened..."
                rows={4}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.description ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.description && <p className="mt-1 text-red-500 text-sm">{errors.description}</p>}
            </div>
            
            <div className="mb-5">
              <label htmlFor="severity" className="block text-gray-700 font-medium mb-1">
                Severity Level*
              </label>
              <select
                id="severity"
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
            
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setIsFormVisible(false)}
                className="mr-3 px-4 py-2 text-gray-600 hover:text-gray-800 font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Incident'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default IncidentForm;