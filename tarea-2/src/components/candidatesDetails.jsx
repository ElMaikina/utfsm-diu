import React from 'react';
import '../stylesheets/CandidateDetails.css';

function CandidateDetailsModal({ candidato, onClose }) {
  return (
    <div className="candidate-details-modal">
      <div className="candidate-details-modal__content">
        <h2>Detalles del Candidato</h2>
        <p><strong>Nombre:</strong> {candidato.name}</p>
        <p><strong>Estado:</strong> {candidato.statusText}</p>
        <button className="candidate-details-modal__close-button" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default CandidateDetailsModal;