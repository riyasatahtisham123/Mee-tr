import React, { useState } from 'react';
import './MasterDataInput.css';

const MasterDataInput = ({ onSaveData, initialData }) => {
  const [formData, setFormData] = useState(initialData || {
    // Protected Area Attributes
    protectedAreaName: '',
    wdpaId: '',
    dateOfEstablishment: '',
    iucnCategory: 'Ia',
    managementAuthority: '',
    
    // Management Element Scores (Max / Your Score)
    planningScore: 0,
    planningMax: 21,
    inputsScore: 0,
    inputsMax: 18,
    processScore: 0,
    processMax: 60,
    outputsScore: 0,
    outputsMax: 15,
    outcomesScore: 0,
    outcomesMax: 12,

    // Threat Extent & Severity overall
    threatExtentOverall: 0,
    threatSeverityOverall: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(formData);
    alert('Master data saved successfully! Check the Dashboard.');
  };

  return (
    <div className="master-container">
      <h2>METT-4 Master Data Entry</h2>
      <form onSubmit={handleSubmit} className="master-form">
        
        <fieldset>
          <legend>1. Protected Area Attributes</legend>
          <div className="form-group">
            <label>Name of protected area:</label>
            <input 
              type="text" 
              name="protectedAreaName" 
              value={formData.protectedAreaName} 
              onChange={handleChange} 
              placeholder="e.g., National Park Name"
            />
          </div>
          <div className="form-group">
            <label>WDPA site code:</label>
            <input 
              type="text" 
              name="wdpaId" 
              value={formData.wdpaId} 
              onChange={handleChange} 
              placeholder="WDPA ID"
            />
          </div>
          <div className="form-group">
            <label>Date of establishment:</label>
            <input 
              type="date" 
              name="dateOfEstablishment" 
              value={formData.dateOfEstablishment} 
              onChange={handleChange} 
            />
          </div>
          <div className="form-group">
            <label>IUCN Protected Area Category:</label>
            <select name="iucnCategory" value={formData.iucnCategory} onChange={handleChange}>
              <option value="Ia">Ia - Strict Nature Reserve</option>
              <option value="Ib">Ib - Wilderness Area</option>
              <option value="II">II - National Park</option>
              <option value="III">III - Natural Monument or Feature</option>
              <option value="IV">IV - Habitat/Species Management Area</option>
              <option value="V">V - Protected Landscape/Seascape</option>
              <option value="VI">VI - Protected area with sustainable use</option>
            </select>
          </div>
          <div className="form-group">
            <label>Management Authority:</label>
            <input 
              type="text" 
              name="managementAuthority" 
              value={formData.managementAuthority} 
              onChange={handleChange} 
              placeholder="Name of body responsible"
            />
          </div>
        </fieldset>

        <fieldset>
          <legend>2. Management Element Scores (Your Scores)</legend>
          <div className="score-inputs-grid">
            <div className="form-group">
              <label>Planning Score (Max: 21):</label>
              <input type="number" name="planningScore" min="0" max="21" value={formData.planningScore} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Inputs Score (Max: 18):</label>
              <input type="number" name="inputsScore" min="0" max="18" value={formData.inputsScore} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Process Score (Max: 60):</label>
              <input type="number" name="processScore" min="0" max="60" value={formData.processScore} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Outputs Score (Max: 15):</label>
              <input type="number" name="outputsScore" min="0" max="15" value={formData.outputsScore} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Outcomes Score (Max: 12):</label>
              <input type="number" name="outcomesScore" min="0" max="12" value={formData.outcomesScore} onChange={handleChange} />
            </div>
          </div>
        </fieldset>

        <button type="submit" className="save-btn">Save & Update Dashboard</button>
      </form>
    </div>
  );
};

export default MasterDataInput;