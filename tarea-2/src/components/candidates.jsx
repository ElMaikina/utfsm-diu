// Candidates.jsx
import React, { useState, useEffect } from 'react';
import { candidatesBySubject } from '../assets/mockData';
import PreliminaryList from './PreliminaryList';
import SelectedList from './SelectedList';
import CandidateDetailsModal from './CandidateDetailsModal'; // Import the new modal component
import '../stylesheets/Candidates.css';

function Candidates({ selectedSubject }) {
  const [postulantes, setPostulantes] = useState(candidatesBySubject[selectedSubject] || []);
  const [seleccionados, setSeleccionados] = useState([]);
  const [candidatoSeleccionado, setCandidatoSeleccionado] = useState(null); // State to track selected candidate for more info
  const [orden, setOrden] = useState(''); // State to track the current order filter

  useEffect(() => {
    setPostulantes(candidatesBySubject[selectedSubject] || []);
    setSeleccionados([]); // Reset selected candidates when the subject changes
  }, [selectedSubject]);

  useEffect(() => {
    ordenarPostulantes();
  }, [orden]);

  const ordenarPostulantes = () => {
    let ordenados = [...postulantes];
    if (orden === 'nota') {
      ordenados.sort((a, b) => b.grade - a.grade);
    } else if (orden === 'riesgo') {
      const riesgoOrden = { bajo: 1, medio: 2, alto: 3 };
      ordenados.sort((a, b) => riesgoOrden[a.academicRisk] - riesgoOrden[b.academicRisk]);
    } else if (orden === 'status') {
      const statusOrden = { 'previous-assistant': 1, 'meets-requirements': 2, 'other-application': 3 };
      ordenados.sort((a, b) => statusOrden[a.status] - statusOrden[b.status]);
    }
    setPostulantes(ordenados);
  };

  const seleccionarPostulante = (id) => {
    const candidato = postulantes.find((postulante) => postulante.id === id);
    setPostulantes(postulantes.filter((postulante) => postulante.id !== id));
    setSeleccionados([...seleccionados, candidato]);
  };

  const quitarPostulante = (id) => {
    const candidato = seleccionados.find((seleccionado) => seleccionado.id === id);
    setSeleccionados(seleccionados.filter((seleccionado) => seleccionado.id !== id));
    setPostulantes([...postulantes, candidato]);
  };

  const mostrarMasInformacion = (id) => {
    const candidato = postulantes.find((postulante) => postulante.id === id) ||
                      seleccionados.find((seleccionado) => seleccionado.id === id);
    setCandidatoSeleccionado(candidato);
  };

  const cerrarMasInformacion = () => {
    setCandidatoSeleccionado(null);
  };

  return (
    <div className="candidates">
      <div className="candidates__filters">
        <label>Ordenar por:</label>
        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="">Seleccionar</option>
          <option value="nota">Nota (de mayor a menor)</option>
          <option value="riesgo">Riesgo Académico (de bajo a alto)</option>
          <option value="status">Status (Ayudante anterior primero)</option>
        </select>
      </div>
      <PreliminaryList postulantes={postulantes} onSelect={seleccionarPostulante} onMoreInfo={mostrarMasInformacion} />
      <SelectedList seleccionados={seleccionados} onRemove={quitarPostulante} onMoreInfo={mostrarMasInformacion} />
      {candidatoSeleccionado && (
        <CandidateDetailsModal candidato={candidatoSeleccionado} onClose={cerrarMasInformacion} />
      )}
    </div>
  );
}

export default Candidates;