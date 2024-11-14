import React from 'react';
import '../stylesheets/Candidates.css';
import '../stylesheets/Finalizar.css';

function SelectedList({ seleccionados, onRemove, onMoreInfo }) {
  return (
    <div className="candidates__column--seleccionados">
      <h2 className="candidates__title">Seleccionados</h2>
      <ul className=" candidates__list--selected">
        {seleccionados.map((seleccionado) => (
          <li key={seleccionado.id} className="candidates__item--selected">
            <div className="candidates__info">
              <span className="candidates__name">{seleccionado.name}</span>
            </div>
            <div className="candidates__buttons">
              <button 
                className="candidates__button candidates__button--more-info candidates__button--discrete"
                onClick={() => onMoreInfo(seleccionado.id)}
              >
                Más información
              </button>
              <button 
                className="candidates__button candidates__button--remove"
                onClick={() => onRemove(seleccionado.id)}
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectedList;
