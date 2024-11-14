import React from 'react';
import '../stylesheets/Candidates.css';

function CandidatesFilter({ orden, onOrdenChange }) {
  return (
    <div className="candidates__filters">
      <label>Ordenar por:</label>
      <select value={orden} onChange={(e) => onOrdenChange(e.target.value)}>
        <option value="">Seleccionar</option>
        <option value="nota">Nota (de mayor a menor)</option>
        <option value="riesgo">Riesgo Académico (de bajo a alto)</option>
        <option value="status">Status (Ayudante anterior primero)</option>
      </select>
    </div>
  );
}

export default CandidatesFilter;
