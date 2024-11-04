import React, { useState } from 'react';

function Candidates() {
  const [postulantes, setPostulantes] = useState(['Juan', 'Maria', 'Carlos', 'Ana']);
  const [seleccionados, setSeleccionados] = useState([]);

  // Mueve un postulante a la lista de seleccionados
  const seleccionarPostulante = (nombre) => {
    setPostulantes(postulantes.filter((postulante) => postulante !== nombre));
    setSeleccionados([...seleccionados, nombre]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
      {/* Columna de postulantes */}
      <div style={{ width: '45%', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Postulantes</h2>
        <ul>
          {postulantes.map((postulante) => (
            <li key={postulante} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span>{postulante}</span>
              <button onClick={() => seleccionarPostulante(postulante)}>Seleccionar</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Columna de seleccionados */}
      <div style={{ width: '45%', padding: '10px', border: '1px solid #ccc' }}>
        <h2>Seleccionados</h2>
        <ul>
          {seleccionados.map((seleccionado) => (
            <li key={seleccionado}>{seleccionado}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Candidates;