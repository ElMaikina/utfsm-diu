import React from 'react';
import '../stylesheets/CandidateDetails.css';

function CandidateDetailsModal({ candidato, onClose }) {
  return (
    <div className="candidate-details-modal">
      <div className="candidate-details-modal__content">
        <h2>Detalles del Candidato</h2>
        <p><strong>Nombre:</strong> {candidato.name}</p>
        <p><strong>Estado:</strong> {candidato.statusText}</p>
        <p><strong>Nota del Ramo:</strong> {candidato.grade}</p>
        <p><strong>Riesgo Académico:</strong> {candidato.academicRisk}</p>
        <p><strong>Créditos Tomados:</strong> {candidato.creditsTaken}</p>
        <button className="candidate-details-modal__close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default CandidateDetailsModal;