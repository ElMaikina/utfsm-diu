import React from 'react';
import '../stylesheets/Candidates.css';
import '../stylesheets/Finalizar.css';

function SelectedList({ seleccionados, onRemove }) {
  return (
    <div className="candidates__column candidates__column--seleccionados">
      <h2 className="candidates__title">Seleccionados</h2>
      <ul className="candidates__list">
        {seleccionados.map((seleccionado) => (
          <li key={seleccionado.id} className="candidates__item">
            <div className="candidates__info">
              <span className="candidates__name">{seleccionado.name}</span>
            </div>
            <button 
              className="candidates__button candidates__button--remove"
              onClick={() => onRemove(seleccionado.id)}
            >
              Quitar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedList;
