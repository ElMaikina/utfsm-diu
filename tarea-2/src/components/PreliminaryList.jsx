import React from 'react';
import '../stylesheets/Candidates.css';

function PreliminaryList({ postulantes, onSelect, onMoreInfo }) {
  return (
    <div className="candidates__column candidates__column--postulantes">
      <h2 className="candidates__title">Postulantes</h2>
      <div className="candidates__list">
        {postulantes.map((postulante) => (
          <div key={postulante.id} className="candidates__item">
            <div className="candidates__info">
              <span className="candidates__name">{postulante.name}</span>
              <div className="candidates__status">
                <span className={`candidates__status-icon candidates__status-icon--${postulante.status}`}></span>
                <span>{postulante.statusText}</span>
              </div>
            </div>
            <div className="candidates__buttons">
              <button
                className="candidates__button candidates__button--more-info candidates__button--discrete"
                onClick={() => onMoreInfo(postulante.id)}
              >
                Más información
              </button>
              <button
                className="candidates__button candidates__button--select"
                onClick={() => onSelect(postulante.id)}
              >
                Seleccionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreliminaryList;
