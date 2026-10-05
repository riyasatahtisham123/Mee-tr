import React, { useState, useEffect } from 'react';
import './detailedassessment.css';

const DetailedAssessmentThreats = () => {
  // Initial rows data structure
  const initialThreats = [
    { id: 1, category: '1: Residential and commercial development within a protected area', threat: 'Housing and settlement', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 2, category: '1: Residential and commercial development within a protected area', threat: 'Commercial and industrial areas', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 3, category: '1: Residential and commercial development within a protected area', threat: 'Tourism and recreation infrastructure', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 4, category: '2: Agriculture and aquaculture within a protected area', threat: 'Annual and perennial non-timber crop cultivation', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 5, category: '2: Agriculture and aquaculture within a protected area', threat: 'Drug cultivation (narcotics and other illegal drugs)', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 6, category: '3: Energy production and mining', threat: 'Oil and gas extraction', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 7, category: '3: Energy production and mining', threat: 'Mining and quarrying', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 1, category: '1: Residential and commercial development within a protected area', threat: 'Housing and settlement', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 2, category: '1: Residential and commercial development within a protected area', threat: 'Commercial and industrial areas', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 3, category: '1: Residential and commercial development within a protected area', threat: 'Tourism and recreation infrastructure', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 4, category: '2: Agriculture and aquaculture within a protected area', threat: 'Annual and perennial non-timber crop cultivation', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 5, category: '2: Agriculture and aquaculture within a protected area', threat: 'Drug cultivation (narcotics and other illegal drugs)', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 6, category: '3: Energy production and mining', threat: 'Oil and gas extraction', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 7, category: '3: Energy production and mining', threat: 'Mining and quarrying', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 1, category: '1: Residential and commercial development within a protected area', threat: 'Housing and settlement', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 2, category: '1: Residential and commercial development within a protected area', threat: 'Commercial and industrial areas', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 3, category: '1: Residential and commercial development within a protected area', threat: 'Tourism and recreation infrastructure', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 4, category: '2: Agriculture and aquaculture within a protected area', threat: 'Annual and perennial non-timber crop cultivation', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 5, category: '2: Agriculture and aquaculture within a protected area', threat: 'Drug cultivation (narcotics and other illegal drugs)', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 6, category: '3: Energy production and mining', threat: 'Oil and gas extraction', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 7, category: '3: Energy production and mining', threat: 'Mining and quarrying', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 1, category: '1: Residential and commercial development within a protected area', threat: 'Housing and settlement', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 2, category: '1: Residential and commercial development within a protected area', threat: 'Commercial and industrial areas', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 3, category: '1: Residential and commercial development within a protected area', threat: 'Tourism and recreation infrastructure', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 4, category: '2: Agriculture and aquaculture within a protected area', threat: 'Annual and perennial non-timber crop cultivation', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 5, category: '2: Agriculture and aquaculture within a protected area', threat: 'Drug cultivation (narcotics and other illegal drugs)', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 6, category: '3: Energy production and mining', threat: 'Oil and gas extraction', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    { id: 7, category: '3: Energy production and mining', threat: 'Mining and quarrying', description: '', affectedValue: '', extent: '', severity: '', source: '', response: '', notes: '' },
    // Aap ishi pattern par baaki rows bhi add kar sakte hain
  ];

  const [threats, setThreats] = useState(() => {
    const saved = localStorage.getItem('detailed_threats_data');
    return saved ? JSON.parse(saved) : initialThreats;
  });

  useEffect(() => {
    localStorage.setItem('detailed_threats_data', JSON.stringify(threats));
  }, [threats]);

  const handleChange = (id, field, value) => {
    const updated = threats.map((item) => {
      if (item.id === id) {
        return { ...item, [field]: value };
      }
      return item;
    });
    setThreats(updated);
  };

  return (
    <div className="detailed-assessment-container">
      <h2>Detailed Assessment of Threats</h2>
      <div className="table-responsive">
        <table className="excel-table">
          <thead>
            <tr>
              <th className="header-teal">Threat category</th>
              <th className="header-teal">Threat</th>
              <th className="header-teal">Description</th>
              <th className="header-teal">Which of the main values is most affected</th>
              <th className="header-teal">Threat extent</th>
              <th className="header-teal">Threat severity</th>
              <th className="header-teal">Source of information</th>
              <th className="header-teal">Management response</th>
              <th className="header-teal">Notes</th>
            </tr>
          </thead>
          <tbody>
            {threats.map((item) => (
              <tr key={item.id}>
                <td className="category-cell">{item.category}</td>
                <td>{item.threat}</td>
                <td>
                  <input
                    type="text"
                    className="excel-input"
                    value={item.description}
                    onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                    placeholder="Enter description"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="excel-input"
                    value={item.affectedValue}
                    onChange={(e) => handleChange(item.id, 'affectedValue', e.target.value)}
                    placeholder="Affected value"
                  />
                </td>
                <td>
                  <select
                    className="excel-select"
                    value={item.extent}
                    onChange={(e) => handleChange(item.id, 'extent', e.target.value)}
                  >
                    <option value="">Select extent</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <select
                    className="excel-select"
                    value={item.severity}
                    onChange={(e) => handleChange(item.id, 'severity', e.target.value)}
                  >
                    <option value="">Select severity</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </td>
                <td>
                  <input
                    type="text"
                    className="excel-input"
                    value={item.source}
                    onChange={(e) => handleChange(item.id, 'source', e.target.value)}
                    placeholder="Source"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="excel-input"
                    value={item.response}
                    onChange={(e) => handleChange(item.id, 'response', e.target.value)}
                    placeholder="Response"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="excel-input"
                    value={item.notes}
                    onChange={(e) => handleChange(item.id, 'notes', e.target.value)}
                    placeholder="Notes"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailedAssessmentThreats;